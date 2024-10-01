const Penilaian = require('../models/penilaian.model');

// Create new Penilaian
exports.createPenilaian = async (req, res) => {
  try {
    const penilaian = new Penilaian(req.body);
    await penilaian.save();
    res.status(201).send(penilaian);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Penilaian
exports.getAllPenilaians = async (req, res) => {
  try {
    const penilaians = await Penilaian.find().populate('siswa').populate('pengajar');
    res.status(200).send(penilaians);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Penilaian by ID
exports.getPenilaianById = async (req, res) => {
  try {
    const penilaian = await Penilaian.findById(req.params.id).populate('siswa').populate('pengajar');
    if (!penilaian) {
      return res.status(404).send();
    }
    res.status(200).send(penilaian);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Penilaian
exports.updatePenilaian = async (req, res) => {
  try {
    const penilaian = await Penilaian.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!penilaian) {
      return res.status(404).send();
    }
    res.status(200).send(penilaian);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Penilaian
exports.deletePenilaian = async (req, res) => {
  try {
    const penilaian = await Penilaian.findByIdAndDelete(req.params.id);
    if (!penilaian) {
      return res.status(404).send();
    }
    res.status(200).send(penilaian);
  } catch (error) {
    res.status(500).send(error);
  }
};
