module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: true,
  entities: ['./src/**/*.entity{.ts,.js}'],
  seeds: ['./database/seeds/**/*.seed.ts'],
  factories: ['./database/factories/**/*.factory.ts'],
  migrations: ['./serve/src/database/migration/**/*.ts'],
  cli: {
    migrationsDir: './database/migration'
  }
}
