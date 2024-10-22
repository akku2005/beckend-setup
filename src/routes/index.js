const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const healthRoute = require('./healthRoute');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/health', healthRoute);

module.exports = router;
