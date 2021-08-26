
const express = require('express')
const cors = require('cors')
const app = express()

const urlRouter = require('./controllers/url')
const testRouters = require('./routers/testRouters')

const mongoose = require('mongoose')

const { MONGODB_URI } = require('./secrets/config')

// console.log("connecting to ", MONGODB_URI)


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connected to mongoDB"))
    .catch(() => console.log("mongoDB connection failed"))








app.use(express.json())
app.use(cors())

app.use('/api', testRouters)
app.use('/api/url', urlRouter)
// app.use('/api/login', loginRouter)
// app.use('/api/users', userRouter)




module.exports = app