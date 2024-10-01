const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
require("./config/db.config");

// Load environment variables
dotenv.config();  // Assuming .env is in the root directory

// Route imports
const userRoutes = require("./routes/user.routes");
const courseRoutes = require("./routes/course.routes");
const quizRoutes = require("./routes/quiz.routes");
const forumRoutes = require("./routes/forum.routes");
const progressRoutes = require("./routes/progress.routes");
const badgeRoutes = require("./routes/badge.routes");
const penjadwalanRoutes = require('./routes/penjadwalan.routes');
const riwayatMapelRoutes = require('./routes/riwayatMapel.routes');
const pengelolaanKelasRoutes = require('./routes/pengelolaanKelas.routes');
const kurikulumRoutes = require('./routes/kurikulum.routes');
const penilaianRoutes = require('./routes/penilaian.routes');
const siswaRoutes = require('./routes/siswa.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Express v4.16+ already has bodyParser built-in

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api", quizRoutes);
app.use("/api/courses/:courseId/forums", forumRoutes);
app.use("/api", progressRoutes);
app.use("/api/badges", badgeRoutes);
app.use('/api/penjadwalan', penjadwalanRoutes);
app.use('/api/riwayat-mapel', riwayatMapelRoutes);
app.use('/api/pengelolaan-kelas', pengelolaanKelasRoutes);
app.use('/api/kurikulum', kurikulumRoutes);
app.use('/api/penilaian', penilaianRoutes);
app.use('/api/siswa', siswaRoutes);

// Serve the client-side application (React/Vue/etc.)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
});

// Set the server port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
