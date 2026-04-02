// LOADING
window.onload=()=>{
setTimeout(()=>{
let l=document.getElementById("loading");
l.style.opacity="0";
setTimeout(()=>l.remove(),500);
},1200);
};

// RENDER PRODUK
const container=document.getElementById("produk");

produk.forEach(p=>{
let el=document.createElement("div");
el.className="card";

el.innerHTML=`
<h3>${p.nama}</h3>
<p>${p.harga}</p>
<pre>${deskripsi[p.kategori]}</pre>
<button onclick="order('${p.nama}','${p.harga}','${p.kategori}')">Order</button>
`;

container.appendChild(el);
});

// ORDER
function order(nama,harga,kategori){
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

// FAQ
const faqBox=document.getElementById("faq");
faq.forEach(f=>{
let div=document.createElement("div");
div.className="card";
div.innerHTML=`<h4 onclick="this.nextElementSibling.classList.toggle('show')">${f.q}</h4><p class="hide">${f.a}</p>`;
faqBox.appendChild(div);
});

// NOTIF
setInterval(()=>{
let notif=document.getElementById("notif");
notif.innerText=notifText[Math.floor(Math.random()*notifText.length)];
notif.style.display="block";
setTimeout(()=>notif.style.display="none",3000);
},5000);
