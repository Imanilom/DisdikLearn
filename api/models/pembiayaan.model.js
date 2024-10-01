const mongoose = require('mongoose');

const pembiayaanSchema = new mongoose.Schema({
  jenisBiaya: {
    type: String,
    enum: ['investasi', 'operasional'],
    required: true,
  },
  jumlah: {
    type: Number,
    required: true,
  },
  keterangan: String,
}, {
  timestamps: true,
});

const Pembiayaan = mongoose.model('Pembiayaan', pembiayaanSchema);

module.exports = Pembiayaan;
