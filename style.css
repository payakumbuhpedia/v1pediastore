let cart=[];

/* ================= CLICK EFFECT GLOBAL ================= */
function clickFX(){
  if(navigator.vibrate){
    navigator.vibrate(30);
  }

  let fx=document.createElement("div");
  fx.className="click-fx";
  fx.innerHTML="💎";

  document.body.appendChild(fx);
  setTimeout(()=>fx.remove(),500);
}

document.addEventListener("click",(e)=>{
  if(e.target.tagName !== "BODY"){
    clickFX();
  }
});

/* ================= RENDER ================= */
function render(){
  let p=document.getElementById("panel-list");
  let f=document.getElementById("followers-list");

  if(!p || !f) return;

  p.innerHTML="";
  f.innerHTML="";

  panel.forEach(i=>p.innerHTML+=html(i));
  followers.forEach(i=>f.innerHTML+=html(i));
}

function html(i){
  return `
  <div class="product">
    <div>${i.nama}<br><b>Rp${i.harga/1000}K</b></div>
    <button class="btn" onclick="add('${i.nama}',${i.harga})">Order</button>
  </div>`;
}

/* ================= CART ================= */
function add(n,h){
  cart.push({n,h});
  updateCart();
}

function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;

  if(!el) return;

  el.innerHTML="";
  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - Rp${i.h/1000}K</div>`;
    total+=i.h;
  });

  document.getElementById("total").innerText="Total: Rp"+(total/1000)+"K";
  document.getElementById("badge").innerText=cart.length;
}

function clearCart(){
  cart=[];
  updateCart();
}

/* ================= WA ================= */
function orderWA(){
  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let text="🛒 ORDER V1PEDIASTORE%0A";
  cart.forEach(i=>text+=i.n+"%0A");

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* ================= DARK MODE ================= */
function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",document.body.classList.contains("dark"));
}

if(localStorage.getItem("dark")=="true"){
  document.body.classList.add("dark");
}

/* ================= INIT ================= */
render();
updateCart();
