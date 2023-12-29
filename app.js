// COMP 693- M1 Assignment
// Maria C Schultz

import express from 'express'
import {} from 'dotenv/config'  

// have the app listen on port 5000 
// (port 5000 is set in .env, if cannot read from file, use hardcoded 5000)
const PORT = process.env.PORT || 5000

const app =express()
const router = express.Router()

// set the public folder as static
// this will prevent the TypeError 
app.use(express.static('public'))


// Get the '/' route and have it load 'index.html' from the public folder
router.get('/',(req, res) => {
    res.sendFile('index.html', {root:'public'})
})

app.use(router)

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})



