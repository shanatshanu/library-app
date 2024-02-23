const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/library')
const Schema = mongoose.Schema;
const BookSchema = new Schema({
    title:String,
    author:String,
    genre:String,
    image:String

})

var BookData=mongoose.model('bookdata',BookSchema)
module.exports = BookData;