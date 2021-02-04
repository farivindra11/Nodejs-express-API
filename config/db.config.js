"use strict";

const { Pool } = require("pg");

const pool = new Pool({
  user: "fariv",
  host: "localhost",
  database: "siska",
  password: "fariv11",
  port: 5432,
});

module.exports = pool;
