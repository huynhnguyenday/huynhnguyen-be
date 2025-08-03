const express = require('express');
const contactRoutes = require('./contact');

const router = express.Router();

// Mount routers
router.use('/contact', contactRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

module.exports = router; 