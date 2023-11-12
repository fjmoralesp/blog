const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const usersRouter = require('./src/routes/users.route');
const dbUtil = require('./src/utils/db.util');
const errorMiddleware = require('./src/middlewares/error.middleware');

/**
 * Perform model configuration
 */
dbUtil.sync();
dbUtil.registerRelations();

/**
 * Set init global middlewares
 */
app.use(bodyParser.json());

/**
 * Add routes
 */
app.use('/users', usersRouter);

/**
 * Set final global middlewares
 */
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`blog-api app listening on port ${port}`);
});
