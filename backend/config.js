const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  MSG: process.env.MSG,
  PORT: process.env.PORT,
  API_KEY: process.env.SENDGRID_API_KEY
};
