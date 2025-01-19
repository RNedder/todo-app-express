const express = require('express');
const morgan = require('morgan');
// import routers
const taskRouter = require('./routes/taskRouter');
const favoriteRouter = require('./routes/favoriteRouter');
const completedRouter = require('./routes/completedRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/tasks', taskRouter);
app.use('/favorites', favoriteRouter);
app.use('/completed', completedRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});