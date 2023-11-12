const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const usersRouter = require('./src/routes/users.route');

app.use(bodyParser.json());

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`blog-api app listening on port ${port}`);
});
