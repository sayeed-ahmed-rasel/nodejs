const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('welcome to express')
})
const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`server listeing on port ${port}`);
})