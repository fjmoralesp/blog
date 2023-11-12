const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const usersRouter = require('./src/routes/users.route');
const dbUtil = require('./src/utils/db.util');

/**
 * Perform models synchronization
 */
dbUtil.sync();

/**
 * Set middlewares
 */
app.use(bodyParser.json());

/**
 * Add routes
 */
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`blog-api app listening on port ${port}`);
});
