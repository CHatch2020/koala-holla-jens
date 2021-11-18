const express = require('express');
const koalaRouter = express.Router();

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

module.exports = koalaRouter;