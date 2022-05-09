require('dotenv').config()
module.exports = {
  development: {
    database: 'trial11_development',
    dialect: 'postgres'
  },
  test: {
    database: 'trial11_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}

