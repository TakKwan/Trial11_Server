const express = require('express')
const app = express()
const cors = require('cors')

const router = require('./routes')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.use('/api', router)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))