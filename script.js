function nav(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  document.getElementById(page).classList.add('active');
  window.scrollTo(0,0);
}

window.onload = () => {
  nav('home');
};

/* DATA LOAD */
function openPanel() {
  renderList(panelData);
}

function openFollowers() {
  renderList(followerData);
}

/* RENDER */
function renderList(data) {
  const el = document.getElementById("panel-list");
  el.innerHTML = "";

  data.forEach(item => {
    el.innerHTML += `
      <div class="product">
        <div>${item.nama}<br>Rp${item.harga}</div>
        <button onclick="addToCart('${item.nama}',${item.harga})">Order</button>
      </div>
    `;
  });
}

/* CART */
let cart = [];

function addToCart(nama,harga){
  cart.push({nama,harga});
  renderCart();
}

function renderCart(){
  const list = document.getElementById("cartList");
  const total = document.getElementById("total");

  if(!list) return;

  list.innerHTML="";
  let sum=0;

  cart.forEach(i=>{
    sum+=i.harga;
    list.innerHTML+=`<div class="product">${i.nama}</div>`;
  });

  total.innerText="Total: Rp"+sum;
}

function clearCart(){
  cart=[];
  renderCart();
}

function orderWA(){
  let text="ORDER V1PEDIASTORE\n\n";

  cart.forEach(i=>{
    text+=`${i.nama} - Rp${i.harga}\n`;
  });

  const url=`https://wa.me/6283143490913?text=${encodeURIComponent(text)}`;
  window.open(url);
}
