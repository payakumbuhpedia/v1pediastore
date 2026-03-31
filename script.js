let cart=[];

function showPanel(){
let html="";
panelList.forEach(p=>{
html+=`
<div class="item">
<div>${p.nama} - Rp${p.harga}</div>
<button onclick="addCart('${p.nama}')">Order</button>
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
<button onclick="addCart('${f.nama}')">Order</button>
</div>`;
});
document.getElementById("list").innerHTML=html;
}

function addCart(nama){
cart.push(nama);
let n=document.getElementById("notif");
n.style.display="block";
setTimeout(()=>{n.style.display="none";},1200);
}

function showCart(){
let el=document.getElementById("cartPopup");
let items=document.getElementById("cartItems");
el.style.display="block";

let html="";
cart.forEach((c,i)=>{
html+=`<div>${c} <button onclick="hapus(${i})">❌</button></div>`;
});
items.innerHTML=html;
}

function hapus(i){
cart.splice(i,1);
showCart();
}

function checkout(){
if(cart.length===0){alert("Keranjang kosong");return;}

let text="Halo admin V1 PEDIA STORE, saya mau order:%0A";
cart.forEach(c=>{text+="- "+c+"%0A";});

window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text),"_blank");
}

function goHome(){location.reload();}
function showProfile(){
alert("V1 PEDIA STORE\nJalan Agus Salim, Payakumbuh\nOwner: Kenzo Dista Ananta");
}

setInterval(()=>{
let nama=["Andi","Budi","Rizky","Dika"];
let layanan=["Panel","Followers"];
document.getElementById("liveOrder").innerText=
nama[Math.random()*4|0]+" order "+layanan[Math.random()*2|0];
},3000);
