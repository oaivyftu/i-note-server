export const objConfig: { [key:string]: any } = {
  "development": {
    "username": "postgres",
    "password": "abcd1234",
    "database": "inote",
    "host": "127.0.0.1",
    "dialect": "postgres"
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
    "host": "postgres://leoaivy:7WK8VUOhrjEGduVTefAg4McuYWVj7Mk3@dpg-chjcn1qk728k56iq66mg-a/inote",
    "dialect": "postgres"
  }
}