const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/cc_db', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    cc: {
        type: Number
    }
})




// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })
module.exports = User