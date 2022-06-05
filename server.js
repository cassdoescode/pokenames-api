const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const pokemon = {
    'sprigatito': {
        'name': 'sprigatito',
        'category': 'grass cat',
        'type': 'grass',
        'height': '1 ft 4 in',
        'weight': '9 lbs.',
        'ability': 'overgrow',
        'dexEntry': 'Capricious and attention seeking, it may sulk if it sees its Trainer giving attention to a Pok&eacute;mon other than itself.'
    },
    'fuecoco': {
        'name': 'fuecoco',
        'category': 'fire croc',
        'type': 'fire',
        'height': '1 ft 4 in',
        'weight': '21.6 lbs.',
        'ability': 'blaze',
        'dexEntry': 'Fuecoco is laid-back and does things at its own pace. It loves to eat, and it will sprint toward any food it finds with a glint in its eye.'
    },
    'quaxly': {
        'name': 'quaxly',
        'category': 'duckling',
        'type': 'water',
        'height': '1 ft 8 in',
        'weight': '13.4 lbs.',
        'ability': 'torrent',
        'dexEntry': 'This serious-mannered Pok&eacute;mon will follow in its Trainer\'s wake. It\'s tidy, and it especially dislikes getting its head dirty.'
    },
    'pawmi':{
        'name': 'pawmi',
        'category': 'mouse',
        'type': 'electric',
        'height': '1 ft',
        'weight': '5.5 lbs.',
        'ability': 'static / natural cure',
        'dexEntry': 'Pawmi is one of the Pok&eacute;mon used by Nemona, your friend.'
    },
    'lechonk':{
        'name': 'lechonk',
        'category': 'hog',
        'type': 'normal',
        'height': '1 ft 8 in',
        'weight': '22.5 lbs.',
        'ability': 'aroma veil / gluttony',
        'dexEntry': 'Lechonk is one of the Pok&eacute;mon used by Nemona, your friend.'
    },
    'smoliv':{
        'name': 'smoliv',
        'category': 'olive',
        'type': 'grass/normal',
        'height': '1 ft',
        'weight': '14.3 lbs.',
        'ability': 'early bird',
        'dexEntry': 'Smoliv is one of the Pok&eacute;mon used by Nemona, your friend.'
    },
    'unknown':{
        'name': 'unknown',
        'category': 'unknown',
        'type': 'unknown',
        'height': 'unknown',
        'weight': 'unknown',
        'ability': 'unknown',
        'dexEntry': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/', (request, response) => {
    response.json(pokemon)
})

app.get('/api/:name', (request, response) => {
    const pokeName = request.params.name.toLowerCase()
    if(pokemon[pokeName]){
        response.json(pokemon[pokeName])
    }else{
        response.json(pokemon['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Now running on port ${PORT}`)
})

