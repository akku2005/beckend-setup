const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();

router.get('/', async (req, res) => {
  const dbStatus = mongoose.connection.readyState;

  let dbHealth = '';
  switch (dbStatus) {
    case 0:
      dbHealth = 'Disconnected';
      break;
    case 1:
      dbHealth = 'Connected';
      break;
    case 2:
      dbHealth = 'Connecting';
      break;
    case 3:
      dbHealth = 'Disconnecting';
      break;
    default:
      break;
  }
  const healthStatus = {
    server: 'Up',
    database: dbHealth,
  };
  if (dbHealth === 'Connected') {
    res.status(200).json({ healthStatus });
  } else {
    res.status(500).json(healthStatus);
  }
});

module.exports = router;
