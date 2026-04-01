let cart=[];

/* SOUND */
const s1=new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
const s2=new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

/* EFFECT */
function fx(){
  try{s1.currentTime=0;s1.play()}catch{}
  if(navigator.vibrate)navigator.vibrate(30);
}

/* NAV */
function nav(id){
  fx();
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* OPEN MENU */
function openPanel(el){
  fx();
  let box=document.getElementById("panel-list");
  box.innerHTML="";
  panel.forEach(i=>box.innerHTML+=html(i));
}

function openFollowers(el){
  fx();
  let box=document.getElementById("followers-list");
  box.innerHTML="";
  followers.forEach(i=>box.innerHTML+=html(i));
}

/* HTML */
function html(i){
  return `<div class="product">
    <div>${i.n}<br>Rp${i.p/1000}K</div>
    <button onclick="add('${i.n}',${i.p})">Order</button>
  </div>`;
}

/* CART */
function add(n,h){
  s2.play();
  cart.push({n,h});
  nav("cart");
  updateCart();
}

function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;
  el.innerHTML="";

  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - Rp${i.h/1000}K</div>`;
    total+=i.h;
  });

  document.getElementById("total").innerText="Total: Rp"+total/1000+"K";
}

function clearCart(){
  cart=[];
  updateCart();
}

/* WA */
function orderWA(){
  if(cart.length==0)return alert("Kosong!");

  let text="Order:%0A";
  cart.forEach(i=>text+=i.n+"%0A");

  window.location.href="https://wa.me/6283143490913?text="+text;
}
