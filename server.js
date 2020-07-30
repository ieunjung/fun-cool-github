const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 80

app.use('/api', require('./api'))

app.get('/', (req, res) => res.send('Fun Cool Github!'))
app.listen(port, () => console.log(`API Server listening on port ${port}!`))
