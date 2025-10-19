// === Validasi Form Kontak ===
function validasiForm() {
  const nama = document.getElementById("nama")?.value.trim();
  const email = document.getElementById("email")?.value.trim();
  const pesan = document.getElementById("pesan")?.value.trim();

  if (!nama || !email || !pesan) {
    alert("Semua kolom harus diisi!");
  } else {
    alert("Pesan berhasil dikirim!");
    document.getElementById("formKontak").reset();
  }
}

// === Data Produk ===
const dataProduk = [
  { nama: "Kemeja Hitam Polos", 
    harga: "Rp155.000", 
    deskripsi: "Kemeja hitam polos berbahan katun premium, nyaman dipakai untuk acara formal maupun santai. Desain simple namun tetap elegan.", 
    gambar: "img/produk1.jpg", 
    pembelian: 120, 
    rating: 4.5 },
  { nama: "Sepatu Converse", 
    harga: "Rp1.000.000", 
    deskripsi: "Sepatu Converse original dengan desain klasik dan sol karet kuat. Nyaman digunakan untuk aktivitas harian.", 
    gambar: "img/produk2.jpg", 
    pembelian: 98, 
    rating: 4.7 },
  { nama: "Celana Jeans Pria", 
    harga: "Rp320.000", 
    deskripsi: "Celana jeans biru dengan bahan tebal dan fleksibel, cocok untuk gaya kasual sehari-hari.", 
    gambar: "img/produk3.jpg", 
    pembelian: 150, 
    rating: 4.8 },
  { nama: "Jaket Bomber", 
    harga: "Rp280.000", 
    deskripsi: "Jaket bomber keren dengan resleting depan dan kantong samping. Memberikan tampilan modern dan hangat.", 
    gambar: "img/produk4.jpg", 
    pembelian: 87, 
    rating: 4.6 },
  { nama: "Kaos Polos Oversize", 
    harga: "Rp75.000", 
    deskripsi: "Kaos oversize berbahan katun combed premium, adem dan lembut. Cocok untuk tampilan santai.", 
    gambar: "img/produk5.jpg", 
    pembelian: 200, 
    rating: 4.9 },
  { nama: "Jaket Hoodie", 
    harga: "Rp150.000", 
    deskripsi: "Hoodie hangat dan stylish dengan bahan fleece premium. Nyaman di segala suasana.", 
    gambar: "img/produk6.jpg", 
    pembelian: 60, 
    rating: 4.3 },
  { nama: "Celana Bahan Formal", 
    harga: "Rp130.000", 
    deskripsi: "Celana bahan hitam dengan potongan modern fit. Cocok untuk kerja, kuliah, atau acara resmi.", 
    gambar: "img/produk7.jpg", 
    pembelian: 140, 
    rating: 4.7 },
  { nama: "Baju Polo Casual", 
    harga: "Rp90.000", 
    deskripsi: "Baju polo halus dan adem, tampilan semi-formal yang tetap nyaman.", 
    gambar: "img/produk8.jpg", 
    pembelian: 75, 
    rating: 4.4 }
];

// === Produk Unggulan (beranda.html) ===
const produkUnggulan = document.getElementById("produk-unggulan");
if (produkUnggulan) {
  dataProduk.slice(0, 3).forEach((p, i) => {
    produkUnggulan.innerHTML += `
      <div class="col-md-4">
        <div class="card">
          <img src="${p.gambar}" class="card-img-top" alt="${p.nama}">
          <div class="card-body text-center">
            <h5 class="card-title">${p.nama}</h5>
            <p class="card-text text-muted">${p.harga}</p>
            <a href="detail.html?produk=${i}" class="btn btn-dark w-100">Lihat Detail</a>
          </div>
        </div>
      </div>
    `;
  });
}

// === Daftar Produk (produk.html) ===
const daftarProduk = document.getElementById("daftar-produk");
if (daftarProduk) {
  dataProduk.forEach((p, i) => {
    daftarProduk.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.gambar}" class="card-img-top" alt="${p.nama}">
          <div class="card-body text-center">
            <h5 class="card-title">${p.nama}</h5>
            <p class="card-text text-muted mb-1">${p.harga}</p>
            <p class="text-secondary mb-1">🛒 ${p.pembelian} Terjual</p>
            <p class="text-warning">⭐ ${p.rating}</p>
            <a href="detail.html?produk=${i}" class="btn btn-dark w-100">Lihat Detail</a>
          </div>
        </div>
      </div>
    `;
  });
}

// === Detail Produk (detail.html) ===
const detailProduk = document.getElementById("detail-produk");
if (detailProduk) {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("produk");

  if (id !== null && dataProduk[id]) {
    const p = dataProduk[id];
    detailProduk.innerHTML = `
      <div class="col-md-6 text-center">
        <img src="${p.gambar}" class="img-fluid rounded shadow-lg mb-3" alt="${p.nama}">
      </div>
      <div class="col-md-6">
        <h2>${p.nama}</h2>
        <h4 class="text-warning">${p.harga}</h4>
        <p>🛒 ${p.pembelian} pembelian</p>
        <p class="text-warning">⭐ ${p.rating} rating</p>
        <p>${p.deskripsi}</p>
        <div class="mt-3">
          <button class="btn btn-warning me-2" onclick="tambahKeranjang('${p.nama}')">Masukkan ke Keranjang</button>
          <a href="produk.html" class="btn btn-secondary">Kembali</a>
        </div>
      </div>
    `;
  } else {
    detailProduk.innerHTML = `<p class="text-center text-danger">Produk tidak ditemukan!</p>`;
  }
}

// === Fungsi Tambah ke Keranjang ===
function tambahKeranjang(namaProduk) {
  alert(`${namaProduk} telah dimasukkan ke keranjang!`);
}