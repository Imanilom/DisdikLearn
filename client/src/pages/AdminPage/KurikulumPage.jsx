import { useState } from "react";
import axios from "axios"; // For API integration

const KurikulumPage = () => {
  const [formData, setFormData] = useState({
    nama: "",
    deskripsi: "",
  });
  const [loading, setLoading] = useState(false); // To show loading state
  const [message, setMessage] = useState(""); // To show success/error message
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Sending form data to the backend
      const response = await axios.post("/api/kurikulum", formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ); // Adjust this endpoint based on your backend

      if (response.status === 201) {
        setMessage("Kurikulum berhasil dibuat!");
        setFormData({ nama: "", deskripsi: "" }); // Reset form after successful submission
      }
    } catch (error) {
      setMessage("Terjadi kesalahan saat membuat kurikulum. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Pembuatan Kurikulum</h1>

      {/* Display Success/Error Messages */}
      {message && (
        <div
          className={`p-3 mb-4 ${
            message.includes("berhasil") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
          } rounded-md`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Nama Kurikulum</label>
          <input
            type="text"
            name="nama"
            value={formData.nama}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={formData.deskripsi}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-500 text-white p-2 rounded transition-transform transform hover:scale-105 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          {loading ? "Membuat Kurikulum..." : "Buat Kurikulum"}
        </button>
      </form>
    </div>
  );
};

export default KurikulumPage;
