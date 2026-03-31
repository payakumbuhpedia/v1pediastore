let cart=[];

/* LOADING */
setTimeout(()=>{
document.getElementById("loading").style.display="none";
},1500);

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
return `<div class="product">
<div>${i.nama}<br>Rp${i.harga/1000}K</div>
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
updateCart();
}

function updateCart(){
let el=document.getElementById("cartList");
let total=0;
el.innerHTML="";

cart.forEach(i=>{
el.innerHTML+=`<div>${i.n} - ${i.h/1000}K</div>`;
total+=i.h;
});

document.getElementById("total").innerText="Total: Rp"+total/1000+"K";
document.getElementById("badge").innerText=cart.length;
}

function clearCart(){
cart=[];
updateCart();
}

/* WA */
function orderWA(){
let text="ORDER V1PEDIA%0A";
cart.forEach(i=>text+=i.n+"%0A");

window.location.href="https://wa.me/6283143490913?text="+text;
}

/* NAV */
function openPage(id,el){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* START */
render();
