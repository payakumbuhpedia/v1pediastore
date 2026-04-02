window.onload=()=>{
setTimeout(()=>{
document.getElementById("loading").style.display="none";
},800);
};

// NAV
function nav(id){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById(id).classList.add("active");
}

// FILTER
function openCategory(type){
renderProduk(type);
}

// RENDER
function renderProduk(filter=""){
let html="";
produk.forEach(p=>{
if(filter && !p.nama.includes(filter)) return;

html+=`
<div class="product">
<h3>${p.nama}</h3>
<p>${p.harga}</p>
<button onclick="addCart('${p.nama}',${p.harga.replace('K','000')})">Tambah</button>
</div>`;
});
document.getElementById("productList").innerHTML=html;
}
renderProduk();

// CART
let cart=[];

function addCart(nama,harga){
cart.push({nama,harga});
renderCart();
document.getElementById("sfx").play();
}

function renderCart(){
let total=0;
let html="";
cart.forEach(c=>{
total+=c.harga;
html+=`<p>${c.nama} - Rp${c.harga}</p>`;
});
document.getElementById("cartList").innerHTML=html;
document.getElementById("total").innerText="Total: Rp"+total;
}

function clearCart(){
cart=[];
renderCart();
}

// WA
function orderWA(){
let text="Halo Admin V1Pedia Store 👋%0A%0ASaya ingin order:%0A";
cart.forEach(c=>{
text+=`- ${c.nama} (${c.harga})%0A`;
});
window.open("https://wa.me/628314390913?text="+text);
}
