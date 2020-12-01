const { query } = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')
const { QueryCursor } = require('mongoose')
const path = require('path')
// const { delete } = require('./app.js.original')
// const { delete } = require('./app.js.original')
const User = require('./db/mongoose')


app.set('view engine', 'hbs');
const publicDirPath = path.join(__dirname, './public')
// const viewsDirPath = path.join(__dirname, '../views')

// Setup static directory to serve
app.use(express.static(publicDirPath))
console.log(publicDirPath)

app.get('/', (req, res) => {
  res.render('index', {
      name: 'ary'
  })
})

app.get('/gettingstarted', (req, res) => {
    res.render('gettingstarted', {
        credit_card: 'Enter your credit card number'
    })
})

app.get('/process_creditcard', (req, res) => {
    var querycc = req.query.creditcard
    const user = new User({
        name: 'Andrew',
        cc: querycc
    })
    user.save().then(() => {
        console.log(user)
        //console.log(result)
        res.send('[{hello}]')
        console.log('set hello')
    }).catch((e) => {
        res.status(400).send(e)
    })
    // console.log(querycc*2)
    // res.send({
    //     products: querycc*2
    //})
})

app.get('/view_creditcard', (req, res) => {
    var querycc = req.query.creditcard
    // const user = User({
    //     cc: querycc
    // })
    console.log('yay it works')
    console.log(querycc)
    // User.deleteOne({
    //     cc: querycc
    // }).then(() => {
    //     console.log(user)
    //     console.log('hello')
    //     res.send('1234')
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

    User.find({}, function(err, result) {
        console.log('hello')
        console.log(result)
        res.send(result)
})
})


app.get('/delete_creditcard', (req, res) => {
    var querycc = req.query.creditcard
    const user = User({
        cc: querycc
    })
    User.deleteOne({
        cc: querycc
    }).then(() => {
        console.log(user)
        console.log('hello')
        res.send(result)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// app.get('/viewall_creditcard', (req, res) => {
//     var querycc = req.query.credit_card


// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})