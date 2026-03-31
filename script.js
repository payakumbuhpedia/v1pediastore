let cart = [];
let audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");

/* TAB */
function openTab(tab){
  clickSound();
  document.querySelectorAll(".tab").forEach(e=>e.classList.remove("active"));
  document.getElementById(tab).classList.add("active");
}

/* MENU */
function showMenu(type){
  clickSound();
  document.getElementById("panel-list").style.display = type==="panel"?"block":"none";
  document.getElementById("ig-list").style.display = type==="ig"?"block":"none";
}

/* RENDER */
function render(){
  let p = document.getElementById("panel-list");
  let ig = document.getElementById("ig-list");

  p.innerHTML="";
  ig.innerHTML="";

  panel.forEach(item=>{
    p.innerHTML+=`
    <div class="card">
      <div>${item.nama}<br>${item.harga}</div>
      <button onclick="addCart('${item.nama}','${item.harga}')" class="btn">Order</button>
    </div>`;
  });

  followers.forEach(item=>{
    ig.innerHTML+=`
    <div class="card">
      <div>${item.nama}<br>${item.harga}</div>
      <button onclick="addCart('${item.nama}','${item.harga}')" class="btn">Order</button>
    </div>`;
  });
}

/* ADD CART */
function addCart(nama,harga){
  clickSound();
  cart.push({nama,harga});
  showToast("✅ Ditambahkan ke keranjang");
  updateCart();
}

/* UPDATE CART */
function updateCart(){
  let list=document.getElementById("cart-list");
  let total=0;
  list.innerHTML="";

  cart.forEach(item=>{
    list.innerHTML+=`<p>${item.nama} - ${item.harga}</p>`;
    total+=parseInt(item.harga.replace("Rp","").replace("K","000"));
  });

  document.getElementById("total").innerText="Total: Rp"+total;
}

/* CLEAR */
function clearCart(){
  clickSound();
  cart=[];
  updateCart();
}

/* WA ORDER */
function orderWA(){
  clickSound();
  let text="Halo Admin V1PediaStore 👋%0A";
  text+="Saya ingin order:%0A";

  cart.forEach(i=>{
    text+=`• ${i.nama} (${i.harga})%0A`;
  });

  text+="%0ATerima kasih 🙏";

  window.location.href="https://wa.me/6283143490913?text="+text;
}

/* SOUND */
function clickSound(){
  audio.currentTime=0;
  audio.play();
}

/* TOAST */
function showToast(msg){
  let t=document.createElement("div");
  t.className="toast";
  t.innerText=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),2000);
}

/* LIVE ORDER */
function liveOrder(){
  let names=["Andi","Budi","Rizky","Dika","Fajar"];
  let item=panel[Math.floor(Math.random()*panel.length)];

  let notif=document.createElement("div");
  notif.className="live-order";
  notif.innerText=`${names[Math.floor(Math.random()*names.length)]} baru saja order ${item.nama}`;

  document.body.appendChild(notif);
  setTimeout(()=>notif.remove(),3000);
}

/* AUTO LIVE */
setInterval(liveOrder,8000);

/* DARK MODE */
function toggleDark(){
  document.body.classList.toggle("dark");
}

/* LOAD */
render();
