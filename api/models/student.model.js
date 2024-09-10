const mongoose = require('mongoose');

const siswaSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Menghubungkan ke model User
    required: true,
  },
  program: {
    type: String,
    enum: ['paket A', 'paket B', 'paket C'],
    required: true,
  },
  kelas: {
    type: Number,
    min: 1,
    max: 12,
    required: true,
  },
  nama: {
    type: String,
    required: true,
  },
  jenis_kelamin: {
    type: String,
    enum: ['Laki-laki', 'Perempuan'],
    required: true,
  },
  nik: {
    type: String,
    required: true,
    unique: true,
  },
  nisn: {
    type: String,
    unique: true,
  },
  nomor_induk: {
    type: String,
    unique: true,
    required: true,
  },
  tempat_lahir: {
    type: String,
    required: true,
  },
  tanggal_lahir: {
    type: Date,
    required: true,
  },
  agama: {
    type: String,
    required: true,
  },
  berat_badan: {
    type: Number, // dalam kg
  },
  tinggi_badan: {
    type: Number, // dalam cm
  },
  anak_ke: {
    type: Number,
  },
  jumlah_keluarga: {
    type: Number,
  },
  jarak_ke_sekolah: {
    type: Number, // dalam km
  },
  waktu_tempuh: {
    type: String, // Misalnya "30 menit"
  },
  alamat: {
    rt: {
      type: String,
    },
    rw: {
      type: String,
    },
    desa_kelurahan: {
      type: String,
      required: true,
    },
    kabupaten_kota: {
      type: String,
      required: true,
    },
    provinsi: {
      type: String,
      required: true,
    },
    kode_pos: {
      type: String,
    }
  },
  data_ayah: {
    nama: {
      type: String,
      required: true,
    },
    pekerjaan: {
      type: String,
    },
    alamat: {
      type: String,
    },
    status_ayah: {
      type: String,
      enum: ['Hidup', 'Meninggal'],
      required: true,
    },
    telpon: {
      type: String,
    },
    penghasilan: {
      type: String,
    }
  },
  data_ibu: {
    nama: {
      type: String,
      required: true,
    },
    pekerjaan: {
      type: String,
    },
    alamat: {
      type: String,
    },
    status_ibu: {
      type: String,
      enum: ['Hidup', 'Meninggal'],
      required: true,
    },
    telpon: {
      type: String,
    },
    penghasilan: {
      type: String,
    }
  },
  data_wali: {
    nama: {
      type: String,
    },
    pekerjaan: {
      type: String,
    },
    alamat: {
      type: String,
    },
    status_wali: {
      type: String,
      enum: ['Hidup', 'Meninggal'],
    },
    telpon: {
      type: String,
    },
    penghasilan: {
      type: String,
    }
  },
  dokumen: {
    pas_foto: {
      type: String, // URL pas foto dari Firebase
      required: true,
    },
    kartu_keluarga: {
      type: String, // URL kartu keluarga dari Firebase
      required: true,
    },
    ijazah_terakhir: {
      type: String, // URL ijazah terakhir dari Firebase
      required: true,
    }
  }
}, {
  timestamps: true,
});

const Siswa = mongoose.model('Siswa', siswaSchema);

module.exports = Siswa;
