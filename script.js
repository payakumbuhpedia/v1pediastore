let cart=[];

/* LOADING */
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("loading").style.display="none";
  },1000);
};

function sound(){
  document.getElementById("clickSound").play();
  if(navigator.vibrate) navigator.vibrate(50);
}

function nav(id){
  sound();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* FORMAT HARGA */
function format(h){
  return h>=1000 ? (h/1000)+"K" : h;
}

/* PANEL */
function openPanel(el){
  sound();
  let list=document.getElementById("panel-list");
  list.innerHTML="";

  panel.forEach(p=>{
    list.innerHTML+=`
    <div class="product">
      ${p.nama}<br>Rp${format(p.harga)}
      <button onclick="addCart('${p.nama}',${p.harga})">Order</button>
    </div>`;
  });
}

/* FOLLOWERS */
function openFollowers(){
  sound();
  let list=document.getElementById("followers-list");
  list.innerHTML="";

  followers.forEach(f=>{
    list.innerHTML+=`
    <div class="product">
      ${f.nama}<br>Rp${format(f.harga)}
      <button onclick="addCart('${f.nama}',${f.harga})">Order</button>
    </div>`;
  });
}

/* CART */
function addCart(nama,harga){
  sound();
  cart.push({nama,harga});
  renderCart();
}

function renderCart(){
  let list=document.getElementById("cartList");
  let total=0;
  list.innerHTML="";

  cart.forEach(i=>{
    total+=i.harga;
    list.innerHTML+=`
    <div class="product">
      ${i.nama} - Rp${format(i.harga)}
    </div>`;
  });

  document.getElementById("total").innerText="Total: Rp"+format(total);
}

function clearCart(){
  sound();
  cart=[];
  renderCart();
}

function orderWA(){
  sound();
  let text="Order:\n";
  cart.forEach(i=> text+=i.nama+"\n");
  window.open("https://wa.me/6283143490913?text="+encodeURIComponent(text));
}
