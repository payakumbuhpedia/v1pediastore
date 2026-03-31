let selected = "";

/* DATA PANEL BOT (BISA KAMU EDIT NANTI) */
const panelList = [
  {ram: "1GB", harga: 2000},
  {ram: "2GB", harga: 4000},
  {ram: "3GB", harga: 6000},
  {ram: "4GB", harga: 8000},
  {ram: "5GB", harga: 10000},
  {ram: "6GB", harga: 12000},
  {ram: "7GB", harga: 14000},
  {ram: "8GB", harga: 16000},
  {ram: "9GB", harga: 18000},
  {ram: "10GB", harga: 20000},
];

/* DATA FOLLOWERS */
const followersList = [
  {jumlah: 1000, harga: 45000},
  {jumlah: 2000, harga: 90000},
  {jumlah: 3000, harga: 135000},
  {jumlah: 4000, harga: 180000},
  {jumlah: 5000, harga: 225000},
  {jumlah: 6000, harga: 270000},
  {jumlah: 7000, harga: 315000},
  {jumlah: 8000, harga: 360000},
  {jumlah: 9000, harga: 405000},
  {jumlah: 10000, harga: 450000},
];

/* TAMPILKAN PANEL BOT */
function showPanel(){
  document.getElementById("followers").style.display = "none";

  let html = "";
  panelList.forEach(item => {
    html += `
    <div class="item">
      <div>Panel Bot RAM ${item.ram}</div>
      <div>Rp ${item.harga.toLocaleString()}</div>
      <button class="order" onclick="pilihOrder('Panel Bot RAM ${item.ram}', ${item.harga})">Order</button>
    </div>`;
  });

  let el = document.getElementById("panel");
  el.innerHTML = html;
  el.style.display = "block";
}

/* TAMPILKAN FOLLOWERS */
function showFollowers(){
  document.getElementById("panel").style.display = "none";

  let html = "";
  followersList.forEach(item => {
    html += `
    <div class="item">
      <div>${item.jumlah} Followers Instagram Indo</div>
      <div>Rp ${item.harga.toLocaleString()}</div>
      <button class="order" onclick="pilihOrder('Followers ${item.jumlah}', ${item.harga})">Order</button>
    </div>`;
  });

  let el = document.getElementById("followers");
  el.innerHTML = html;
  el.style.display = "block";
}

/* PILIH ORDER */
function pilihOrder(nama, harga){
  selected = {
    nama: nama,
    harga: harga
  };

  alert("Dipilih:\n" + nama + "\nRp " + harga.toLocaleString());
}

/* WHATSAPP AUTO */
function openWA(){
  if(!selected){
    alert("Pilih layanan dulu!");
    return;
  }

  let kode = "INV" + Math.floor(Math.random()*999999);

  let pesan = `Halo admin V1PEDIASTORE INFINITY

Saya ingin order:
Layanan: ${selected.nama}
Harga: Rp ${selected.harga.toLocaleString()}
Kode Order: ${kode}

Mohon diproses ya`;

  let nomor = "6283143490913"; // GANTI NOMOR KAMU

  window.open(`https://wa.me/${6283143490913}?text=${encodeURIComponent(pesan)}`, '_blank');
}
