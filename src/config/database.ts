import * as process from "process";
import 'dotenv/config'

export const objConfig: { [key:string]: any } = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_URL,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "leoaivy",
    "password": "7WK8VUOhrjEGduVTefAg4McuYWVj7Mk3",
    "database": "inote",
    "host": "dpg-chjcn1qk728k56iq66mg-a.singapore-postgres.render.com",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true
    }
  }
}