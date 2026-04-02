// LOADING SMOOTH
window.onload = () => {
setTimeout(()=>{
document.getElementById("loading").style.opacity="0";
setTimeout(()=>{
document.getElementById("loading").style.display="none";
},500);
},1200);
};

// SOUND CLICK
function clickSound(){
let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
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

// FAKE NOTIF SMOOTH
setInterval(()=>{
let notif=document.getElementById("notif");
notif.innerText=notifText[Math.floor(Math.random()*notifText.length)];
notif.style.display="block";

setTimeout(()=>{
notif.style.display="none";
},3000);

},6000);
