const mongoose = require('mongoose');

const pertemuanSchema = new mongoose.Schema({
  mingguKe: {
    type: Number,
    required: true,
  },
  judul: {
    type: String,
    required: true,
  },
  waktu: {
    type: String, // Format waktu atau tanggal jika diperlukan
    required: true,
  },
  jumlahJam: {
    type: Number,
    required: true,
  },
  modulPembelajaran: {
    type: String, // URL atau path file modul pembelajaran
  },
  tujuan: {
    type: String,
    required: true,
  },
});

const silabusSchema = new mongoose.Schema({
  namaMapel: {
    type: String,
    required: true,
  },
  pertemuan: [pertemuanSchema],
  kurikulum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kurikulum',
    required: true,
  },
  pengajar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pengajar', // Asumsi ada model Pengajar
    required: true,
  }
}, {
  timestamps: true,
});

const Silabus = mongoose.model('Silabus', silabusSchema);

module.exports = Silabus;
