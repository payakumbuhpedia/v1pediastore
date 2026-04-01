let currentPage = "home";

/* NAV FIX + SLIDE */
function nav(id){
  let oldPage = document.getElementById(currentPage);
  let newPage = document.getElementById(id);

  oldPage.style.left = "-100%";
  newPage.style.left = "0";

  currentPage = id;

  sfx();
}

/* SOUND + GETAR */
function sfx(){
  let s=document.getElementById("sfx");
  if(s){
    s.currentTime=0;
    s.play().catch(()=>{});
  }
  if(navigator.vibrate) navigator.vibrate(20);
}

/* FIX CATEGORY (BIAR GAK NUMPUK) */
function openCategory(cat){
  sfx();
  let list=document.getElementById("productList");
  list.innerHTML="";

  products.filter(p=>p.kategori===cat).forEach(p=>{
    list.innerHTML+=`
    <div class="product">
      ${p.nama}<br>Rp${p.harga}
      <button onclick="addCart('${p.nama}',${p.harga})">Order</button>
    </div>`;
  });
}

/* CART */
let cart=[];

function addCart(n,h){
  cart.push({n,h});
  renderCart();
  sfx();
}

function renderCart(){
  let list=document.getElementById("cartList");
  let total=0;
  list.innerHTML="";

  cart.forEach(i=>{
    total+=i.h;
    list.innerHTML+=`
    <div class="product">${i.n} - Rp${i.h}</div>`;
  });

  document.getElementById("total").innerText="Total: Rp"+total;
}

function clearCart(){
  cart=[];
  renderCart();
  sfx();
}

/* WA */
function orderWA(){
  if(cart.length==0) return;

  let text="Order:\n";
  cart.forEach(i=>text+=i.n+"\n");

  window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text));
}
