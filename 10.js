const mahasiswa = {
    nama: "Lazuardi",
    umur: 24,
    jurusan: "Informatika"
};

// Konversi objek ke JSON
const jsonData = JSON.stringify(mahasiswa);
fs.writeFileSync('mahasiswa.json', jsonData);
console.log("Data mahasiswa telah disimpan!");
