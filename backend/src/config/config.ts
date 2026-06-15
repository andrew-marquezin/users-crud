import 'dotenv/config';

export const config = {
  PORT: process.env.PORT,
  mongoURL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
  API_KEY: process.env.API_KEY,
}

Object.entries(config).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});