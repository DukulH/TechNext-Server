const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

const router = require('./routers/employeeRouter.js')
app.use('/api/employees', router)


app.get('/', (req, res) => {
    res.send('hello')
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})