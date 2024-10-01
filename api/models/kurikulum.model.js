const mongoose = require('mongoose');

const kurikulumSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  tahunAjar: {
    type: String,
    required: true,
  },
  jumlahPertemuan: {
    type: Number,
    required: true,
  },
  deskripsi: {
    type: String,
  }
}, {
  timestamps: true, // Otomatis menambahkan `createdAt` dan `updatedAt`
});

const Kurikulum = mongoose.model('Kurikulum', kurikulumSchema);

module.exports = Kurikulum;
