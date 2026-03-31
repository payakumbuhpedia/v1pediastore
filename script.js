let cart=[];

/* PAGE FIX */
function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

/* RENDER */
function render(){
let p=document.getElementById("panel-list");
let f=document.getElementById("followers-list");

p.innerHTML="";
f.innerHTML="";

panel.forEach(i=>p.innerHTML+=html(i));
followers.forEach(i=>f.innerHTML+=html(i));
}

function html(i){
return `
<div class="product">
<div>
<b>${i.nama}</b><br>
Rp${i.harga/1000}K
</div>
<button class="btn" onclick="add('${i.nama}',${i.harga})">Order</button>
</div>`;
}

/* TAB */
function switchTab(e,t){
document.getElementById("panel-list").style.display=t=="panel"?"block":"none";
document.getElementById("followers-list").style.display=t=="followers"?"block":"none";

document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
e.target.classList.add("active");
}

/* CART */
function add(n,h){
cart.push({n,h});
popup();
updateCart();
}

function updateCart(){
let el=document.getElementById("cartList");
let total=0;

el.innerHTML="";

cart.forEach((i,index)=>{
el.innerHTML+=`
<div>
${i.n} - Rp${i.h/1000}K 
<button onclick="removeItem(${index})">❌</button>
</div>`;
total+=i.h;
});

document.getElementById("total").innerText="Total: Rp"+total/1000+"K";
}

/* HAPUS ITEM */
function removeItem(i){
cart.splice(i,1);
updateCart();
}

/* CLEAR CART */
function clearCart(){
cart=[];
updateCart();
}

/* POPUP */
function popup(){
let p=document.getElementById("popup");
p.classList.add("active");
setTimeout(()=>p.classList.remove("active"),1000);
}

/* WA */
function orderWA(){
if(cart.length==0){
alert("Keranjang kosong!");
return;
}

let text="🛒 ORDER V1PEDIA STORE%0A%0A";

cart.forEach(i=>{
text+=`• ${i.n} - Rp${i.h/1000}K%0A`;
});

window.location.href="https://wa.me/6283143490913?text="+text;
}

/* LIVE ORDER */
setInterval(()=>{
let names=["Budi","Andi","Rizky","Dika"];
let all=[...panel,...followers];
let item=all[Math.random()*all.length|0];

let box=document.getElementById("liveOrder");
box.style.display="block";
box.innerText=names[Math.random()*4|0]+" order "+item.nama;

setTimeout(()=>box.style.display="none",3000);
},5000);

/* COUNTER */
setInterval(()=>{
let s=document.getElementById("sold");
s.innerText=parseInt(s.innerText)+1;
},4000);

render();
