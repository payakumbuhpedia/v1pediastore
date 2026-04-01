let cart = [];

/* 🔊 SOUND */
let clickSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3");

/* 📳 GETAR */
function vibrate(){
  if(navigator.vibrate){
    navigator.vibrate(30);
  }
}

/* FORMAT HARGA */
function formatHarga(h){
  return "Rp" + (h/1000) + "K";
}

/* NAV */
function nav(id){
  clickSound.currentTime=0;
  clickSound.play();
  vibrate();

  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* PANEL */
function openPanel(){
  clickSound.play();
  vibrate();

  let list = document.getElementById('panel-list');
  list.innerHTML = "";
  document.getElementById('followers-list').innerHTML="";

  panel.forEach(p=>{
    list.innerHTML += `
    <div class="product">
      <div>${p.n}<br>${formatHarga(p.h)}</div>
      <button onclick="add('${p.n}',${p.h})">Order</button>
    </div>`;
  });
}

/* FOLLOWERS */
function openFollowers(){
  clickSound.play();
  vibrate();

  let list = document.getElementById('followers-list');
  list.innerHTML = "";
  document.getElementById('panel-list').innerHTML="";

  followers.forEach(f=>{
    list.innerHTML += `
    <div class="product">
      <div>${f.n}<br>${formatHarga(f.h)}</div>
      <button onclick="add('${f.n}',${f.h})">Order</button>
    </div>`;
  });
}

/* ADD */
function add(n,h){
  clickSound.play();
  vibrate();

  cart.push({n,h});
  renderCart();
  nav('cart');
}

/* CART FULL */
function renderCart(){
  let el = document.getElementById('cartList');
  let total = 0;
  el.innerHTML="";

  cart.forEach(c=>{
    total += c.h;
    el.innerHTML += `<div class="product">${c.n} - ${formatHarga(c.h)}</div>`;
  });

  document.getElementById('total').innerText = "Total: " + formatHarga(total);
}

/* CLEAR */
function clearCart(){
  clickSound.play();
  vibrate();

  cart=[];
  renderCart();
}

/* WA */
function orderWA(){
  clickSound.play();
  vibrate();

  let text="Halo Admin, saya ingin order:%0A";
  cart.forEach(c=>{
    text += `- ${c.n} (${formatHarga(c.h)})%0A`;
  });

  window.open("https://wa.me/6283143490913?text="+text);
}
