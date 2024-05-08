// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let doctorInfo = {
    doctorName: 'Amos Clinton',
    designation: 'Chief Medical Officer',
    description: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: ''
};

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

app.get('/doctor', (req, res) => {
    res.json(doctorInfo);
});

app.post('/updateDoctorInfo', (req, res) => {
    doctorInfo = req.body;
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.redirect('/admin'); // Redirect to the admin page by default
});
