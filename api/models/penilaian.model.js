const mongoose = require('mongoose');

const nilaiSchema = new mongoose.Schema({
  silabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Silabus',
    required: true,
  },
  nilaiTotal: {
    type: Number,
    required: true,
  },
  grade: {
    type: String, // A, B, C, D, E, atau nilai lain yang diinginkan
    required: true,
  },
});

const penilaianSchema = new mongoose.Schema({
  tanggal: {
    type: Date,
    default: Date.now,
  },
  siswa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Siswa',
    required: true,
  },
  pengajar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pengajar', // Asumsi ada model Pengajar
    required: true,
  },
  nilai: [nilaiSchema],
}, {
  timestamps: true,
});

const Penilaian = mongoose.model('Penilaian', penilaianSchema);

module.exports = Penilaian;
