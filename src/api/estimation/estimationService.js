const Estimation = require('./estimation')

Estimation.methods(['get', 'post', 'put', 'delete'])
Estimation.updateOptions({ new: true, runValidators: true }) //by default, runValidators is true only for insertion (post), not for updates (put)

module.exports = Estimation