let cart = [];

function openTab(tab){
  document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
}

function showMenu(type){
  document.getElementById("panel-list").style.display = type==="panel"?"block":"none";
  document.getElementById("ig-list").style.display = type==="ig"?"block":"none";
}

function render(){
  let p = document.getElementById("panel-list");
  let ig = document.getElementById("ig-list");

  p.innerHTML="";
  ig.innerHTML="";

  panel.forEach(item=>{
    p.innerHTML+=`
    <div class="card">
      <div>${item.nama}<br>${item.harga}</div>
      <button onclick="addCart('${item.nama}','${item.harga}')" class="btn">Order</button>
    </div>`;
  });

  followers.forEach(item=>{
    ig.innerHTML+=`
    <div class="card">
      <div>${item.nama}<br>${item.harga}</div>
      <button onclick="addCart('${item.nama}','${item.harga}')" class="btn">Order</button>
    </div>`;
  });
}

function addCart(nama,harga){
  cart.push({nama,harga});
  alert("✅ Ditambahkan ke keranjang");
  updateCart();
}

function updateCart(){
  let list=document.getElementById("cart-list");
  let total=0;
  list.innerHTML="";

  cart.forEach(item=>{
    list.innerHTML+=`<p>${item.nama} - ${item.harga}</p>`;
    total+=parseInt(item.harga.replace("Rp","").replace("K","000"));
  });

  document.getElementById("total").innerText="Total: Rp"+total;
}

function clearCart(){
  cart=[];
  updateCart();
}

function orderWA(){
  let text="Halo Admin V1PediaStore%0A";
  cart.forEach(i=>{
    text+=`• ${i.nama} (${i.harga})%0A`;
  });

  window.location.href="https://wa.me/6283143490913?text="+text;
}

render();
