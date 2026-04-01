let cart = [];

/* 🔊 SOUND SYSTEM (ULTRA FIX HP) */
let soundReady = false;
let clickSound;

/* UNLOCK SOUND */
document.body.addEventListener("click", function init(){
  clickSound = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-select-click-1109.mp3");
  soundReady = true;
  document.body.removeEventListener("click", init);
});

/* PLAY SOUND */
function sfx(){
  if(soundReady){
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

/* GETAR */
function vibrate(){
  if(navigator.vibrate){
    navigator.vibrate(30);
  }
}

/* EFFECT KLIK PREMIUM */
function fx(el){
  sfx();
  vibrate();

  if(el){
    el.classList.add("tap");
    setTimeout(()=>el.classList.remove("tap"),150);
  }
}

/* 🔥 NAV FIX */
function nav(id){
  fx();

  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

/* FORMAT HARGA */
function format(h){
  return (h>=1000) ? "Rp"+(h/1000)+"K" : "Rp"+h;
}

/* PANEL */
function openPanel(el){
  fx(el);

  let list = document.getElementById("panel-list");
  list.innerHTML="";
  document.getElementById("followers-list").innerHTML="";

  panel.forEach(p=>{
    list.innerHTML += `
    <div class="product">
      <div>${p.n}<br>${format(p.h)}</div>
      <button onclick="add('${p.n}',${p.h},this)">Order</button>
    </div>`;
  });
}

/* FOLLOWERS */
function openFollowers(el){
  fx(el);

  let list = document.getElementById("followers-list");
  list.innerHTML="";
  document.getElementById("panel-list").innerHTML="";

  followers.forEach(f=>{
    list.innerHTML += `
    <div class="product">
      <div>${f.n}<br>${format(f.h)}</div>
      <button onclick="add('${f.n}',${f.h},this)">Order</button>
    </div>`;
  });
}

/* ADD CART */
function add(n,h,el){
  fx(el);

  cart.push({n,h});
  renderCart();
}

/* RENDER CART */
function renderCart(){
  let el = document.getElementById("cartList");
  let total = 0;
  el.innerHTML="";

  cart.forEach(c=>{
    total += c.h;

    el.innerHTML += `
    <div class="product">
      ${c.n} - ${format(c.h)}
    </div>`;
  });

  document.getElementById("total").innerText = "Total: "+format(total);
}

/* CLEAR */
function clearCart(){
  fx();
  cart=[];
  renderCart();
}

/* WA */
function orderWA(){
  fx();

  let text="Halo admin, saya ingin order:%0A";

  cart.forEach(c=>{
    text += `- ${c.n} (${format(c.h)})%0A`;
  });

  window.open("https://wa.me/6283143490913?text="+text);
}
