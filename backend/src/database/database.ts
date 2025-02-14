import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI ||
  'mongodb://admin:admin@127.0.0.1:27017/';

export default mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Database connected');
  })
  .catch(e => {
    console.error('Error connecting to the database: ', e);
  });

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log('Database connected');
//   } catch (e) {
//     console.error('Error connecting to the database: ', e);
//     process.exit(1);
//   }
// }