const express = require('express');
const genres = require('../routes/genres');
const customers = require('../routes/customers');
const movies = require('../routes/movies');
const rentals = require('../routes/rentals');
const users = require('../routes/users');
const login = require('../routes/login');
const logout = require('../routes/logout');
const error = require('../middleware/error');

module.exports = function(app){

  app.use('/api/genres', genres);
  app.use('/api/customers', customers);
  app.use('/api/movies', movies);
  app.use('/api/rentals', rentals);
  app.use('/api/users', users);
  app.use('/api/login', login);
  app.use('/api/logout', logout);
  app.use(express.json());
  app.use(error);
  
}