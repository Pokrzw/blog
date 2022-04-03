require('dotenv').config()
const {Client} = require('pg')

const client = new Client({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'postgres',
});
client.connect()
.then(()=>{
    console.log('Połączono z postgresem. Zaraz zostanie stworzona baza danych');
})

client
.query('SELECT datname FROM pg_database WHERE datistemplate = false;')
.then((results)=>{
    const existingDatabases = results.rows.map(database => {
        return database.datname
    })
    if (existingDatabases.includes('blog_database')){
        console.log("Baza juz istnieje");
    } else{
        client.query('CREATE DATABASE blog_database;').then(()=> {
            console.log('Baza blog_database została stworzona');
        })
    }
}).finally(()=>{client.end()})

