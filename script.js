let cart = [];

/* SOUND */
const s1 = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
const s2 = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");

/* EFFECT */
function fx(el){
  try{ s1.currentTime=0; s1.play(); }catch{}
  if(navigator.vibrate) navigator.vibrate(30);

  if(el){
    el.style.transform="scale(.95)";
    setTimeout(()=>el.style.transform="",150);
  }
}

/* NAV */
function nav(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");

  document.querySelectorAll(".nav div").forEach(n=>n.classList.remove("active"));
  event.target.classList.add("active");

  /* RESET PANEL */
  hideAll();

  fx();
}

/* HIDE PANEL */
function hideAll(){
  document.getElementById("panel-list").classList.remove("show");
  document.getElementById("followers-list").classList.remove("show");
}

/* OPEN PANEL */
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

/* OPEN FOLLOWERS */
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
    panel.forEach(i=> p.innerHTML += html(i));
  }

  if(f.innerHTML===""){
    followers.forEach(i=> f.innerHTML += html(i));
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
  fx();
}

/* ORDER WA ULTRA */
function orderWA(){
  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let kode = "V1-"+Math.floor(100000000 + Math.random()*900000000);

  let text = "💎 *V1PEDIASTORE* 💎%0A";
  text += "━━━━━━━━━━━━━━%0A";
  text += "📦 ORDER:%0A%0A";

  cart.forEach((i,x)=>{
    text += `${x+1}. ${i.n}%0A💰 Rp${i.h/1000}K%0A`;
  });

  let total = cart.reduce((a,b)=>a+b.h,0);

  text += "%0A━━━━━━━━━━━━━━%0A";
  text += `🧾 Kode: ${kode}%0A`;
  text += `💰 Total: Rp${total/1000}K%0A`;
  text += "━━━━━━━━━━━━━━%0A";
  text += "⚡ Mohon diproses admin 🙏";

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* INIT */
render();
