let cart=[];

/* SOUND */
const clickSound=new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

/* LOADING */
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("loading").style.display="none";
  },1500);
};

/* NAVIGATION */
function showPage(id){
  clickSound.play();

  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".navbar div").forEach(n=>n.classList.remove("active-nav"));
  event.currentTarget.classList.add("active-nav");
}

/* RENDER */
function render(){
  let list=document.getElementById("home-list");
  list.innerHTML="";

  panel.forEach(i=>{
    list.innerHTML+=`
    <div class="product">
      <div>${i.nama}<br>Rp${i.harga/1000}K</div>
      <button class="btn" onclick="add('${i.nama}',${i.harga})">Order</button>
    </div>`;
  });

  followers.forEach(i=>{
    list.innerHTML+=`
    <div class="product">
      <div>${i.nama}<br>Rp${i.harga/1000}K</div>
      <button class="btn" onclick="add('${i.nama}',${i.harga})">Order</button>
    </div>`;
  });
}

/* ADD CART */
function add(n,h){
  clickSound.play();

  cart.push({n,h});
  updateCart();
  popup();
}

/* UPDATE CART */
function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;

  el.innerHTML="";
  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - ${i.h/1000}K</div>`;
    total+=i.h;
  });

  document.getElementById("total").innerText="Total: Rp"+total/1000+"K";
  document.getElementById("badge").innerText=cart.length;
}

/* CLEAR CART */
function clearCart(){
  cart=[];
  updateCart();
}

/* POPUP */
function popup(){
  let p=document.getElementById("popup");
  p.classList.add("active");
  setTimeout(()=>p.classList.remove("active"),1200);
}

/* WA */
function orderWA(){
  let text="🔥 ORDER V1PEDIA 🔥%0A";
  cart.forEach(i=>text+="• "+i.n+"%0A");

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* INIT */
render();
