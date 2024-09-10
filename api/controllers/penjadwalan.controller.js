const Penjadwalan = require('../models/penjadwalan.model');

// Create new Penjadwalan
exports.createPenjadwalan = async (req, res) => {
  try {
    const penjadwalan = new Penjadwalan({
      kurikulum: req.body.kurikulum,
      silabus: req.body.silabus,
      tanggal: req.body.tanggal,
      minggu_ke: req.body.minggu_ke,
      pengelolaan_kelas: req.body.pengelolaan_kelas,
      penugasan: req.body.penugasan
    });

    await penjadwalan.save();
    res.status(201).send(penjadwalan);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Penjadwalan
exports.getAllPenjadwalan = async (req, res) => {
  try {
    const penjadwalan = await Penjadwalan.find()
      .populate('kurikulum')
      .populate('silabus')
      .populate('pengelolaan_kelas')
      .populate('penugasan.id_siswa');
    res.status(200).send(penjadwalan);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Penjadwalan by ID
exports.getPenjadwalanById = async (req, res) => {
  try {
    const penjadwalan = await Penjadwalan.findById(req.params.id)
      .populate('kurikulum')
      .populate('silabus')
      .populate('pengelolaan_kelas')
      .populate('penugasan.id_siswa');
    if (!penjadwalan) {
      return res.status(404).send();
    }
    res.status(200).send(penjadwalan);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Penjadwalan
exports.updatePenjadwalan = async (req, res) => {
  try {
    const penjadwalan = await Penjadwalan.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .populate('kurikulum')
      .populate('silabus')
      .populate('pengelolaan_kelas')
      .populate('penugasan.id_siswa');
    if (!penjadwalan) {
      return res.status(404).send();
    }
    res.status(200).send(penjadwalan);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Penjadwalan
exports.deletePenjadwalan = async (req, res) => {
  try {
    const penjadwalan = await Penjadwalan.findByIdAndDelete(req.params.id);
    if (!penjadwalan) {
      return res.status(404).send();
    }
    res.status(200).send(penjadwalan);
  } catch (error) {
    res.status(500).send(error);
  }
};
