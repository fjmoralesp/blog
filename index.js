const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const usersRouter = require('./src/routes/users.route');
const postsRouter = require('./src/routes/posts.route');
const commentsRouter = require('./src/routes/comments.route');
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
app.use(cors())
app.use(bodyParser.json());

/**
 * Add routes
 */
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

/**
 * Set final global middlewares
 */
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`blog-api app listening on port ${port}`);
});
