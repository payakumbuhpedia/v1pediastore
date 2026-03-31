let cart=JSON.parse(localStorage.getItem("cart"))||[];

/* SOUND + GETAR */
function effect(){
new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3").play();
navigator.vibrate?.([30]);
}

/* PAGE */
function showPage(id){
effect();
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
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
<div class="product fade-in" onclick="effect()">
<div>${i.nama}<br>Rp${i.harga/1000}K</div>
<button class="btn" onclick="event.stopPropagation();add('${i.nama}',${i.harga})">Order</button>
</div>`;
}

/* ADD */
function add(n,h){
effect();
cart.push({n,h});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
}

/* CART */
function updateCart(){
let el=document.getElementById("cartList");
let total=0;
el.innerHTML="";

cart.forEach(i=>{
el.innerHTML+=`<div>${i.n} - Rp${i.h/1000}K</div>`;
total+=i.h;
});

document.getElementById("total").innerText="Total: Rp"+total/1000+"K";
document.getElementById("badge").innerText=cart.length;
}

/* CLEAR */
function clearCart(){
effect();
cart=[];
localStorage.removeItem("cart");
updateCart();
}

/* WA PRO */
function orderWA(){
effect();
if(cart.length==0){alert("Keranjang kosong");return;}

let code="V1-"+Math.random().toString(36).substr(2,5).toUpperCase();

let text="💎 V1PEDIASTORE 💎%0A";
text+="Halo Admin, saya ingin order:%0A%0A";

cart.forEach(i=>{
text+=`• ${i.n} - Rp${i.h/1000}K%0A`;
});

text+="%0AKode Order: "+code;

window.location.href="https://wa.me/6283143490913?text="+text;
}

/* WA & IG */
function openWA(){
effect();
window.location.href="https://wa.me/6283143490913";
}
function openIG(){
effect();
window.location.href="https://instagram.com/kenzodistaananta";
}

/* SCROLL ANIMATION */
window.addEventListener("scroll",()=>{
document.querySelectorAll(".fade-in").forEach(el=>{
let pos=el.getBoundingClientRect().top;
if(pos<window.innerHeight-50){
el.classList.add("show");
}
});
});

render();
updateCart();
