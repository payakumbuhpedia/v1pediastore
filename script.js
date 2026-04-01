let cart = [];

function nav(id){
  document.querySelectorAll('.page').forEach(p=>{
    p.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function openPanel(){
  let list = document.getElementById('panel-list');
  list.innerHTML = "";
  panel.forEach(p=>{
    list.innerHTML += `
      <div class="product">
        <div>${p.n}<br>Rp${p.h}</div>
        <button onclick="add('${p.n}',${p.h})">Order</button>
      </div>
    `;
  });
}

function openFollowers(){
  let list = document.getElementById('followers-list');
  list.innerHTML = "";
  followers.forEach(f=>{
    list.innerHTML += `
      <div class="product">
        <div>${f.n}<br>Rp${f.h}</div>
        <button onclick="add('${f.n}',${f.h})">Order</button>
      </div>
    `;
  });
}

function add(n,h){
  cart.push({n,h});
  renderCart();
  nav('cart');
}

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

function clearCart(){
  cart=[];
  renderCart();
}

function orderWA(){
  let text="Halo Admin, saya ingin order:%0A";
  cart.forEach(c=>{
    text += `- ${c.n} (Rp${c.h})%0A`;
  });

  window.open("https://wa.me/6283143490913?text="+text);
}
