const knex = require('knex');

const config = require('../knexfile.js');

const env = process.env.NODE_ENV || "development";

console.log("the env is", env);

module.exports = knex(config[env]);