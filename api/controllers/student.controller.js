const Siswa = require('../models/Siswa'); // Model Siswa
const User = require('../models/User');   // Model User
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Helper function to generate nomor_induk
const generateNomorInduk = (program, kelas) => {
  let kodeProgram = '';

  // Mengkodekan program
  switch (program) {
    case 'paket A':
      kodeProgram = '10';
      break;
    case 'paket B':
      kodeProgram = '20';
      break;
    case 'paket C':
      kodeProgram = '30';
      break;
    default:
      kodeProgram = '00'; // Default jika tidak ada
  }

  // Menggabungkan kode program dan kelas
  return `${kodeProgram}${kelas}${Math.floor(1000 + Math.random() * 9000)}`; // Kombinasi program, kelas, dan nomor acak
};

// Pendaftaran Siswa
const registerSiswa = async (req, res) => {
  try {
    const { program, kelas, nama, jenis_kelamin, nik, nisn, tempat_lahir, tanggal_lahir, agama, dokumen } = req.body;

    // Generate nomor_induk
    const nomor_induk = generateNomorInduk(program, kelas);

    // Buat password acak
    const password = Math.random().toString(36).slice(-8); // Random password 8 karakter
    const hashedPassword = await bcrypt.hash(password, 10); // Enkripsi password

    // Simpan data siswa di database
    const siswa = new Siswa({
      program,
      kelas,
      nama,
      jenis_kelamin,
      nik,
      nisn,
      tempat_lahir,
      tanggal_lahir,
      agama,
      nomor_induk, // Nomor induk yang digenerate
      dokumen,
    });

    // Simpan data user (untuk login) di database
    const user = new User({
      name: nama,
      email: `${nomor_induk}@   .com`, // Email format berdasarkan nomor_induk
      password: hashedPassword,
      role: 'student', // Set role sebagai student
    });

    await siswa.save(); // Simpan siswa
    await user.save(); // Simpan user

    res.status(201).json({
      message: 'Siswa berhasil didaftarkan',
      siswa: siswa,
      user: {
        email: user.email,
        password: password, // Kirimkan password ke response agar bisa diberikan ke siswa
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerSiswa };
