import sql from 'mssql'

const config = {
  user: 'root',
  password: 'root',
  database: 'AdventureWorks2019',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}

export default sql.connect(config)
