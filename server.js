import express from 'express'
import mongoose from 'mongoose'
import Cards from './Cards.js'

//App Configuration and tell what port to listen on
const app = express()
 const port = process.env.PORT || 8080
 const connection_url = 'mongodb+srv://MustafaShami:finalapi@cluster0.2vuaf.mongodb.net/dating-app-MERN?retryWrites=true&w=majority'

try {
    mongoose.connect( connection_url, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
        console.log("connected"));
}catch (error) {
    console.log("could not connect");
}
//mongoose.set("useCreateIndex", true);


//API endpoints
app.get("/", (req, res) =>
    res.status(200).send("Hello TheWebDev"));

app.post('/dating/cards', (req, res) => {
    const dbCard = req.body
    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.get('/dating/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        } })
})

//Listener, listens on port number specified
app.listen(port, () => console.log(`Listening on localhost: ${port}`))