DROP DATABASE IF EXISTS reactapp;

CREATE DATABASE reactapp;
USE reactapp;

CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
);