import mongoose from 'mongoose'
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

try {
    mongoose.connect( process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
//mongoose.set('useCreateIndex', true);


const cardSchema = new Schema({
    name: String,
    imgUrl: String
})
export default mongoose.model('cards', cardSchema)