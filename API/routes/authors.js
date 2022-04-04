const express = require('express')
const router = express.Router()
const postgres = require('../server')


router.route('/')
.get( async (req, res)=>{
    const result = await postgres.client.query('SELECT * FROM authors')
    res.send(result.rows)
})
.post( async (req, res) => {
    const {first_name, last_name, is_admin} = req.body;
    await postgres.client.query(`INSERT INTO authors(
             first_name,
             last_name,
             is_admin
             ) VALUES($1::text,$2::text,$3);`,[first_name, last_name, is_admin])
    res.send({
        stworzony_autor: `${first_name},${last_name},${is_admin}`
    })   
})


router.route('/:id')
.get(async (req,res) => {
    const searchUserById = await postgres.client.query(`SELECT * FROM authors WHERE author_id=$1`, [req.params.id])
    res.send(
        searchUserById.rows[0]
    )
}) 
.put(async (req, res) => {
    let arguments = []
    let stringQuery = 'UPDATE authors SET '
    let index = 0
    for(const value in req.body){   
            stringQuery +=  value + '= $' + (index+1) + '::text ,'
            arguments = [...arguments, req.body[value]]
            index += 1
        }
    stringQuery = stringQuery.slice(0,-1) + 'WHERE author_id=$' + (index + 1) +';'
    arguments = [...arguments,req.params.id]
    await postgres.client.query(stringQuery, arguments)
    res.send({
        zmiany: req.body  
    })
})
.delete(async (req,res) => {
    await postgres.client.query('DELETE FROM authors WHERE author_id=$1',[req.params.id])
    res.sendStatus(200)
})

module.exports = router