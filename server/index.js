const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const db = mysql.createPool({
  // the sql data will be retrieved from docker file in the future.
  host: process.env.DB_HOST, // the host name MYSQL_DATABASE: node_mysql
  user: process.env.DB_USER, // database user MYSQL_USER: MYSQL_USER
  password: process.env.DB_PASS, // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "user_products_db", // database name MYSQL_HOST_IP: mysql_db
});

app.use(cors());

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi There, api test");
});


// get data from api rest api
app.get("/api/getData", (req, res) => {
  
});
