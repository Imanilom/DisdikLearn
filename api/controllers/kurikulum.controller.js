const Kurikulum = require('../models/kurikulum.model');

// Create new Kurikulum
const createKurikulum = async (req, res) => {
  try {
    const kurikulum = new Kurikulum(req.body);
    await kurikulum.save();
    res.status(201).send(kurikulum);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Kurikulums
const getAllKurikulums = async (req, res) => {
  try {
    const kurikulums = await Kurikulum.find();
    res.status(200).send(kurikulums);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Kurikulum by ID
const getKurikulumById = async (req, res) => {
  try {
    const kurikulum = await Kurikulum.findById(req.params.id);
    if (!kurikulum) {
      return res.status(404).send();
    }
    res.status(200).send(kurikulum);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Kurikulum
const updateKurikulum = async (req, res) => {
  try {
    const kurikulum = await Kurikulum.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!kurikulum) {
      return res.status(404).send();
    }
    res.status(200).send(kurikulum);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Kurikulum
const deleteKurikulum = async (req, res) => {
  try {
    const kurikulum = await Kurikulum.findByIdAndDelete(req.params.id);
    if (!kurikulum) {
      return res.status(404).send();
    }
    res.status(200).send(kurikulum);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Export all functions
module.exports = {
  createKurikulum,
  getAllKurikulums,
  getKurikulumById,
  updateKurikulum,
  deleteKurikulum,
};
