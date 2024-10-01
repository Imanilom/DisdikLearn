const express = require('express');
const router = express.Router();
const riwayatMapelController = require('../controllers/riwayatmapel.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

// Create a new RiwayatMapel (Admin and Instructor)
router.post('/', auth, authorize('admin', 'instructor'), riwayatMapelController.createRiwayatMapel);

// Get all RiwayatMapel for a student (Authenticated Users)
router.get('/', auth, authorize('student', 'instructor', 'admin'), riwayatMapelController.getAllRiwayatMapel);

// Get RiwayatMapel by ID (Authenticated Users)
router.get('/:id', auth, authorize('student', 'instructor', 'admin'), riwayatMapelController.getRiwayatMapelById);

// Update RiwayatMapel (Admin and Instructor)
router.put('/:id', auth, authorize('admin', 'instructor'), riwayatMapelController.updateRiwayatMapel);

// Delete RiwayatMapel (Admin)
router.delete('/:id', auth, authorize('admin'), riwayatMapelController.deleteRiwayatMapel);

module.exports = router;
