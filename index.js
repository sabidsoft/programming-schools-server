const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const courses = require('./data/languages.json')


app.use(cors())

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

//const coursesDetails = require('./data/details.json')

// app.get('/courses/:id', (req, res) => {
//     res.send(coursesDetails.find(course => course.course_id === req.params.id))
// })