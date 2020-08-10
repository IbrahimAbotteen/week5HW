  
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser')
const todoRouter=require('./router/todoRouter')

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.set('views', 'view');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', { message: 'Hello world!'});
  });

app.get('/todo',todoRouter);

app.use('*', (req, res) => {
    res.status(404).send({
      error: 'Not Found',
    });
  });

app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
  });
