const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

morgan.token('tiny-info', function (req, res) { return JSON.stringify(req.body) })

app.use(morgan(`:method :url :status :res[content-length] - :response-time ms - :tiny-info`))

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    id = request.params.id
    const person = persons.find(person => person.id === id)
    
    if (person) 
        response.json(person)
    else
        response.status(404).end()

})

app.post('/api/persons', (request, response) => {
    const person = {id: `${Math.round(Math.random() * 10000)}`, name: request.body.name, number: request.body.number}
    
    if (request.body.name && request.body.number) {
        if (persons.find(person => person.name === request.body.name)) {
            response.status(400).send("name must be unique")
        }
        else {
            persons = [...persons, person]
            console.log("added ", person)
            response.status(200)
            response.json(person)
        }
        
    }
    else {
        response.status(400).send("missing input")
    }
})

app.delete('/api/persons/:id', (request, response) => {
    id = request.params.id
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.get('/info', (request, response) => {
    response.send(
        `<p>Phonebook has info for ${persons.length} people</p>
        ${new Date().toString()}`
    )
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})