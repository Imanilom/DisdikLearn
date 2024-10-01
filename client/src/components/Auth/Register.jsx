import React, { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(1);
  const [isGuardian, setIsGuardian] = useState(false); // Untuk mengecek apakah ada wali
  const [formData, setFormData] = useState({
    name: '',
    nisn: '',
    placeOfBirth: '',
    dateOfBirth: '',
    religion: '',
    weight: '',
    height: '',
    childOrder: '',
    siblingsCount: '',
    address: '',
    village: '',
    district: '',
    province: '',
    fatherName: '',
    fatherJob: '',
    fatherPhone: '',
    motherName: '',
    motherJob: '',
    motherPhone: '',
    guardianName: '',
    guardianJob: '',
    guardianPhone: '',
    // Tambahan untuk dokumen
    photo: null,
    familyCardNumber: '',
    lastCertificate: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Data has been submitted');
    // Integrasi dengan service API
  };

  
  
   // Step 1: Form Data Siswa
   const renderStep1 = () => (    
    <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
      <h2 className="text-2xl font-bold mb-4 text-center">Pendaftaran Siswa</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Data Pribadi */}
        <h3 className="col-span-2 text-lg font-bold">Data Pribadi</h3>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Nama</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama lengkap"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">NISN</label>
          <input
            type="text"
            name="nisn"
            value={formData.nisn}
            onChange={handleChange}
            placeholder="Masukkan NISN"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Tempat Lahir</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            placeholder="Masukkan tempat lahir"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Tanggal Lahir</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Agama</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            placeholder="Masukkan agama"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Berat Badan (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="Masukkan berat badan"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Tinggi Badan (cm)</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="Masukkan tinggi badan"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Anak ke Berapa</label>
          <input
            type="number"
            name="childOrder"
            value={formData.childOrder}
            onChange={handleChange}
            placeholder="Anak ke berapa"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Berapa Bersaudara</label>
          <input
            type="number"
            name="siblingsCount"
            value={formData.siblingsCount}
            onChange={handleChange}
            placeholder="Jumlah saudara"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="col-span-2">
          <h3 className="text-lg font-bold">Data Alamat</h3>
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Alamat</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Masukkan alamat lengkap"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Desa/Kelurahan</label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleChange}
            placeholder="Masukkan desa/kelurahan"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Kecamatan</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            placeholder="Masukkan kecamatan"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Provinsi</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleChange}
            placeholder="Masukkan provinsi"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="col-span-2">
          <button type="submit" className="w-full bg-indigo-500 text-white py-2 mt-4 rounded-md hover:bg-indigo-600">
            Lanjut ke Data Orang Tua
          </button>
        </div>
      </div>
    </form>
  );

  // Step 2: Form Data Ayah
const renderStep2 = () => (
  <form onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
    <h2 className="text-2xl font-bold mb-4 text-center">Data Ayah</h2>
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Nama Ayah</label>
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Masukkan nama ayah"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Pekerjaan Ayah</label>
        <input
          type="text"
          name="fatherJob"
          value={formData.fatherJob}
          onChange={handleChange}
          placeholder="Masukkan pekerjaan ayah"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Nomor Telepon Ayah</label>
        <input
          type="tel"
          name="fatherPhone"
          value={formData.fatherPhone}
          onChange={handleChange}
          placeholder="Masukkan nomor telepon ayah"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>

      {/* Tambahan Form Status Ayah */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Status Ayah</label>
        <select
          name="fatherStatus"
          value={formData.fatherStatus}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        >
          <option value="">Pilih status</option>
          <option value="Masih Hidup">Masih Hidup</option>
          <option value="Meninggal">Meninggal</option>
        </select>
      </div>

      {/* Tambahan Form Alamat */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Alamat Ayah</label>
        <textarea
          name="fatherAddress"
          value={formData.fatherAddress}
          onChange={handleChange}
          placeholder="Masukkan alamat ayah"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          rows="3"
          required
        />
      </div>

      {/* Tambahan Form Penghasilan */}
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Penghasilan Ayah</label>
        <input
          type="number"
          name="fatherIncome"
          value={formData.fatherIncome}
          onChange={handleChange}
          placeholder="Masukkan penghasilan ayah per bulan"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(1)}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Kembali
        </button>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
          Lanjut ke Data Ibu
        </button>
      </div>
    </div>
  </form>
);

 // Step 3: Form Data Ibu
 const renderStep3 = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      // Jika isGuardian 'yes', lanjut ke form data wali (step 4), jika tidak, lanjut ke step berikutnya (step 5)
      setStep(isGuardian === 'yes' ? 4 : 5);
    }}
  >
    <h2 className="text-2xl font-bold mb-4 text-center">Data Ibu</h2>
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Nama Ibu</label>
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          placeholder="Masukkan nama ibu"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Pekerjaan Ibu</label>
        <input
          type="text"
          name="motherJob"
          value={formData.motherJob}
          onChange={handleChange}
          placeholder="Masukkan pekerjaan ibu"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-bold text-gray-700">Nomor Telepon Ibu</label>
        <input
          type="tel"
          name="motherPhone"
          value={formData.motherPhone}
          onChange={handleChange}
          placeholder="Masukkan nomor telepon ibu"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          required
        />
      </div>

      <div>
  <label className="block mb-2 text-sm font-bold text-gray-700">Apakah ada wali?</label>
  
  <div className="flex items-center mb-2">
    <input
      type="radio"
      name="isGuardian"
      value="yes"
      checked={isGuardian === 'yes'}
      onChange={() => setIsGuardian('yes')}
      className="mr-2"
    />
    <span>Ya</span>
  </div>
  
  <div className="flex items-center">
    <input
      type="radio"
      name="isGuardian"
      value="no"
      checked={isGuardian === 'no'}
      onChange={() => setIsGuardian('no')}
      className="mr-2"
    />
    <span>Tidak</span>
  </div>
</div>


      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
        >
          Kembali
        </button>
        <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
          {isGuardian ? 'Next' : 'Selesai'}
        </button>
      </div>
    </div>
  </form>
);

  // Step 4: Form Data Wali
  const renderStep4 = () => (
    <form onSubmit={handleRegister}>
      <h2 className="text-2xl font-bold mb-4 text-center">Data Wali</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Nama Wali</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            placeholder="Masukkan nama wali"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Pekerjaan Wali</label>
          <input
            type="text"
            name="guardianJob"
            value={formData.guardianJob}
            onChange={handleChange}
            placeholder="Masukkan pekerjaan wali"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Nomor Telepon Wali</label>
          <input
            type="tel"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            placeholder="Masukkan nomor telepon wali"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep(3)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Kembali
          </button>
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </form>
  );

   // Step 5: Form Dokumen
   const renderStep5 = () => (
    <form onSubmit={handleRegister}>
      <h2 className="text-2xl font-bold mb-4 text-center">Unggah Dokumen</h2>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Pas Foto (max 2MB)</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Nomor Kartu Keluarga</label>
          <input
            type="text"
            name="familyCardNumber"
            value={formData.familyCardNumber}
            onChange={handleChange}
            placeholder="Masukkan nomor kartu keluarga"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-bold text-gray-700">Ijazah Terakhir</label>
          <input
            type="file"
            name="lastCertificate"
            onChange={handleFileChange}
            accept=".pdf"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setStep(4)}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          >
            Kembali
          </button>
          <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            Cek Kelengkapan
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      {step === 1
        ? renderStep1()
        : step === 2
        ? renderStep2()
        : step === 3
        ? renderStep3()
        : step === 4
        ? renderStep4()
        : renderStep5()}
    </div>
  );
};


export default Register;
