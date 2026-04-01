let cart = [];

/* SOUND */
const s1 = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");

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
  fx();
}

/* OPEN MENU */
function openPanel(el){
  fx(el);
  document.getElementById("panel-list").style.display="block";
  document.getElementById("followers-list").style.display="none";
}

function openFollowers(el){
  fx(el);
  document.getElementById("followers-list").style.display="block";
  document.getElementById("panel-list").style.display="none";
}

/* RENDER */
function render(){
  let p = document.getElementById("panel-list");
  let f = document.getElementById("followers-list");

  p.innerHTML = "";
  f.innerHTML = "";

  panel.forEach(i=>{
    p.innerHTML += html(i);
  });

  followers.forEach(i=>{
    f.innerHTML += html(i);
  });
}

/* HTML ITEM */
function html(i){
  return `
  <div class="product" onclick="fx(this)">
    <div>${i.n}<br>Rp${format(i.p)}</div>
    <button onclick="event.stopPropagation();add('${i.n}',${i.p},this)">Order</button>
  </div>`;
}

/* FORMAT HARGA */
function format(h){
  return (h >= 1000) ? (h/1000)+"K" : h;
}

/* CART */
function add(n,h,el){
  fx(el);
  cart.push({n,h});
  updateCart();
}

/* UPDATE CART */
function updateCart(){
  let el = document.getElementById("cartList");
  let total = 0;

  el.innerHTML = "";

  cart.forEach(item=>{
    total += item.h;

    el.innerHTML += `
    <div class="product">
      ${item.n} - Rp${format(item.h)}
    </div>`;
  });

  document.getElementById("total").innerText = "Total: Rp"+format(total);
}

/* CLEAR */
function clearCart(){
  cart = [];
  updateCart();
}

/* ORDER WA */
function orderWA(){
  if(cart.length == 0){
    alert("Keranjang kosong!");
    return;
  }

  let text = "Order:%0A";
  let total = 0;

  cart.forEach(i=>{
    text += "- "+i.n+" (Rp"+format(i.h)+")%0A";
    total += i.h;
  });

  text += "%0ATotal: Rp"+format(total);

  window.open("https://wa.me/6283143490913?text="+text);
}

/* INIT */
window.onload = function(){
  render();
};
