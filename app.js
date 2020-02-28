const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// get request
app.get('/api', (req, res) => {
    res.send('API Status: Running')
})

// post request
app.post('/api/email', (req, res) => {
    sendGrid.setApiKey('SG.LHNxy3eHSp-lKDLL3U5OGg.fIjhIpDvCqKqKlBBD-H1DJOSlGBLPjm_3D5xF_HXJ44');
    const msg = {
        to: 'lilliana.cramos@gmail.com',
        from: req.body.email,
        subject: 'Portfolio Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            })
            
        })
})


//listening 
app.listen(3000);

