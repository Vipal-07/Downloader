const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./controller/user');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'https://downloader-url.onrender.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/video-info', userController.getVideoInfo);


app.listen(port, () => {
    console.log("Server is running on port ");
})
