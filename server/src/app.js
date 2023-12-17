const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const weatherRoutes = require('./routes/weather')
const { verifyToken } = require('./utils/verifyToken')
const admin = require('firebase-admin')
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const serviceAccount = require('./config/serviceAccountKey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

app.use('/', verifyToken, weatherRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
