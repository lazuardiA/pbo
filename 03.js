class Mahasiswa {
    constructor(nama, nim, jurusan, umur, alamat) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.umur = umur;
        this.alamat = alamat;
    }
    
    belajar() {
        console.log(this.nama + " sedang belajar.");
    }
    
    makan() {
        console.log(this.nama + " sedang makan di kantin.");
    }
    
    tidur() {
        console.log(this.nama + " sedang tidur di kos.");
    }
    
    kuliah() {
        console.log(this.nama + " sedang kuliah mata kuliah " + this.jurusan + ".");
    }
    
    tampilkanInfo() {
        console.log("=== Info Mahasiswa ===");
        console.log("Nama: " + this.nama);
        console.log("NIM: " + this.nim);
        console.log("Jurusan: " + this.jurusan);
        console.log("Umur: " + this.umur + " tahun");
        console.log("Alamat: " + this.alamat);
    }
}

const mhs1 = new Mahasiswa("valdi", "12345", "Teknik Informatika", 23, "Jakarta");
const mhs2 = new Mahasiswa("erma", "12346", "Teknik Elektro", 19, "Bandung");
const mhs3 = new Mahasiswa("banu", "12347", "Teknik Mesin", 21, "Surabaya");

console.log("=== Aktivitas valdi ===");
mhs1.belajar();
mhs1.makan();
mhs1.tidur();
mhs1.kuliah();
mhs1.tampilkanInfo();

console.log("\n=== Aktivitas erma ===");
mhs2.belajar();
mhs2.kuliah();
mhs2.tampilkanInfo();

console.log("\n=== Aktivitas banu ===");
mhs3.makan();
mhs3.tidur();
mhs3.tampilkanInfo();
