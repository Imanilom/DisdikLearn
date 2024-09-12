const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const path =  require("path")
require("./config/db.config");
dotenv.config({path : '../.env'});

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
app.use(cors());
app.use(bodyParser.json());

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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});
