const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('', (req, res, next) => {
    res.redirect('http://neoncat.io');
})

app.listen(8000, () => console.log('Server is up'));
