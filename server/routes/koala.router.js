const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT


// DELETE
// Bennet was here
router.delete('/:id', (req, res) => {
    console.log('DELETE /koala/:id');
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