const PengelolaanKelas = require("../models/pengelolaan.model");

// Create new Pengelolaan Kelas
exports.createPengelolaanKelas = async (req, res) => {
  try {
    const pengelolaanKelas = new PengelolaanKelas({
      mapel: req.body.mapel,
      pertemuan_ke: req.body.pertemuan_ke,
      tanggal: req.body.tanggal,
      tipe: req.body.tipe,
      ketergantungan: req.body.ketergantungan,
      pengajar: req.body.pengajar,
      kapasitas: req.body.kapasitas
    });

    await pengelolaanKelas.save();
    res.status(201).send(pengelolaanKelas);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Pengelolaan Kelas
exports.getAllPengelolaanKelas = async (req, res) => {
  try {
    const pengelolaanKelas = await PengelolaanKelas.find()
      .populate('mapel')
      .populate('pengajar');
    res.status(200).send(pengelolaanKelas);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get Pengelolaan Kelas by ID
exports.getPengelolaanKelasById = async (req, res) => {
  try {
    const pengelolaanKelas = await PengelolaanKelas.findById(req.params.id)
      .populate('mapel')
      .populate('pengajar');
    if (!pengelolaanKelas) {
      return res.status(404).send();
    }
    res.status(200).send(pengelolaanKelas);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update Pengelolaan Kelas
exports.updatePengelolaanKelas = async (req, res) => {
  try {
    const pengelolaanKelas = await PengelolaanKelas.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      .populate('mapel')
      .populate('pengajar');
    if (!pengelolaanKelas) {
      return res.status(404).send();
    }
    res.status(200).send(pengelolaanKelas);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Pengelolaan Kelas
exports.deletePengelolaanKelas = async (req, res) => {
  try {
    const pengelolaanKelas = await PengelolaanKelas.findByIdAndDelete(req.params.id);
    if (!pengelolaanKelas) {
      return res.status(404).send();
    }
    res.status(200).send(pengelolaanKelas);
  } catch (error) {
    res.status(500).send(error);
  }
};
