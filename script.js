let cart=[];

/* LOADING */
window.onload=()=>{
  setTimeout(()=>{
    document.getElementById("loading").style.display="none";
  },1200);
}

/* NAV */
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  clickFX();
}

/* EFFECT */
function clickFX(){
  navigator.vibrate(50);
}

/* MENU */
function openPanel(){showPage("panelPage")}
function openFollowers(){showPage("followersPage")}

/* CART */
function addToCart(name,price){
  cart.push({name,price});
  updateCart();
}

function updateCart(){
  let list=document.getElementById("cartList");
  let total=0;
  list.innerHTML="";

  cart.forEach(i=>{
    total+=i.price;
    list.innerHTML+=`<div>${i.name} - Rp${i.price}</div>`;
  });

  document.getElementById("total").innerText="Total: Rp"+total;
  document.getElementById("badge").innerText=cart.length;
}

/* CLEAR */
function clearCart(){
  cart=[];
  updateCart();
}

/* ORDER WA PRO */
function orderWA(){
  if(cart.length==0)return alert("Keranjang kosong");

  let kode="V1P-"+Math.floor(Math.random()*9999);

  let text=`Halo Admin V1PEDIASTORE%0A`;
  text+=`Saya ingin order:%0A`;

  cart.forEach(i=>{
    text+=`- ${i.name} Rp${i.price}%0A`;
  });

  text+=`Kode Order: ${kode}`;

  window.location.href=`https://wa.me/6283143490913?text=${text}`;
}

/* LINK */
function openWA(){
  window.location.href="https://wa.me/6283143490913";
}

/* DARK */
function toggleDark(){
  document.body.classList.toggle("dark");
}
