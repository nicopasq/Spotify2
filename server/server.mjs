import express from 'express'
import Randomstring from 'randomstring'
import cors from 'cors'
import fetch from 'node-fetch'

const client_id = ''
const client_secret = ''
const port = process.env.PORT || 3001
const app = express()
app.use(cors())
// app.use(express.json())

app.get('/', (req, res) => res.send({message:"hello from api"}))

app.listen(port, (req, res) => console.log(`Listening on port ${port}....`))