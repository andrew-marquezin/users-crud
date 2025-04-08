import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URL ||
  'mongodb://admin:admin@127.0.0.1:27017/';

export default mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Database connected');
  })
  .catch(e => {
    console.error('Error connecting to the database: ', e);
  });