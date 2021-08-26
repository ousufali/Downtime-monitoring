const fetch = require('node-fetch')
const testRouters = require('express').Router()


testRouters.get("/", (req, res) => {

    console.log("+++++++++++++++++++++++++++++=")
    console.log(req.body)
    console.log("+++++++++++++++++++++++++++++=")

    res.status(200)
        .send("hello from backend part.")
})

testRouters.get("/google", async (req, res) => {

    console.log(req.params)
    console.log(".......params........")

    const data = await fetch('https://google.com')
        // .then(res => res.text())

        .then(res => {
            // console.log(`.........   res\n `)
            // console.log(res.status)
            // console.log(`.........   res\n `)

            return res.status
        }

        )

        .catch(error => "request failed.")

    console.log(data)

    if (data != 200) {
        res.status(400)
            .send("website is down")
    } else {
        res.status(200)
            .send(data)
    }


})






module.exports = testRouters