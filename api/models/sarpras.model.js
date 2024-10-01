const mongoose = require('mongoose');

const saranaPrasaranaSchema = new mongoose.Schema({
  namaSarana: {
    type: String,
    required: true,
  },
  jenis: {
    type: String, // alat, bahan pembelajaran, jadwal, dll
    required: true,
  },
  keterangan: String,
  lokasi: String,
  statusPenggunaan: {
    type: String,
    enum: ['digunakan', 'tidak digunakan'],
    default: 'digunakan',
  }
}, {
  timestamps: true,
});

const SaranaPrasarana = mongoose.model('SaranaPrasarana', saranaPrasaranaSchema);

module.exports = SaranaPrasarana;
