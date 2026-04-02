// LOADING SMOOTH
window.addEventListener("load",()=>{
requestAnimationFrame(()=>{
const load = document.getElementById("loading");
if(load){
load.style.transition="opacity 0.5s";
load.style.opacity="0";
setTimeout(()=>load.remove(),500);
}
});
});

// SOUND CLICK (RINGAN)
function clickSound(){
const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-09.mp3");
audio.volume=0.2;
audio.play();
}

// ORDER
function order(nama,harga,kategori){
clickSound();

let kode="INV-2026-"+Math.floor(100+Math.random()*900);

let text=`Halo Admin V1Pedia Store 👋

Saya ingin melakukan pemesanan dengan detail berikut:

📦 Detail Pesanan
• Nama Produk : ${nama}
• Kategori     : ${kategori}
• Harga        : ${harga}

📝 Data Pemesan
• Nama         :
• Nomor WA     :

📌 Detail Tambahan

💳 Metode Pembayaran
(Mohon info metode pembayaran yang tersedia)

---

Mohon diproses ya admin 🙏
Terima kasih.

Kode: ${kode}`;

window.open("https://wa.me/628314390913?text="+encodeURIComponent(text));
}

// NOTIF HALUS
let notifQueue = [...notifText];

function showNotif(){
const notif = document.getElementById("notif");
if(!notif) return;

const text = notifQueue.shift();
notifQueue.push(text);

notif.innerText=text;
notif.style.display="block";

setTimeout(()=>{
notif.style.display="none";
},3000);
}

setInterval(()=>{
requestAnimationFrame(showNotif);
},6000);
