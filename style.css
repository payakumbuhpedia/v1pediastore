let cart = [];

/* ================= SOUND ================= */
const klikSound = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");

/* ================= EFFECT ================= */
function klikEfek(el){
  try{
    klikSound.currentTime = 0;
    klikSound.play();
  }catch(e){}

  if(navigator.vibrate){
    navigator.vibrate(40);
  }

  if(el){
    el.classList.add("glow-click");
    setTimeout(()=>el.classList.remove("glow-click"),200);
  }
}

/* ================= RENDER ================= */
function render(){
  let p=document.getElementById("panel-list");
  let f=document.getElementById("followers-list");

  if(p && p.innerHTML===""){
    panel.forEach(i=>p.innerHTML+=html(i));
  }

  if(f && f.innerHTML===""){
    followers.forEach(i=>f.innerHTML+=html(i));
  }
}

function html(i){
  return `<div class="product" onclick="clickEffect(this)">
    <div>${i.n}<br>Rp${i.p/1000}K</div>
    <button class="btn" onclick="event.stopPropagation();add(this,'${i.n}',${i.p})">Order</button>
  </div>`;
}

/* ================= CLICK ================= */
function clickEffect(el){
  klikEfek(el);
  el.style.transform="scale(.97)";
  setTimeout(()=>el.style.transform="",150);
}

/* ================= CART ================= */
function add(el,n,h){
  klikEfek(el);
  cart.push({n,h});
  popup();
  updateCart();
}

function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;

  if(!el) return;

  el.innerHTML="";

  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - Rp${i.h/1000}K</div>`;
    total+=i.h;
  });

  let t=document.getElementById("total");
  if(t) t.innerText="Total: Rp"+total/1000+"K";
}

function clearCart(){
  klikEfek();
  cart=[];
  updateCart();
}

/* ================= POPUP ================= */
function popup(){
  let p=document.getElementById("popup");
  if(!p) return;

  p.classList.add("active");
  setTimeout(()=>p.classList.remove("active"),1200);
}

/* ================= START CS (WA PRO) ================= */
function orderWA(){
  klikEfek();

  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let kode = "V1P-" + Math.floor(Math.random()*999999);

  let text = "💎 *V1PEDIASTORE OFFICIAL* 💎%0A";
  text += "━━━━━━━━━━━━━━%0A";
  text += "👋 Halo Admin,%0A";
  text += "Saya ingin melakukan pemesanan:%0A%0A";

  cart.forEach((i,index)=>{
    text += `${index+1}. ${i.n}%0A   💰 Rp${i.h/1000}K%0A`;
  });

  let total = cart.reduce((a,b)=>a+b.h,0);

  text += "%0A━━━━━━━━━━━━━━%0A";
  text += `🧾 *Kode Order:* ${kode}%0A`;
  text += `💰 *Total:* Rp${total/1000}K%0A`;
  text += "━━━━━━━━━━━━━━%0A";
  text += "⚡ Mohon diproses ya admin, terima kasih 🙏";

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* ================= NAV ================= */
function navClick(el){
  klikEfek(el);
  el.style.transform="scale(.85)";
  setTimeout(()=>el.style.transform="",150);
}

/* ================= SCROLL ================= */
function scrollToTop(){
  klikEfek();
  window.scrollTo({top:0,behavior:"smooth"});
}

function scrollToCart(){
  klikEfek();
  window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
}

/* ================= LIVE ORDER ================= */
setInterval(()=>{
  let names=["Budi","Andi","Rizky","Dika"];
  let all=[...panel,...followers];

  if(all.length===0) return;

  let item=all[Math.random()*all.length|0];

  let box=document.getElementById("liveOrder");
  if(!box) return;

  box.style.display="block";
  box.innerText=names[Math.random()*4|0]+" order "+item.n;

  setTimeout(()=>box.style.display="none",3000);
},5000);

/* ================= COUNTER ================= */
setInterval(()=>{
  let s=document.getElementById("sold");
  if(!s) return;

  s.innerText=parseInt(s.innerText)+1;
},4000);

/* INIT */
render();
