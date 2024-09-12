const express = require('express');
const router = express.Router();
const pengelolaanKelasController = require('../controllers/pengelolaan.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

// Create a new Pengelolaan Kelas (Admin and Instructor)
router.post('/', auth, authorize('admin', 'instructor'), pengelolaanKelasController.createPengelolaanKelas);

// Get all Pengelolaan Kelas (Authenticated Users)
router.get('/', auth, pengelolaanKelasController.getAllPengelolaanKelas);

// Get Pengelolaan Kelas by ID (Authenticated Users)
router.get('/:id', auth, pengelolaanKelasController.getPengelolaanKelasById);

// Update Pengelolaan Kelas (Admin and Instructor)
router.put('/:id', auth, authorize('admin', 'instructor'), pengelolaanKelasController.updatePengelolaanKelas);

// Delete Pengelolaan Kelas (Admin)
router.delete('/:id', auth, authorize('admin'), pengelolaanKelasController.deletePengelolaanKelas);

module.exports = router;
