import { app } from './app';
import './database/database';
// import { connectDB } from './database/database';

const PORT = process.env.PORT || 3001;

// connectDB().then(() => {
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})
// })