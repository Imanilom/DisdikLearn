const Silabus = require('../models/silabus.model');

// Create new Silabus
exports.createSilabus = async (req, res) => {
  try {
    const silabus = new Silabus(req.body);
    await silabus.save();
    res.status(201).send(silabus);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Silabuses
exports.getAllSilabuses = async (req, res) => {
  try {
    const silabuses = await Silabus.find().populate('kurikulum').populate('pengajar');
    res.status(200).send(silabuses);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Silabus by ID
exports.getSilabusById = async (req, res) => {
  try {
    const silabus = await Silabus.findById(req.params.id).populate('kurikulum').populate('pengajar');
    if (!silabus) {
      return res.status(404).send();
    }
    res.status(200).send(silabus);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Silabus
exports.updateSilabus = async (req, res) => {
  try {
    const silabus = await Silabus.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!silabus) {
      return res.status(404).send();
    }
    res.status(200).send(silabus);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Silabus
exports.deleteSilabus = async (req, res) => {
  try {
    const silabus = await Silabus.findByIdAndDelete(req.params.id);
    if (!silabus) {
      return res.status(404).send();
    }
    res.status(200).send(silabus);
  } catch (error) {
    res.status(500).send(error);
  }
};
