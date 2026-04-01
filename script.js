let cart=[];

/* LOADING */
setTimeout(()=>{
  document.getElementById("loading").style.display="none";
},1000);

/* NAV */
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openMenu(id){
  showPage(id);
}

/* RENDER */
function render(){
  let p=document.getElementById("panel-list");
  let f=document.getElementById("followers-list");

  panel.forEach(i=>{
    p.innerHTML+=`
    <div class="card">
      ${i.n}<br>Rp${i.p}
      <button onclick="add('${i.n}',${i.p})">Order</button>
    </div>`;
  });

  followers.forEach(i=>{
    f.innerHTML+=`
    <div class="card">
      ${i.n}<br>Rp${i.p}
      <button onclick="add('${i.n}',${i.p})">Order</button>
    </div>`;
  });
}

/* CART */
function add(n,h){
  if(navigator.vibrate) navigator.vibrate(40);
  cart.push({n,h});
  updateCart();
}

function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;
  el.innerHTML="";

  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n}</div>`;
    total+=i.h;
  });

  document.getElementById("total").innerText="Total: Rp"+total;
  document.getElementById("badge").innerText=cart.length;
}

function clearCart(){
  cart=[];
  updateCart();
}

/* WA */
function orderWA(){
  if(cart.length==0){
    alert("Keranjang kosong");
    return;
  }

  let kode="V1P-"+Math.floor(Math.random()*999999);
  let text="Halo Admin V1PEDIASTORE%0A";

  cart.forEach(i=>{
    text+=i.n+"%0A";
  });

  text+="Kode:"+kode;

  window.location.href="https://wa.me/6283143490913?text="+text;
}

render();
