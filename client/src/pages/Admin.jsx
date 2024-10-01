import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <ul>
          <li className="mb-4">
            <Link to="/kurikulum" className="hover:text-gray-300">Kurikulum</Link>
          </li>
          <li className="mb-4">
            <Link to="/data-siswa" className="hover:text-gray-300">Data Siswa</Link>
          </li>
          <li className="mb-4">
            <Link to="/silabus" className="hover:text-gray-300">Silabus</Link>
          </li>
          <li className="mb-4">
            <Link to="/jadwal" className="hover:text-gray-300">Jadwal</Link>
          </li>
          <li className="mb-4">
            <Link to="/pengelolaan-kelas" className="hover:text-gray-300">Pengelolaan Kelas</Link>
          </li>
          <li className="mb-4">
            <Link to="/manajemen-pengajar" className="hover:text-gray-300">Manajemen Pengajar</Link>
          </li>
          <li className="mb-4">
            <Link to="/penilaian" className="hover:text-gray-300">Penilaian</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-10">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
