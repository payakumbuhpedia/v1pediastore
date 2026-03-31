let cart=JSON.parse(localStorage.getItem("cart"))||[];

/* SOUND */
function clickSound(){
new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3").play();
}

/* EFFECT */
function effect(){
clickSound();
if(navigator.vibrate)navigator.vibrate([30,50,30]);
}

/* RENDER */
function render(){
let p=document.getElementById("panel-list");
let f=document.getElementById("followers-list");
p.innerHTML="";f.innerHTML="";

panel.forEach(i=>p.innerHTML+=html(i));
followers.forEach(i=>f.innerHTML+=html(i));
}

function html(i){
return `<div class="product">
<div>${i.nama}<br>Rp${i.harga/1000}K</div>
<button onclick="add('${i.nama}',${i.harga})">Order</button>
</div>`;
}

/* ADD */
function add(n,h){
effect();
cart.push({n,h});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
popup();
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
if(cart.length==0){alert("Keranjang kosong");return;}
let code="V1PEDIA-"+Math.random().toString(36).substr(2,6).toUpperCase();

let text="Halo Admin V1PEDIASTORE%0A";
text+="Saya ingin order:%0A";

cart.forEach(i=>text+=i.n+" - Rp"+(i.h/1000)+"K%0A");

text+="Kode Order: "+code;

window.location.href="https://wa.me/6283143490913?text="+text;
}

/* NAV */
function showPage(id){
effect();
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* DARK */
function toggleDark(){
document.body.classList.toggle("dark");
}

/* WA */
function openWA(){
window.location.href="https://wa.me/6283143490913";
}

/* POPUP */
function popup(){
let p=document.getElementById("popup");
p.classList.add("active");
setTimeout(()=>p.classList.remove("active"),1000);
}

/* LOADING */
setTimeout(()=>{
document.getElementById("loading").style.display="none";
},1200);

render();
updateCart();
