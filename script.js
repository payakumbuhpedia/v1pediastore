let cart=[];

/* LOAD DATA */
function loadData(){
let panelHTML="";
panelList.forEach(p=>{
panelHTML+=`
<div class="item">
<span>${p.nama} - Rp${p.harga}</span>
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
document.getElementById("panelList").innerHTML=panelHTML;

let followHTML="";
followersList.forEach(f=>{
followHTML+=`
<div class="item">
<span>${f.nama} - Rp${f.harga}</span>
<button onclick="addCart('${f.nama}',${f.harga})">Order</button>
</div>`;
});
document.getElementById("followersList").innerHTML=followHTML;
}

/* ADD CART */
function addCart(nama,harga){
cart.push({nama,harga});
alert("✔ Masuk keranjang");
updateCart();
}

/* UPDATE CART */
function updateCart(){
let html="";
let total=0;

cart.forEach((c,i)=>{
total+=c.harga;
html+=`${c.nama} - Rp${c.harga} <br>`;
});

html+=`<hr>Total: Rp${total}`;
document.getElementById("cartItems").innerHTML=html;
}

/* CHECKOUT */
function checkout(){
if(cart.length===0){alert("Keranjang kosong");return;}

let id="ORD"+Math.floor(Math.random()*999999);
let total=0;

let text=`Halo Admin V1 PEDIA STORE\n\n`;
text+=`Kode Order: ${id}\n`;
text+=`-------------------\n`;

cart.forEach(c=>{
text+=`${c.nama} - Rp${c.harga}\n`;
total+=c.harga;
});

text+=`-------------------\nTotal: Rp${total}\n\n`;
text+=`Nama:\nUsername/Link:\n\nTerima kasih`;

window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text),"_blank");
}

/* NAV */
function showPage(page){
document.getElementById("homePage").style.display="none";
document.getElementById("cartPage").style.display="none";
document.getElementById("profilePage").style.display="none";

document.getElementById(page).style.display="block";
}

/* INIT */
loadData();
showPage("homePage");
