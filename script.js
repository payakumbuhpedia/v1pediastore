let cart = [];

/* EFFECT */
function fx(el){
  if(navigator.vibrate) navigator.vibrate(30);
  if(el){
    el.style.transform="scale(.95)";
    setTimeout(()=>el.style.transform="",150);
  }
}

/* LOADING FIX */
window.onload = ()=>{
  let l = document.getElementById("loading");
  if(l) l.style.display="none";
}

/* NAV FIX */
function nav(page, el){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");

  document.querySelectorAll(".nav div").forEach(n=>n.classList.remove("active"));
  if(el) el.classList.add("active");

  hideAll();
  fx();
}

/* HIDE PANEL */
function hideAll(){
  document.getElementById("panel-list").classList.remove("show");
  document.getElementById("followers-list").classList.remove("show");
}

/* PANEL */
function openPanel(el){
  fx(el);
  let p = document.getElementById("panel-list");
  let f = document.getElementById("followers-list");

  if(p.classList.contains("show")){
    p.classList.remove("show");
  }else{
    p.classList.add("show");
    f.classList.remove("show");
  }
}

/* FOLLOWERS */
function openFollowers(el){
  fx(el);
  let p = document.getElementById("panel-list");
  let f = document.getElementById("followers-list");

  if(f.classList.contains("show")){
    f.classList.remove("show");
  }else{
    f.classList.add("show");
    p.classList.remove("show");
  }
}

/* RENDER */
function render(){
  let p = document.getElementById("panel-list");
  let f = document.getElementById("followers-list");

  if(p.innerHTML===""){
    panel.forEach(i=>p.innerHTML += html(i));
  }

  if(f.innerHTML===""){
    followers.forEach(i=>f.innerHTML += html(i));
  }
}

function html(i){
  return `
  <div class="product" onclick="fx(this)">
    <div>${i.n}<br>Rp${i.p/1000}K</div>
    <button onclick="event.stopPropagation();add('${i.n}',${i.p},this)">Order</button>
  </div>`;
}

/* CART */
function add(n,h,el){
  fx(el);
  cart.push({n,h});
  updateCart();
  nav("cart");
}

function updateCart(){
  let el = document.getElementById("cartList");
  let total = 0;

  el.innerHTML="";

  cart.forEach(i=>{
    el.innerHTML += `<div>${i.n} - Rp${i.h/1000}K</div>`;
    total += i.h;
  });

  document.getElementById("total").innerText = "Total: Rp"+total/1000+"K";
}

function clearCart(){
  cart=[];
  updateCart();
}

/* ORDER WA */
function orderWA(){
  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let kode = "V1-"+Math.floor(100000000 + Math.random()*900000000);

  let text = "💎 *V1PEDIASTORE* 💎%0A";
  text += "━━━━━━━━━━━━━━%0A";

  cart.forEach((i,x)=>{
    text += `${x+1}. ${i.n}%0A💰 Rp${i.h/1000}K%0A`;
  });

  let total = cart.reduce((a,b)=>a+b.h,0);

  text += "%0A━━━━━━━━━━━━━━%0A";
  text += `🧾 Kode: ${kode}%0A`;
  text += `💰 Total: Rp${total/1000}K%0A`;

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* INIT */
render();
