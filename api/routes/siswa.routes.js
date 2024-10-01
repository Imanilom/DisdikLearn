const express = require('express');
const siswaController = require('../controllers/student.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

const router = express.Router();

// Route untuk pendaftaran siswa (Admin dan Instructors saja yang dapat mendaftarkan)
router.post('/register', auth, authorize('admin', 'instructor'), siswaController.registerSiswa);

module.exports = router;
