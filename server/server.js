const express = require('express')
const bodyParser = require('body-parser')
//IMPORT YOUR CONTROLLER HERE
const pc = require('./controllers/post_controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/post', pc.read)

app.post('/api/post', pc.create)

app.put('/api/post/:id', pc.update)

app.delete('/api/post/:id', pc.delete)

// USE A DIFFERENT PORT IF YOU WANT
const PORT = 3333
// CHANGE THE CONSOLE LOG IF YOU WANT
app.listen(PORT, () => console.log(`The magic is happening on ${PORT}`))