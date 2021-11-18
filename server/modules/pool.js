const pg = require('pg');

const config = {
  database: 'KoalaHolla', 
  //user: 'postgres',          // Might have to comment out for MAC
  //password: ' ',             // Might have to comment out for MAC
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000 
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});

pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
});

module.exports = pool;