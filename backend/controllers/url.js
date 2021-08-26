
const Url = require('../models/url')
const urlRouter = require('express').Router()




urlRouter.post('/', async (request, response) => {
    const body = request.body
    console.log("............request...............")
    // console.log(request)
    console.log(body)
    // console.log(request.token)
    console.log("...........END...request...............")


    const newUrl = new Url(body)

    const savedUrl = await newUrl.save()



    response.status(200).send(savedUrl)
})




module.exports = urlRouter