import * as dotenv from "dotenv";
dotenv.config();
export default {
  port: process.env.PORT,
  dbUrl: process.env.MONGODB,
  corsOrigin: process.env.CORS_ORIGIN,
  secret: process.env.JWT_SECRET,
  domain: process.env.DOMAIN,
};
