let cart = [];
let selected = null;

/* PANEL */
function showPanel(){
  let html="";
  panelList.forEach(p=>{
    html += `
    <div class="item">
      <div>${p.nama}</div>
      <div>Rp ${p.harga}</div>
      <button onclick="addCart('${p.nama}',${p.harga})">Order</button>
    </div>`;
  });
  document.getElementById("list").innerHTML = html;
}

/* FOLLOWERS */
function showFollowers(){
  let html="";
  followersList.forEach(f=>{
    html += `
    <div class="item">
      <div>${f.nama}</div>
      <div>Rp ${f.harga}</div>
      <button onclick="addCart('${f.nama}',${f.harga})">Order</button>
    </div>`;
  });
  document.getElementById("list").innerHTML = html;
}

/* TAMBAH CART */
function addCart(nama,harga){
  cart.push({nama,harga});
  showCart();
}

/* SHOW CART */
function showCart(){
  let el = document.getElementById("cartPopup");
  let items = document.getElementById("cartItems");

  el.style.display="block";

  let html="";
  cart.forEach((c,i)=>{
    html += `
    <div style="display:flex; justify-content:space-between;">
      <span>${c.nama}</span>
      <button onclick="hapus(${i})">❌</button>
    </div>`;
  });

  items.innerHTML = html;
}

/* HAPUS */
function hapus(i){
  cart.splice(i,1);
  showCart();
}

/* CHECKOUT */
function checkout(){
  if(cart.length===0){
    alert("Keranjang kosong");
    return;
  }

  let text="Halo saya mau order:%0A";
  cart.forEach(c=>{
    text += "- "+c.nama+"%0A";
  });

  let kode="INV"+Math.floor(Math.random()*999999);

  let nomor="6283143490913"; // GANTI

  window.location.href=
  "https://api.whatsapp.com/send?phone="+nomor+"&text="+text+"Kode:"+kode;
}

/* WA LANGSUNG */
function openWA(){
  checkout();
}

/* LIVE ORDER */
setInterval(()=>{
  let nama=["Andi","Budi","Rizky","Dika"];
  let layanan=["Panel 2GB","Followers 1K"];

  let n=nama[Math.floor(Math.random()*nama.length)];
  let l=layanan[Math.floor(Math.random()*layanan.length)];
z
  document.getElementById("liveOrder").innerText =
  n+" baru saja order "+l;
},3000);
