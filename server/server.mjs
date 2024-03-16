import express from 'express'
import Randomstring from 'randomstring'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'
import session from 'express-session'

const env = dotenv.config().parsed
const client_id = env.CLIENT_ID
const client_secret = env.CLIENT_SECRET
const port = process.env.PORT || 3001
const app = express()
const state = Randomstring.generate(16)
app.use(cors())
app.use(express.json())
app.use(session({
    secret:'secret',
    id:'',
    tokenData:{},
}))

app.get('/', (req, res) => {
    if (session.tokenData ){
        res.send(session.tokenData)
    }
})

app.get('/login', (req, res) => {
    const scope = 'user-read-private user-read-email'

    res.redirect(`https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000&response_type=code&scope=${scope}&state=${state}`)
})

app.post('/callback', async(req, res) => {
    const code = req.body.code|| null;
    
    const params = new URLSearchParams() 
    params.append("grant_type","authorization_code")
    params.append("code", code)
    params.append("redirect_uri", "http://localhost:3000")
    
    const meta = {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    }
    
    const response =  await fetch('https://accounts.spotify.com/api/token', {method:"POST", headers:meta, body:params})
    const data = await response.json()
    
    if (data.access_token){
        session.id = state
        session.tokenData = data
       res.send(data)
    } 
})

app.listen(port, (req, res) => console.log(`Listening on port ${port}....`))