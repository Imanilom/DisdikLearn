const express = require('express');
const router = express.Router();
const kurikulumController = require('../controllers/kurikulum.controller');
const auth = require('../middlewares/auth');
const { authorize } = require('../utils/role');

// Create a new Kurikulum (Admin)
router.post('/', auth, authorize('admin'), kurikulumController.createKurikulum);

// Get all Kurikulum (Authenticated Users)
router.get('/', auth, kurikulumController.getAllKurikulum);

// Get Kurikulum by ID (Authenticated Users)
router.get('/:id', auth, kurikulumController.getKurikulumById);

// Update Kurikulum (Admin)
router.put('/:id', auth, authorize('admin'), kurikulumController.updateKurikulum);

// Delete Kurikulum (Admin)
router.delete('/:id', auth, authorize('admin'), kurikulumController.deleteKurikulum);

module.exports = router;
