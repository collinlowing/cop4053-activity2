const express = require('express')
const axios = require("axios")
const {request} = require("express");
const app = express()
const port = 8080

app.use((req, res, next) => {
    next()
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.get('/getplayerscore/:playername', async function (req, res) {
    let playername = req.params.playername

    axios.get("http://localhost:3000/getplayerscore/:playername")
        .then(response => res.json(response.data))
});

