CREATE DATABASE IF NOT EXISTS blogPost(
    blog_id BIGSERIAL NOT NULL PRIMARY KEY, 
    author_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    tags TEXT [], 
    no_of_reactions INTEGER[4], 
    views INTEGER
    CONSTRAINT fk_author FOREIGN KEY(author_id) REFERENCES authors(author_id)
);