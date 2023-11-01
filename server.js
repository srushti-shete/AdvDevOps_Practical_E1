const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public'))); // Replace 'public' with your directory containing index.html

app.post('/submit-form', (req, res) => {
    console.log('Received a form submission:');
    console.log('Name:', req.body.name);
    console.log('Email:', req.body.email);
    res.send('Form data received and logged.');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
