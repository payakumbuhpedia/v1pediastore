let cart = [];

/* SOUND */
const sClick = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
const sOrder = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

/* NAV FIX */
function nav(page){
  sClick.play();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

/* PANEL */
function openPanel(){
  sClick.play();
  let list=document.getElementById("panel-list");
  list.innerHTML="";
  panel.forEach(i=>{
    list.innerHTML+=`
    <div class="product">
      <div>${i.n}<br>Rp${i.h}</div>
      <button onclick="add('${i.n}',${i.h})">Order</button>
    </div>`;
  });
}

/* FOLLOWERS */
function openFollowers(){
  sClick.play();
  let list=document.getElementById("followers-list");
  list.innerHTML="";
  followers.forEach(i=>{
    list.innerHTML+=`
    <div class="product">
      <div>${i.n}<br>Rp${i.h}</div>
      <button onclick="add('${i.n}',${i.h})">Order</button>
    </div>`;
  });
}

/* CART */
function add(n,h){
  sOrder.play();
  cart.push({n,h});
  renderCart();
  nav('cart');
}

function renderCart(){
  let el=document.getElementById("cartList");
  let total=0;
  el.innerHTML="";
  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - Rp${i.h}</div>`;
    total+=i.h;
  });
  document.getElementById("total").innerText="Total: Rp"+total;
}

function clearCart(){
  sClick.play();
  cart=[];
  renderCart();
}

/* WA ORDER */
function orderWA(){
  if(cart.length==0){alert("Keranjang kosong!");return;}

  let kode="V1-"+Math.floor(Math.random()*999999);

  let text="ORDER V1PEDIASTORE\nKode:"+kode+"\n\n";
  cart.forEach((i,x)=>{
    text+=`${x+1}. ${i.n} - Rp${i.h}\n`;
  });

  let total=cart.reduce((a,b)=>a+b.h,0);
  text+="\nTotal: Rp"+total;

  window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text));
}
