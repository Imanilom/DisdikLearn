const mongoose = require('mongoose');

// Pengajar Schema
const pengajarSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referensi ke model User
    required: true
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  experienceYears: {
    type: Number,
    required: true
  },
  certifications: {
    type: [String], // Array of strings for certifications
    required: false
  },
  coursesTaught: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course' // Referensi ke model Course (jika ada)
    }
  ],
  bio: {
    type: String,
    required: false,
    trim: true
  },
  contact: {
    phone: {
      type: String,
      required: false,
      validate(value) {
        if (!validator.isMobilePhone(value, 'any')) {
          throw new Error('Invalid phone number');
        }
      }
    },
    address: {
      type: String,
      required: false,
      trim: true
    }
  },
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Pengajar', pengajarSchema);
