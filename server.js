if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expressLayouts =require('express-ejs-layouts')
    app.set("view engine", 'ejs')
    app.set('views', __dirname + '/views')
    app.set('layout', 'pages/layout')
    app.use(expressLayouts)
    app.use(express.static('public'))


const mongoose = require('mongoose')
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
const db = mongoose.connection
    db.on('error', Error => console.error(error)) 
    db.once('open', () => console.log('Connected to mongoose')) 


const indexRouter = require('./routes/index')
    app.use('/',indexRouter)


app.listen(process.env.PORT || 3000)



