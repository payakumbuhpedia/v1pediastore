let cart=[];

/* LOADING */
window.onload=()=>setTimeout(()=>loading.style.display="none",1000);

/* SOUND */
function sfx(){
let s=document.getElementById("sfx");
s.currentTime=0;
s.play();
if(navigator.vibrate) navigator.vibrate(50);
}

/* NAV */
function nav(id){
sfx();
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

/* FORMAT */
function format(h){
return h>=1000?(h/1000)+"K":h;
}

/* CATEGORY */
function openCategory(cat){
sfx();
let list=document.getElementById("productList");
list.innerHTML="";

products.filter(p=>p.kategori===cat).forEach(p=>{
list.innerHTML+=`
<div class="product">
${p.nama}<br>Rp${format(p.harga)}
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
}

/* CART */
function addCart(n,h){
sfx();
cart.push({n,h});
renderCart();
}

function renderCart(){
let list=document.getElementById("cartList");
let total=0;
list.innerHTML="";

cart.forEach(i=>{
total+=i.h;
list.innerHTML+=`<div class="product">${i.n} - Rp${format(i.h)}</div>`;
});

total.innerText="Total: Rp"+format(total);
}

/* CLEAR */
function clearCart(){
sfx();
cart=[];
renderCart();
}

/* WA */
function orderWA(){
sfx();
let kode=Math.floor(Math.random()*999999);

let text=`Halo V1PEDIASTORE 👋

Order:
`;

cart.forEach(i=>text+=`- ${i.n}\n`);

text+=`\nKode: V1-${kode}`;

window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text));
}
