const express = require('express')

module.exports = function(server) {
  
  // Defines URL base for all rotes
  const router = express.Router()
  server.use('/api', router)

  // Estimation rotes
  const Estimation = require('../api/estimation/estimationService')
  Estimation.register(router, 'estimations')
}