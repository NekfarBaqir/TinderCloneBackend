import mongoose from 'mongoose'

// cardSchema
const cardSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})

export default mongoose.model('cards',cardSchema);