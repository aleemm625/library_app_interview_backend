const express = require('express');
const cors = require('cors');

const studentRouter = require('./routers/student');
const bookRouter = require('./routers/book');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bookRouter);
app.use(studentRouter);

app.listen(5556, ()=>{
    console.log('server listening on port 5556');
});