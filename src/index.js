const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const rateLimit = require('express-rate-limit');

const { PORT } = require('./config/config');
const connectDB = require('./config/db');

const routes = require('./routes/index');
const logger = require('./config/logger');
const { cyan, green } = require('colorette');

const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const app = express();

// cors
const corsOption = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  Credentials: true,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many request from this ip , please try again later',
});

app.use(cors(corsOption));

app.use(helmet());
app.use(limiter);

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  logger.info('Home route is accessed..!');
  res.send('Welcome To Home Page...!');
});

app.use('/api', routes);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(cyan(`Environment: ${process.env.NODE_ENV}`));
  console.log(green(`Server is running at port ${PORT}`));
});
