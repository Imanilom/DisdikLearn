const express = require('express');
const router = express.Router();
const penjadwalanController = require('../controllers/penjadwalan.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

// Create a new Penjadwalan (Admin and Instructor)
router.post('/', auth, authorize('admin', 'instructor'), penjadwalanController.createPenjadwalan);

// Get all Penjadwalan (Authenticated Users)
router.get('/', auth, penjadwalanController.getAllPenjadwalan);

// Get Penjadwalan by ID (Authenticated Users)
router.get('/:id', auth, penjadwalanController.getPenjadwalanById);

// Update Penjadwalan (Admin and Instructor)
router.put('/:id', auth, authorize('admin', 'instructor'), penjadwalanController.updatePenjadwalan);

// Delete Penjadwalan (Admin)
router.delete('/:id', auth, authorize('admin'), penjadwalanController.deletePenjadwalan);

module.exports = router;
