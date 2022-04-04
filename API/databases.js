const authorSchema = `CREATE TABLE IF NOT EXISTS authors(
    author_id BIGSERIAL NOT NULL PRIMARY KEY, 
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    is_admin BOOLEAN
);`

const blogSchema = ` CREATE TABLE IF NOT EXISTS blogs(
blog_id BIGSERIAL NOT NULL PRIMARY KEY, 
author_id INT NOT NULL,
title VARCHAR(50) NOT NULL,
cover_src VARCHAR,
text VARCHAR NOT NULL,
tags TEXT [], 
no_of_reactions INTEGER[4], 
views INTEGER,
CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES authors(author_id)
);`

exports.authorSchema = authorSchema
exports.blogSchema = blogSchema