const RiwayatMapel = require('../models/riwayatmapel.model');

// Create new RiwayatMapel
exports.createRiwayatMapel = async (req, res) => {
  try {
    const riwayatMapel = new RiwayatMapel({
      siswa: req.body.siswa,
      riwayat: req.body.riwayat
    });

    await riwayatMapel.save();
    res.status(201).send(riwayatMapel);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all RiwayatMapel
exports.getAllRiwayatMapel = async (req, res) => {
  try {
    const riwayatMapel = await RiwayatMapel.find()
      .populate('siswa')
      .populate('riwayat.mapel');
    res.status(200).send(riwayatMapel);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get RiwayatMapel by ID
exports.getRiwayatMapelById = async (req, res) => {
  try {
    const riwayatMapel = await RiwayatMapel.findById(req.params.id)
      .populate('siswa')
      .populate('riwayat.mapel');
    if (!riwayatMapel) {
      return res.status(404).send();
    }
    res.status(200).send(riwayatMapel);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update RiwayatMapel
exports.updateRiwayatMapel = async (req, res) => {
  try {
    const riwayatMapel = await RiwayatMapel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .populate('siswa')
      .populate('riwayat.mapel');
    if (!riwayatMapel) {
      return res.status(404).send();
    }
    res.status(200).send(riwayatMapel);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete RiwayatMapel
exports.deleteRiwayatMapel = async (req, res) => {
  try {
    const riwayatMapel = await RiwayatMapel.findByIdAndDelete(req.params.id);
    if (!riwayatMapel) {
      return res.status(404).send();
    }
    res.status(200).send(riwayatMapel);
  } catch (error) {
    res.status(500).send(error);
  }
};
