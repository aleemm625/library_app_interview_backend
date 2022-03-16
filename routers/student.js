const express = require('express');
const studentController = require('../controller/student');

const studentRouter = express.Router();

studentRouter.post('/student', studentController.createStudent);

studentRouter.get('/student', studentController.getAllStudents);

studentRouter.get('/student/:id', studentController.getOneStudent);

module.exports = studentRouter;