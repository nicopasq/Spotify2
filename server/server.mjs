import express from 'express'
import Randomstring from 'randomstring'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

const env = dotenv.config().parsed
const client_id = env.CLIENT_ID
const client_secret = env.CLIENT_SECRET
const port = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send({message:"hello from api"}))

app.get('/login', (req, res) => {
    const state = Randomstring.generate(16)
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

   res.send(data)
})

app.listen(port, (req, res) => console.log(`Listening on port ${port}....`))