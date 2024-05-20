import { configDotenv } from 'dotenv';

export const envDataBase = {
  db_name: process.env.DB_NAME,
  db_password: process.env.DB_PASSWORD,
  db_owner: process.env.DB_OWNER,
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
};

export const envVariables = {
  port: process.env.PORT,
};

configDotenv();

export const envGoogleVariables = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5173',
  //   callbackURL:
  //     'http://' +
  //     process.env.HOST +
  //     ':' +
  //     process.env.PORT +
  //     '/auth/google/callback',
};
