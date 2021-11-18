const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


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
koalaRouter.put('/:id', (req, res) => {
  console.log('req.params:', req.params);
  const update = req.params.id;
  const transfer = 'Y';
  const sqlText = `
  UPDATE "koalas"
  SET "ready_to_transfer"=$1
  WHERE "id"=$2
  `;
  const sqlValues = [
    transfer,
    update
  ]
  pool.query(sqlText, SqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    }).catch((dbErr) => {
      res.sendStatus(500);
    })
})

// DELETE

module.exports = koalaRouter;