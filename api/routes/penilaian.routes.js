const express = require('express');
const router = express.Router();
const penilaianController = require('../controllers/penilaian.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

// Create a new Penilaian (Instructor)
router.post('/', auth, authorize('instructor'), penilaianController.createPenilaian);

// Get all Penilaian (Instructor and Admin)
router.get('/', auth, authorize('instructor', 'admin'), penilaianController.getAllPenilaian);

// Get Penilaian by ID (Instructor and Admin)
router.get('/:id', auth, authorize('instructor', 'admin'), penilaianController.getPenilaianById);

// Update Penilaian (Instructor)
router.put('/:id', auth, authorize('instructor'), penilaianController.updatePenilaian);

// Delete Penilaian (Admin)
router.delete('/:id', auth, authorize('admin'), penilaianController.deletePenilaian);

module.exports = router;
