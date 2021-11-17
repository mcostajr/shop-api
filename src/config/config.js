require('dotenv').config()

module.exports = {
  username: process.env.DB_USERNAME || 'postgres', 
  password: process.env.DB_PASSWORD || '12345',
  host: process.env.DB_HOSTNAME,
  database: process.env.DB_DATABASE || 'localhost', 
  dialect: 'postgres',
  define: {
    timestamps: false
  }
}