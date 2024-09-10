const Pengajar = require('../models/pengajar.model');
const User = require('../models/user.model');

// Create new Pengajar
exports.createPengajar = async (req, res) => {
  try {
    // Check if the user exists
    const user = await User.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    // Create Pengajar
    const pengajar = new Pengajar({
      user: user._id,
      specialization: req.body.specialization,
      experienceYears: req.body.experienceYears,
      certifications: req.body.certifications,
      bio: req.body.bio,
      contact: req.body.contact
    });

    await pengajar.save();
    res.status(201).send(pengajar);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Pengajars
exports.getAllPengajars = async (req, res) => {
  try {
    const pengajars = await Pengajar.find().populate('user');
    res.status(200).send(pengajars);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Pengajar by ID
exports.getPengajarById = async (req, res) => {
  try {
    const pengajar = await Pengajar.findById(req.params.id).populate('user');
    if (!pengajar) {
      return res.status(404).send();
    }
    res.status(200).send(pengajar);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Pengajar
exports.updatePengajar = async (req, res) => {
  try {
    const pengajar = await Pengajar.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pengajar) {
      return res.status(404).send();
    }
    res.status(200).send(pengajar);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Pengajar
exports.deletePengajar = async (req, res) => {
  try {
    const pengajar = await Pengajar.findByIdAndDelete(req.params.id);
    if (!pengajar) {
      return res.status(404).send();
    }
    res.status(200).send(pengajar);
  } catch (error) {
    res.status(500).send(error);
  }
};
