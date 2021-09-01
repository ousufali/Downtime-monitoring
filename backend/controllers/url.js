
const Url = require('../models/url')
const urlRouter = require('express').Router()
const fetch = require('node-fetch')
const { request } = require('../app')
const { response } = require('express')


const saveInDB = async (newUrl, status, time) => {
    const urls = await Url.find({})
    const myurl = urls.find(x => x.url == newUrl)
    if (myurl) {
        console.log("url in DB:", myurl)

        const updatedMyUrl = {
            url: newUrl, url_details: [...myurl.url_details, {
                "time_stamp": time,
                "status_code": status
            }]
        }


        // console.log("ID:  ", myurl.id)
        // console.log("updatedmyurl :", updatedMyUrl)

        const returnedDbObj = await Url.findByIdAndUpdate(myurl.id, updatedMyUrl, { new: true })
        // console.log("returnedDbObj :", returnedDbObj)

        // return { val: "hello from saveInDB func" }
        return returnedDbObj
    } else {
        const urlObj = new Url({
            url: newUrl,
            url_details: [
                {
                    "time_stamp": time,
                    "status_code": status
                }
            ]

        })
        const returnedDbObj = await urlObj.save()
        return returnedDbObj
    }

}

urlRouter.get('/', async (request, response) => {
    const urls = await Url.find({})
    console.log("urs in DB:   ", urls)
    if(urls){
        response.status(200).send(urls)

    }else{
        response.status(404)
    }
})

urlRouter.get('/:url', async (request, response) => {
    // const body = request.body
    let targetUrl = request.params.url
    targetUrl = "https://" + targetUrl
    let time
    const data = await fetch(targetUrl)
        .then(res => {
            // console.log(`.........   res\n `)
            // console.log(res.status)
            // console.log(`.........   res\n `)
            time = Date()
            return res.status
        })
        .catch(error => {
            time = Date()
            return error
        })


    // console.log("-------------------------------------------")
    // console.log(time)
    // console.log(data)
    // console.log("-------------------------------------------")

    let returnedObj
    let statusCode

    if (data.code) {
        returnedObj = await saveInDB(targetUrl, 410, time)
        statusCode = 410
    } else {
        returnedObj = await saveInDB(targetUrl, data, time)
        statusCode = data
    }

    // {
    //     #     "url": "https://google.com",
    //     #     "url_details": [
    //     #         {
    //     #             "time_stamp": "thu aug 26 2021 12:49:00",
    //     #             "status_code": 200
    //     #         }
    //     #     ]
    //     # }
    // const newUrl = new Url(body)

    // const savedUrl = await newUrl.save()



    response.status(statusCode).send(returnedObj)
})




module.exports = urlRouter