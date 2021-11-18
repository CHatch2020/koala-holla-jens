const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION


// GET
koalaRouter.get('/', (req, res) => {
    console.log('GET /koalas');
    const sqlText = 'SELECT * FROM koalas;';
    pool.query(sqlText)
    .then((dbResult) => {
        console.log(`${dbResult.rows.length} rows to send.`)
        res.send(dbResult.rows);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req, res) => {
    console.log('POST /koalas');
    console.log('req.body:', req.body);
    const newKoala = req.body;
    const sqlText = `
      INSERT INTO "songs"
        ("name", "age", "gender", "readyForTransfer", "notes")
      VALUES
        ($1, $2, $3, $4, $5);
    `;
    const sqlValues = [
      newKoala.name,
      newKoala.age,
      newKoala.gender,
      newKoala.readyForTransfer,
      newKoala.notes
    ];
    pool.query(sqlText, sqlValues)
    .then((dbResult) => {
        console.log('\tINSERT succeeded.');
        res.sendStatus(201);
    })
    .catch((dbErr) => {
        console.error(dbErr);
        res.sendStatus(500);
    });
});

// PUT


// DELETE
// Bennett was here
koalaRouter.delete('/:id', (req, res) => {
  console.log('req.params:', req.params);
  const koalaId = req.params.id;
  const sqlText = `
    DELETE FROM "koalas"
      WHERE "id"=$1;
  `;
  const sqlValues = [ koalaId ];

  pool.query(sqlText, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});

module.exports = koalaRouter;