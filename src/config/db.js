const mongoose = require('mongoose');
const logger = require('./logger');

const connectDB = async () => {
  try {
    const DATABASE_URL = process.env.DATABASE_URl;
    await mongoose.connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDb connected Successfully');
  } catch (error) {
    logger.error('MongoDB connection failed');
    process.exit(1);
  }
};

module.exports = connectDB;
