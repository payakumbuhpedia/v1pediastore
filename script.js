const WHATSAPP = "6283143490913";

let cart = [];

// SOUND CLICK
const clickSound = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}

// FORMAT HARGA
function formatHarga(n) {
  return (n / 1000) + "K";
}

// NOTIF
function showNotif(text) {
  let notif = document.createElement("div");
  notif.className = "notif-success";
  notif.innerText = text;
  document.body.appendChild(notif);

  setTimeout(() => notif.classList.add("hide"), 1200);
  setTimeout(() => notif.remove(), 1600);
}

// TAMBAH KE CART
function addToCart(nama, harga) {
  playSound();
  cart.push({ nama, harga });
  showNotif("✔ Berhasil ditambahkan");
  updateCart();
}

// UPDATE CART
function updateCart() {
  const list = document.getElementById("cart-list");
  const totalEl = document.getElementById("total");

  if (!list) return;

  list.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    total += item.harga;

    let div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      ${item.nama} - ${formatHarga(item.harga)}
      <button onclick="removeItem(${i})">❌</button>
    `;
    list.appendChild(div);
  });

  totalEl.innerText = "Total: " + formatHarga(total);
}

// HAPUS ITEM
function removeItem(i) {
  playSound();
  cart.splice(i, 1);
  updateCart();
}

// INPUT USER
function getUserData() {
  let nama = prompt("Masukkan nama kamu:");
  let target = prompt("Masukkan username / link:");

  return { nama, target };
}

// ORDER WA
function orderWA() {
  if (cart.length === 0) {
    showNotif("Keranjang kosong");
    return;
  }

  playSound();

  let user = getUserData();
  let kode = "V1-" + Math.floor(Math.random() * 99999);
  let total = cart.reduce((a, b) => a + b.harga, 0);

  let pesan = `🔥 *ORDER V1PEDIA STORE* 🔥

👤 Nama: ${user.nama}
🎯 Target: ${user.target}

📦 Detail Order:
`;

  cart.forEach((item, i) => {
    pesan += `${i + 1}. ${item.nama} - ${formatHarga(item.harga)}\n`;
  });

  pesan += `
💰 Total: ${formatHarga(total)}
🆔 Kode: ${kode}
📊 Status: Menunggu Diproses

Terima kasih 🙏`;

  window.location.href =
    "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(pesan);
}

// NAVIGASI
function showPage(id) {
  playSound();
  document.querySelectorAll(".page").forEach(el => el.style.display = "none");
  document.getElementById(id).style.display = "block";

  document.querySelectorAll(".notif-success").forEach(n => n.remove());
}

// DARK MODE
function toggleDark() {
  document.body.classList.toggle("dark");
}

// FAKE ORDER
const fakeNames = ["Budi", "Rizky", "Aldi", "Rian", "Dika"];

function fakeOrder() {
  let name = fakeNames[Math.floor(Math.random() * fakeNames.length)];

  let notif = document.createElement("div");
  notif.className = "fake-order";
  notif.innerText = `🔥 ${name} baru saja order`;

  document.body.appendChild(notif);

  setTimeout(() => notif.remove(), 3000);
}

setInterval(fakeOrder, 8000);
