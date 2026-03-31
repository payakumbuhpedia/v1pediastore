let cart=[];

/* LOAD DATA */
function loadData(){
let panelHTML="";
panelList.forEach(p=>{
panelHTML+=`
<div class="item">
<div>
<b>${p.nama}</b><br>
<small>Rp${p.harga}</small>
</div>
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
document.getElementById("panelList").innerHTML=panelHTML;

let followHTML="";
followersList.forEach(f=>{
followHTML+=`
<div class="item">
<div>
<b>${f.nama}</b><br>
<small>Rp${f.harga}</small>
</div>
<button onclick="addCart('${f.nama}',${f.harga})">Order</button>
</div>`;
});
document.getElementById("followersList").innerHTML=followHTML;
}

/* ADD CART */
function addCart(nama,harga){
cart.push({nama,harga});
updateCart();
toast("✔ Ditambahkan ke keranjang");
clickSound();
}

/* UPDATE CART */
function updateCart(){
let el=document.getElementById("cartItems");
let total=0;
let html="";

cart.forEach((c,i)=>{
total+=c.harga;
html+=`${c.nama} - Rp${c.harga} <button onclick="hapus(${i})">❌</button><br>`;
});

html+=`<hr>Total: Rp${total}`;
el.innerHTML=html;
}

/* HAPUS */
function hapus(i){
cart.splice(i,1);
updateCart();
}

/* TOAST */
function toast(t){
let el=document.createElement("div");
el.className="toast";
el.innerText=t;
document.body.appendChild(el);
setTimeout(()=>el.classList.add("show"),50);
setTimeout(()=>el.remove(),2000);
}

/* SOUND */
function clickSound(){
new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3").play();
}

/* CHECKOUT */
function checkout(){
if(cart.length===0){
toast("Keranjang kosong");
return;
}

/* POPUP */
let p=document.createElement("div");
p.className="popup show";
p.innerHTML=`<div class="popup-box">
<h2>✅ Order Berhasil</h2>
<p>Membuka WhatsApp...</p>
</div>`;
document.body.appendChild(p);

let id="ORD"+Math.floor(Math.random()*999999);
let total=0;

let txt="Halo Admin V1 PEDIA STORE\n";
txt+="Kode: "+id+"\n---------\n";

cart.forEach(c=>{
txt+=c.nama+" - Rp"+c.harga+"\n";
total+=c.harga;
});

txt+="---------\nTotal: Rp"+total;
txt+="\nNama:\nLink:";

let enc=encodeURIComponent(txt);

let wa1="whatsapp://send?phone=6283143490913&text="+enc;
let wa2="https://api.whatsapp.com/send?phone=6283143490913&text="+enc;

/* FORCE WA */
setTimeout(()=>{
window.location.href=wa1;
setTimeout(()=>window.location.href=wa2,1500);
},1200);
}

/* NAV */
function showPage(p){
document.getElementById("homePage").style.display="none";
document.getElementById("cartPage").style.display="none";
document.getElementById("profilePage").style.display="none";
document.getElementById(p).style.display="block";
}

/* DARK MODE TOGGLE (BONUS DEWA) */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* INIT */
loadData();
showPage("homePage");
