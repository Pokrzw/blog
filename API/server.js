require('dotenv').config()
const express = require('express')
const app = express()
const blogRoutes = require('./routes/blogs')
const authorRoutes = require('./routes/authors')
const schemes = require('./databases.js')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')


app.use(jsonParser)
app.use(cors())

const {Client} = require('pg')
const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
});
client.connect().then(()=>{
    console.log('Połączono z postgresem. Baza danych działa na porcie 5432');
})

client.query(schemes.authorSchema)
client.query(schemes.blogSchema)

app.listen(5000, ()=>{
    console.log('Połączono z API');
})


app.use('/',blogRoutes)
app.use('/authors',authorRoutes)

exports.client = client



