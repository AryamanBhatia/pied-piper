const mongoose = require('mongoose')

console.log('before connect') 
const uri = process.env.MONGODB
console.log(uri)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
console.log('after connect')


// mongoose.connect('mongodb://127.0.0.1:27017/cc_db', {
//     useNewUrlParser: true,
//     useCreateIndex: true
// })

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