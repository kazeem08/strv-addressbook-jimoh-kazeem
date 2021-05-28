const { env } = process;

module.exports = {
  env: env.NODE_ENV,
  port: env.PORT,
  jwtSecret: env.JWT_SECRET,
  jwtExpirationInterval: env.JWT_EXPIRATION_MINUTES,
  mongoUri: env.MONGODB_CONNECTION_STRING,
  mongoTestUri: env.MONGODB_CONNECTION_STRING_TEST,
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE,
  messagingSenderId: env.FIREBASE_MESSAGING_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID,


};