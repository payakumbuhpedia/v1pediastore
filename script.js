let cart = [];

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function togglePanel(){
  document.getElementById("panel-list").classList.toggle("hidden");
  document.getElementById("followers-list").classList.add("hidden");
}

function toggleFollowers(){
  document.getElementById("followers-list").classList.toggle("hidden");
  document.getElementById("panel-list").classList.add("hidden");
}

/* LOAD DATA */
window.onload = ()=>{
  loadPanel();
  loadFollowers();
};

function loadPanel(){
  let el = document.getElementById("panel-list");
  el.innerHTML = "";
  panelData.forEach(p=>{
    el.innerHTML += `
    <div class="product">
      ${p.nama} - Rp${p.harga}
      <button onclick="addCart('${p.nama}',${p.harga})">Order</button>
    </div>`;
  });
}

function loadFollowers(){
  let el = document.getElementById("followers-list");
  el.innerHTML = "";
  followersData.forEach(f=>{
    el.innerHTML += `
    <div class="product">
      ${f.nama} - Rp${f.harga}
      <button onclick="addCart('${f.nama}',${f.harga})">Order</button>
    </div>`;
  });
}

function addCart(nama,harga){
  cart.push({nama,harga});
  updateCart();
  showPage('cart');
}

function updateCart(){
  let el = document.getElementById("cartList");
  let total = 0;
  el.innerHTML = "";

  cart.forEach(item=>{
    total += item.harga;
    el.innerHTML += `<div>${item.nama} - Rp${item.harga}</div>`;
  });

  document.getElementById("total").innerText = "Total: Rp"+total;
}

function clearCart(){
  cart = [];
  updateCart();
}

function orderWA(){
  if(cart.length==0) return alert("Keranjang kosong");

  let kode = "V1-"+Math.floor(Math.random()*999999);
  let text = "ORDER "+kode+"\n\n";

  cart.forEach(item=>{
    text += "- "+item.nama+"\n";
  });

  window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text));
}
