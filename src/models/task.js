const mongoose = require("mongoose")
const User = require("./user")


const taskSchema = new mongoose.Schema({
    description: {
        type: String
    },
    completed: {
        type: Boolean
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})
const Task = mongoose.model('Task', taskSchema)

module.exports = Task