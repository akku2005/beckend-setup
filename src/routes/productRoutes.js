const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res
    .status(200)
    .json({ success: true, data: ['product-1', 'product-2', 'product-3'] });
});

module.exports = router;
