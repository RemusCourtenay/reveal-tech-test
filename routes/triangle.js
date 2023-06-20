const express = require('express');
const router = express.Router();
const handler = require('../services/triangle');
const e = require('express');

/* GET Triangle Type. */
router.get('/', async function(req, res, next) {
  try {
    res.status(200).send(await handler.getTriangleType(req.query["a"], req.query["b"], req.query["c"]));
  } catch (err) {
    //console.error(`Error while calculating triangle: `, err.message);
    
    if (err instanceof TypeError) {
      err.statusCode = 400;
    }

    next(err);
  }
});

module.exports = router;