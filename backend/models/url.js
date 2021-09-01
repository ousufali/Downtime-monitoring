const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const urlSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true

    },
    url_details: [
        {
            time_stamp: {
                type: String,
                default : Date

            },
            status_code: {
                type: Number

            }


        }
    ]

})
urlSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
urlSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Url', urlSchema)