let cart=[];

function generateID(){
return "ORD"+Math.floor(Math.random()*999999);
}

function showPanel(){
let html="";
panelList.forEach(p=>{
html+=`
<div class="item">
<div>${p.nama} - Rp${p.harga}</div>
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
document.getElementById("list").innerHTML=html;
}

function showFollowers(){
let html="";
followersList.forEach(f=>{
html+=`
<div class="item">
<div>${f.nama} - Rp${f.harga}</div>
<button onclick="addCart('${f.nama}',${f.harga})">Order</button>
</div>`;
});
document.getElementById("list").innerHTML=html;
}

function addCart(nama,harga){
cart.push({nama,harga});
alert("✔ Ditambahkan");
}

function showCart(){
let el=document.getElementById("cartPopup");
let items=document.getElementById("cartItems");
el.style.display="block";

let total=0;
let html="";

cart.forEach((c,i)=>{
total+=c.harga;
html+=`<div>${c.nama} - Rp${c.harga} <button onclick="hapus(${i})">❌</button></div>`;
});

html+=`<hr>Total: Rp${total}`;
items.innerHTML=html;
}

function hapus(i){
cart.splice(i,1);
showCart();
}

function checkout(){
if(cart.length===0){alert("Keranjang kosong");return;}

let id=generateID();
let total=0;
let text="Halo Admin V1 PEDIA STORE%0A";
text+="Kode Order: "+id+"%0A----------------%0A";

cart.forEach(c=>{
text+=c.nama+" - Rp"+c.harga+"%0A";
total+=c.harga;
});

text+="----------------%0ATotal: Rp"+total;
text+="%0ANama:%0AUsername/Link:%0A";

window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text),"_blank");
}

function goHome(){
document.getElementById("profilePage").style.display="none";
}

function showProfile(){
document.getElementById("profilePage").style.display="block";
}
