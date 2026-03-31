let cart=[];

/* CLICK FX */
function clickFX(){
  if(navigator.vibrate){
    navigator.vibrate(30);
  }

  let fx=document.createElement("div");
  fx.className="click-fx";
  fx.innerHTML="💎";
  document.body.appendChild(fx);

  setTimeout(()=>fx.remove(),500);
}

/* GLOBAL CLICK */
document.addEventListener("click",(e)=>{
  if(e.target.tagName!=="BODY"){
    clickFX();
  }
});

/* RENDER */
function render(){
  let p=document.getElementById("panel-list");
  let f=document.getElementById("followers-list");

  if(!p||!f)return;

  p.innerHTML="";
  f.innerHTML="";

  panel.forEach(i=>p.innerHTML+=html(i));
  followers.forEach(i=>f.innerHTML+=html(i));
}

function html(i){
  return `
  <div class="product">
    <div>${i.nama}<br><b>Rp${i.harga/1000}K</b></div>
    <button class="btn" onclick="add('${i.nama}',${i.harga})">Order</button>
  </div>`;
}

/* CART */
function add(n,h){
  cart.push({n,h});
  updateCart();
}

function updateCart(){
  let el=document.getElementById("cartList");
  let total=0;

  if(!el)return;

  el.innerHTML="";
  cart.forEach(i=>{
    el.innerHTML+=`<div>${i.n} - Rp${i.h/1000}K</div>`;
    total+=i.h;
  });

  document.getElementById("total").innerText="Total: Rp"+(total/1000)+"K";
  document.getElementById("badge").innerText=cart.length;
}

function clearCart(){
  cart=[];
  updateCart();
}
function orderWA(){
  if(cart.length===0){
    alert("Keranjang kosong!");
    return;
  }

  let code="V1-"+Math.random().toString(36).substr(2,6).toUpperCase();

  let text=`✨ *V1PEDIA STORE* ✨%0A`;
  text+=`━━━━━━━━━━━━━━━━━━━%0A%0A`;
  text+=`👋 Halo Admin,%0A`;
  text+=`Saya ingin melakukan pemesanan:%0A%0A`;

  text+=`📦 *Detail Order:*%0A`;
  cart.forEach((i,index)=>{
    text+=`${index+1}. ${i.n} - Rp${i.h/1000}K%0A`;
  });

  let total=cart.reduce((a,b)=>a+b.h,0);

  text+=`%0A━━━━━━━━━━━━━━━━━━━%0A`;
  text+=`💰 *Total Pembayaran:* Rp${total/1000}K%0A`;
  text+=`🧾 *Kode Order:* ${code}%0A`;
  text+=`%0A━━━━━━━━━━━━━━━━━━━%0A`;
  text+=`⚡ Mohon diproses secepatnya ya kak 🙏%0A`;
  text+=`Terima kasih 💎`;

  window.location.href="https://wa.me/6283143490913?text="+text;
}

}

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* INIT */
render();
updateCart();
