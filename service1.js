const express = require('express')
const axios = require("axios")
const {response, request} = require("express");
const app = express()
const port = 3000

let score = 0;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use((req, res, next) => {
    next()
})

const roster1 = new Map([
    ['player1', 1],
    ['player2', 2],
    ['player3', 3],
    ['player4', 4],
    ['player5', 5]
])

const roster2 = new Map([
    ['player1', 6],
    ['player2', 7],
    ['player3', 8],
    ['player4', 9],
    ['player5', 10]
])

let users;
users = {
    user1: {username: 'user1', roster: roster1},
    user2: {username: 'user2', roster: roster2}
}

app.get('/getfinalscore/:username', async function (req, res) {
    let username = req.params.username
    console.log('user1 player 1 score: ' + users.user1.roster.get('player1'))
    if (users.user1.username == username) {
        score += users.user1.roster.get('player1')
        score += users.user1.roster.get('player2')
        score += users.user1.roster.get('player3')
        score += users.user1.roster.get('player4')
        score += users.user1.roster.get('player5')

        axios.get("http://localhost:8080/getplayerscore/:playername")
            .then(response => {
                let player = request.params.playername
                res.json(users.user1.roster.get(player))
            })
        console.log(score)
        res.json({score: score})
    }
});
