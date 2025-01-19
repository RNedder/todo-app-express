const express = require('express');
const taskRouter = express.Router();

// routing chain for tasks
// root level of tasks
taskRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next(); // routing moves to next relevant method
})
.get((req, res) => {
    res.end('Will provide the list of tasks');
})
.post((req, res) => {
    res.end(`Will add the task: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /tasks');
})
// !!restrict access to this later!!
.delete((req, res) => {
    res.end('Deleting all tasks');
});
taskRouter.route('/:taskId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will provide the details for task: ${req.params.taskId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /tasks/${req.params.taskId}`);
})
.put((req, res) => {
    res.write(`Updating the task: ${req.params.taskId}\n`);
    res.end(`Will update the task ${req.body.name} to: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting task: ${req.params.taskId}`);
});

module.exports = taskRouter;