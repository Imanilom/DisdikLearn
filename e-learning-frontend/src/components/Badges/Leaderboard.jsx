import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch, FaMedal } from "react-icons/fa"; // Import ikon pencarian dan medali
import LoadingErrorPage from '../Partial/LoadingErrorPage';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/leaderboard");
        setUsers(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setError(err.message || "Failed to fetch leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading || error) {
    return <LoadingErrorPage loading={loading} error={error} />;
  }

  return (
    <div className="relative container mx-auto mt-4 p-4 border rounded shadow-sm">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <h2 className="relative text-2xl font-bold mb-4 text-black z-10">Leaderboard</h2>

      {/* Search Bar with Icon and Button */}
      <div className="relative z-10 mb-4 flex items-center space-x-2">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded shadow-sm w-full"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb", color: "#fff" }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow"
          onClick={() => alert(`Mencari: ${searchTerm}`)} // Contoh aksi saat tombol "Cari" diklik
        >
          Cari
        </motion.button>
      </div>

      <div className="relative z-10">
        <table className="min-w-full bg-white rounded-md overflow-hidden shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Rank</th>
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Points</th>
            </tr>
          </thead>
          <AnimatePresence>
            <tbody>
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user._id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f3f4f6", // Warna abu-abu terang saat di-hover
                    transition: { duration: 0.2 },
                  }}
                >
                  <td className="py-2 px-4 border-b">
                    <div className="relative flex items-center justify-center w-8 h-8">
                      {index < 3 && (
                        <>
                          <FaMedal
                            className={`${
                              index === 0
                                ? "text-yellow-400"
                                : index === 1
                                ? "text-gray-400"
                                : "text-orange-400"
                            }`}
                            size={32}
                          />
                          <span className="absolute text-white font-bold text-xs">
                            {index + 1}
                          </span>
                        </>
                      )}
                      {index >= 3 && (
                        <div
                          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-black font-bold"
                        >
                          {index + 1}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.points}</td>
                </motion.tr>
              ))}
            </tbody>
          </AnimatePresence>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
