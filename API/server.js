require('dotenv').config()
const express = require('express')
const app = express()
const blogRoutes = require('./routes/blogs')


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


app.listen(5000, ()=>{
    console.log('Połączono z API');
})

app.use('/',blogRoutes)



