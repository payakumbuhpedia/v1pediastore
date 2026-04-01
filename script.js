let cart = [];

/* 🔊 SOUND SYSTEM */
const sClick = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3");
const sOpen = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-ui-click-1119.mp3");
const sAdd = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3");

/* NAV */
function nav(id){
  sClick.play();

  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

/* PANEL */
function openPanel(){
  sOpen.play();

  let list = document.getElementById('panel-list');
  list.innerHTML = "";
  document.getElementById('followers-list').innerHTML = "";

  panel.forEach(p=>{
    list.innerHTML += `
      <div class="product">
        <div>${p.n}<br>Rp${p.h}</div>
        <button onclick="add('${p.n}',${p.h})">Order</button>
      </div>
    `;
  });
}

/* FOLLOWERS */
function openFollowers(){
  sOpen.play();

  let list = document.getElementById('followers-list');
  list.innerHTML = "";
  document.getElementById('panel-list').innerHTML = "";

  followers.forEach(f=>{
    list.innerHTML += `
      <div class="product">
        <div>${f.n}<br>Rp${f.h}</div>
        <button onclick="add('${f.n}',${f.h})">Order</button>
      </div>
    `;
  });
}

/* ADD CART */
function add(n,h){
  sAdd.play();

  cart.push({n,h});
  renderCart();
  nav('cart');
}

/* RENDER CART */
function renderCart(){
  let el = document.getElementById('cartList');
  let total = 0;
  el.innerHTML = "";

  cart.forEach(c=>{
    total += c.h;
    el.innerHTML += `<div>${c.n} - Rp${c.h}</div>`;
  });

  document.getElementById('total').innerText = "Total: Rp"+total;
}

/* CLEAR CART */
function clearCart(){
  sClick.play();

  cart=[];
  renderCart();
}

/* ORDER WA */
function orderWA(){
  sOpen.play();

  let text="Halo Admin, saya ingin order:%0A";
  cart.forEach(c=>{
    text += `- ${c.n} (Rp${c.h})%0A`;
  });

  window.open("https://wa.me/6283143490913?text="+text);
}
