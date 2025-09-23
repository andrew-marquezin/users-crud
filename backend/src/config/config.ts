import 'dotenv/config';

export const config = {
  PORT: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
}

Object.entries(config).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});