require("dotenv").config();

module.exports = {
  MAIL_USER: process.env.MAIL_USER,
  MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  PORT: process.env.PORT,
};
