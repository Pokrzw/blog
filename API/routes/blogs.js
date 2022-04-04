const express = require('express')
const router = express.Router()
const postgres = require('../server')

router.route('/')
.get( async (req, res)=>{
    const result = await postgres.client.query('SELECT * FROM blogs')
    res.send(result.rows)
})
.post( async (req, res) => {
    const {author_id, title, cover_src, text, tags, no_of_reactions, views} = req.body;
    const checkIfExists = (await postgres.client.query('SELECT EXISTS(SELECT * FROM authors WHERE author_id=$1)',[author_id])).rows[0].exists

    if(!checkIfExists){res.sendStatus(400)}
    else{
    await postgres.client.query(`INSERT INTO blogs(
             author_id,
             title,
             cover_src,
             text,
             tags,
             no_of_reactions,
             views
             )
        VALUES($1,$2::text,$3::text,$4::text,$5,$6,$7);`,[author_id, title, cover_src, text, tags, no_of_reactions, views])
    res.send({stworzono_wpis: `${title}`})}
})



module.exports = router