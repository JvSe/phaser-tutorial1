const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express()

app.use(express.static('src'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/src/index.html"))
})

app.listen(process.env.PORT || 3000 )