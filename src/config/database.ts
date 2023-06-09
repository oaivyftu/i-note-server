import * as process from "process";
import "dotenv/config";

export const objConfig: { [key: string]: any } = {
  development: {
    username: "postgres",
    password: "abcd1234",
    database: "inote",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  },
};
