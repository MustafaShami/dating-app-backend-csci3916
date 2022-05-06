import express from 'express'
import mongoose from 'mongoose'

//App Configuration and tell what port to listen on
const app = express()
const port = process.env.PORT || 8080


//API endpoints
app.get("/", (req, res) =>
    res.status(200).send("Hello TheWebDev"))


//Listener, listens on port number specified
app.listen(port, () => console.log(`Listening on localhost: ${port}`))