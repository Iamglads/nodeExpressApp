const express = require('express');
const app = express();


// une application est une série de fonction appelées middleware, chaque element de middleware recoit les objets request et response 


app.use( (req, res, next) => {
    console.log('Requete reçue !')
    next()
})

app.use( (req, res, next) => {
    res.status(201)
    next()
})

app.use ( (req, res, next) => {
    res.json({ message : 'Votre requete a bien été reçu !'});
    next()
})

app.use( (req, res, next) => {
    console.log('Réponses envoyée avec succès !')
})

module.exports = app;