
const express = require('express')
const cors = require('cors')
const app = express()

const testRouters = require('./routers/testRouters')


app.use(cors())

app.use('/api', testRouters)
// app.use('/api/login', loginRouter)
// app.use('/api/users', userRouter)




module.exports = app