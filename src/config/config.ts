import { env } from "process";

require("dotenv").config();
const config = {
  name: env.APP_NAME || "",
  port: env.PORT || 3000,
  baseUrl: env.BASE_URL || "",
  database: {
    connectionString: env.DB_URL || "",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  authentication: {
    jwtSecret: env.JWT_SECRET,
  },
  email: {
    service: "gmail",
    account: "",
    password: "",
    sender: "",
    senderName: "",
  },
};

export default config;
