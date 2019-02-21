const express = require("express")
const clowns = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Clown = require("../models/Clown")
clowns.use(cors())

process.env.SECRET_KEY = 'secret'

clowns.post('/register', (req, res) => {
    const today = new Date()
    const clownData = {
        nickname: req.body.nickname,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    Clown.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(clown => {
            if (!clown) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    clownData.password = hash
                    Clown.create(clownData)
                        .then(clown => {
                            res.json({ status: clown.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: "Clown already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

clowns.post('/login', (req, res) => {
    Clown.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(clown => {
            if (clown) {
                clown.dataValues.type = 'clown'
                if (bcrypt.compareSync(req.body.password, clown.password)) {
                    let token = jwt.sign(clown.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                res.status(400).json({ error: 'Clown does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

clowns.get('/all', (req, res) => {
    Clown.findAll({
        attributes: [
            'id', 
            'first_name', 
            'last_name',
            'image'
        ]
    })
    .then(clowns => {
        res.send(clowns);
    })
})

clowns.get('/:id', (req, res) => {
    Clown.findById(req.params.id, {
        attributes: [
            'id', 
            'first_name', 
            'last_name'
        ]
    })
    .then(clown => {
        res.send(clown);
    })
    .catch(err => {
        res.status(400).json({ error: err })
    })
})

module.exports = clowns