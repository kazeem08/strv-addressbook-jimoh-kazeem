const mongoose = require('mongoose');
const mongoConfig = require('./vars')
/**
 * A MongoDB client based on mongoose
 * To use, simply set an environment variable MONGODB_CONNECTION_STRING to a valid mongodb connection uri
 */

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

const mongoString = process.env.NODE_ENV === 'test' ? mongoConfig.mongoTestUri : mongoConfig.mongoUri;
exports.connect = () => {
  mongoose
    .connect(mongoString, {
      useCreateIndex: true,
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};