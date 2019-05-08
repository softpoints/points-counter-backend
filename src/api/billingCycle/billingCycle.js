const restful = require('node-restful')
const mongoose = restful.mongoose


const activitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
})

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true },
    activities: [activitySchema],
    value: { type: Number, min: 0, required: true }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)