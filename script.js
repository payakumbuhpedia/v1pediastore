let cart=[];

/* FORMAT HARGA KE K */
function formatK(num){
if(num>=1000){
return (num/1000)+"K";
}
return num;
}

/* LOAD DATA */
function loadData(){

let panelHTML="";
panelList.forEach(p=>{
panelHTML+=`
<div class="item">
<b>${p.nama}</b>
<small>${formatK(p.harga)}</small>
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
document.getElementById("panelList").innerHTML=panelHTML;

let followHTML="";
followersList.forEach(f=>{
followHTML+=`
<div class="item">
<b>${f.nama}</b>
<small>${formatK(f.harga)}</small>
<button onclick="addCart('${f.nama}',${f.harga})">Order</button>
</div>`;
});
document.getElementById("followersList").innerHTML=followHTML;
}

/* ADD CART */
function addCart(nama,harga){
cart.push({nama,harga});
updateCart();
toast("✔ Ditambahkan");
}

/* CART */
function updateCart(){
let el=document.getElementById("cartItems");
let total=0;
let html="";

cart.forEach((c,i)=>{
total+=c.harga;
html+=`${c.nama} - ${formatK(c.harga)} <button onclick="hapus(${i})">❌</button><br>`;
});

html+=`<hr>Total: ${formatK(total)}`;
el.innerHTML=html;
}

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

/* CHECKOUT WA */
function checkout(){
if(cart.length===0){
toast("Keranjang kosong");
return;
}

let id="ORD"+Math.floor(Math.random()*999999);
let total=0;

let txt="Halo Admin V1 PEDIA STORE\n";
txt+="Kode: "+id+"\n\n";

cart.forEach(c=>{
txt+=c.nama+" - "+formatK(c.harga)+"\n";
total+=c.harga;
});

txt+="\nTotal: "+formatK(total);
txt+="\n\nNama:\nLink:";

let enc=encodeURIComponent(txt);

let wa1="whatsapp://send?phone=6283143490913&text="+enc;
let wa2="https://api.whatsapp.com/send?phone=6283143490913&text="+enc;

window.location.href=wa1;
setTimeout(()=>window.location.href=wa2,1500);
}

/* NAV */
function showPage(p){
document.getElementById("homePage").style.display="none";
document.getElementById("cartPage").style.display="none";
document.getElementById("profilePage").style.display="none";
document.getElementById(p).style.display="block";
}

/* INIT */
loadData();
showPage("homePage");
