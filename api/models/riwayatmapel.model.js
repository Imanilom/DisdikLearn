const mongoose = require('mongoose');

// RiwayatMapel Schema
const riwayatMapelSchema = new mongoose.Schema({
  siswa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Siswa', // Referensi ke model Siswa
    required: true
  },
  riwayat: [
    {
      mapel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Silabus', // Referensi ke model Silabus
        required: true
      },
      nama_mapel: {
        type: String,
        required: true
      },
      tugas_ke: {
        type: Number,
        required: true
      },
      skor: {
        type: Number,
        required: true
      }
    }
  ]
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('RiwayatMapel', riwayatMapelSchema);
