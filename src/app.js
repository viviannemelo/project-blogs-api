const express = require('express');
const { loginRouter } = require('./routers/loginRouter');

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ...

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use('/login', loginRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
