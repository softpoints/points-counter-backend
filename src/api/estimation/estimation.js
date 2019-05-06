const restful = require('node-restful')
const mongoose = restful.mongoose

const workItemSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome do item'] },
  value: { type: Number, min: 0, required: true},
  status: { type: String, required: false, uppercase: true,
    enum: ['PENDENTE', 'CONCLUÍDO'] }
})

const estimationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  month: { type: Number, min: 1, max: 12, required: true },
  year: { type: Number, min: 1970, max: 2100, required: true },
  workItems: [workItemSchema],
})

module.exports = restful.model('Estimation', estimationSchema)