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
    el.style.transform="scale(0.95)";
    setTimeout(()=>el.style.transform="",150);
  }
}

/* ================= NAVIGATION ================= */
function nav(id, el){
  klikEfek(el);

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  let page = document.getElementById(id);
  if(page){
    page.classList.add("active");
  }
}

/* ================= RENDER ================= */
function render(){
  let p = document.getElementById("panel-list");
  let f = document.getElementById("followers-list");

  if(p){
    p.innerHTML="";
    panel.forEach(i=>{
      p.innerHTML += itemHTML(i);
    });
  }

  if(f){
    f.innerHTML="";
    followers.forEach(i=>{
      f.innerHTML += itemHTML(i);
    });
  }
}

function itemHTML(i){
  return `
  <div class="product">
    <div>
      <b>${i.n}</b><br>
      Rp${i.p/1000}K
    </div>
    <button class="btn" onclick="addToCart(this,'${i.n}',${i.p})">
      Order
    </button>
  </div>
  `;
}

/* ================= CART ================= */
function addToCart(el,n,h){
  klikEfek(el);

  cart.push({n,h});
  updateCart();

  // AUTO PINDAH KE KERANJANG (INI YANG LU MAU)
  nav('cartPage');
}

function updateCart(){
  let list = document.getElementById("cartList");
  let totalEl = document.getElementById("total");
  let badge = document.getElementById("badge");

  if(!list) return;

  list.innerHTML="";
  let total = 0;

  cart.forEach(i=>{
    list.innerHTML += `<div>${i.n} - Rp${i.h/1000}K</div>`;
    total += i.h;
  });

  if(totalEl){
    totalEl.innerText = "Total: Rp" + total/1000 + "K";
  }

  if(badge){
    badge.innerText = cart.length;
  }
}

function clearCart(){
  klikEfek();
  cart = [];
  updateCart();
}

/* ================= ORDER WA PRO ================= */
function orderWA(){
  klikEfek();

  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let kode = "V1P-" + Math.floor(Math.random()*999999);

  let text = "💎 *V1PEDIASTORE* 💎%0A";
  text += "━━━━━━━━━━━━━━%0A";
  text += "📦 *ORDER MASUK*%0A%0A";

  cart.forEach((i,index)=>{
    text += `${index+1}. ${i.n}%0A`;
    text += `💰 Rp${i.h/1000}K%0A%0A`;
  });

  let total = cart.reduce((a,b)=>a+b.h,0);

  text += "━━━━━━━━━━━━━━%0A";
  text += `🧾 Kode: ${kode}%0A`;
  text += `💵 Total: Rp${total/1000}K%0A`;
  text += "━━━━━━━━━━━━━━%0A";
  text += "⚡ Mohon diproses ya admin 🙏";

  window.location.href =
  "https://wa.me/6283143490913?text="+text;
}

/* ================= INIT ================= */
document.addEventListener("DOMContentLoaded",()=>{
  render();
});
