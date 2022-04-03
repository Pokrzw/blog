CREATE DATABASE IF NOT EXISTS authors(
    author_id BIGSERIAL NOT NULL PRIMARY KEY, 
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    is_admin BOOLEAN
);