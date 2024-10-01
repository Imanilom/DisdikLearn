const mongoose = require('mongoose');

// Pengelolaan Kelas Schema
const pengelolaanKelasSchema = new mongoose.Schema({
  mapel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Silabus', // Referensi ke model Silabus
    required: true
  },
  pertemuan_ke: {
    type: Number,
    required: true
  },
  tanggal: {
    type: Date,
    required: true
  },
  tipe: {
    type: String,
    enum: ['Daring', 'Luring'], // Pilihan tipe kelas
    required: true
  },
  ketergantungan: {
    type: String,
    validate: {
      validator: function(v) {
        // Validasi untuk memastikan link zoom hanya ada jika tipe adalah Daring
        return this.tipe === 'Daring' ? (v && v.startsWith('http')) : true;
      },
      message: props => `Link Zoom harus valid jika tipe kelas adalah Daring!`
    }
  },
  pengajar: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pengajar', // Referensi ke model Pengajar
    required: true
  },
  kapasitas: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('PengelolaanKelas', pengelolaanKelasSchema);
