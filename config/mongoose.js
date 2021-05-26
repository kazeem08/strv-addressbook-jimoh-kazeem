const mongoose = require('mongoose');
/**
 * A MongoDB client based on mongoose
 * To use, simply set an environment variable MONGODB_CONNECTION_STRING to a valid mongodb connection uri
 */

mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};