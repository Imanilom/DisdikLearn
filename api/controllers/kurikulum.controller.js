const Kurikulum = require('../models/kurikulum.model');

// Create new Kurikulum
exports.createKurikulum = async (req, res) => {
  try {
    const kurikulum = new Kurikulum(req.body);
    await kurikulum.save();
    res.status(201).send(kurikulum);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Kurikulums
exports.getAllKurikulums = async (req, res) => {
  try {
    const kurikulums = await Kurikulum.find();
    res.status(200).send(kurikulums);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Kurikulum by ID
exports.getKurikulumById = async (req, res) => {
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
exports.updateKurikulum = async (req, res) => {
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
exports.deleteKurikulum = async (req, res) => {
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
