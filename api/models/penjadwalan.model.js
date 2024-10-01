const mongoose = require('mongoose');

// Penjadwalan Schema
const penjadwalanSchema = new mongoose.Schema({
  kurikulum: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kurikulum', // Referensi ke model Kurikulum
    required: true
  },
  silabus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Silabus', // Referensi ke model Silabus
    required: true
  },
  tanggal: {
    type: Date,
    required: true
  },
  minggu_ke: {
    type: Number, // Menyimpan minggu ke berapa
    required: true
  },
  pengelolaan_kelas: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PengelolaanKelas', // Referensi ke model PengelolaanKelas
    required: true
  },
  penugasan: [
    {
      id_siswa: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Siswa', // Referensi ke model Siswa
        required: true
      },
      tugas: {
        type: String, // Deskripsi tugas
        required: true
      },
      tugas_upload: {
        type: String // URL atau path file tugas yang diunggah
      },
      nilai: {
        type: Number // Nilai tugas
      }
    }
  ]
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Penjadwalan', penjadwalanSchema);
