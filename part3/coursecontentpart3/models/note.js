const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const password = encodeURIComponent(process.env.mongoPassword)
console.log(password)
//const url = process.env.MONGODB_URI
const url = `mongodb+srv://ssingh5876:${password}@fullstackopen.kw0pola.mongodb.net/noteApp?retryWrites=true&w=majority`

console.log('connecting to', url)

mongoose.connect(url)

  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true
      },
  important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


module.exports = mongoose.model('Note', noteSchema)
