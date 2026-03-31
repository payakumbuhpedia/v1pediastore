let cart = [];

/* LOAD DATA KE HOME */
function loadData(){
  let panelHTML = "";
  panelList.forEach(p=>{
    panelHTML += `
    <div class="item">
      <div>
        <b>${p.nama}</b><br>
        <small>Rp${p.harga}</small>
      </div>
      <button onclick="addCart('${p.nama}', ${p.harga})">Order</button>
    </div>`;
  });
  document.getElementById("panelList").innerHTML = panelHTML;

  let followHTML = "";
  followersList.forEach(f=>{
    followHTML += `
    <div class="item">
      <div>
        <b>${f.nama}</b><br>
        <small>Rp${f.harga}</small>
      </div>
      <button onclick="addCart('${f.nama}', ${f.harga})">Order</button>
    </div>`;
  });
  document.getElementById("followersList").innerHTML = followHTML;
}

/* TAMBAH KE KERANJANG */
function addCart(nama, harga){
  cart.push({nama, harga});
  updateCart();
  alert("✔ Ditambahkan ke keranjang");
}

/* UPDATE TAMPILAN KERANJANG */
function updateCart(){
  let el = document.getElementById("cartItems");
  let total = 0;
  let html = "";

  cart.forEach((c, i)=>{
    total += c.harga;
    html += `
      <div style="margin-bottom:8px">
        ${c.nama} - Rp${c.harga}
        <button onclick="hapusItem(${i})" style="margin-left:8px">❌</button>
      </div>
    `;
  });

  html += `<hr><b>Total: Rp${total}</b>`;
  el.innerHTML = html;
}

/* HAPUS ITEM */
function hapusItem(index){
  cart.splice(index, 1);
  updateCart();
}

/* CHECKOUT KE WHATSAPP (ANTI WIFI BUG) */
function checkout(){
  if(cart.length === 0){
    alert("Keranjang kosong");
    return;
  }

  let id = "ORD" + Math.floor(Math.random()*999999);
  let total = 0;

  let text = "Halo Admin V1 PEDIA STORE\n";
  text += "Kode Order: " + id + "\n";
  text += "----------------------\n";

  cart.forEach(c=>{
    text += c.nama + " - Rp" + c.harga + "\n";
    total += c.harga;
  });

  text += "----------------------\n";
  text += "Total: Rp" + total + "\n\n";
  text += "Nama:\nUsername/Link:\n";

  let url = "https://api.whatsapp.com/send?phone=6283143490913&text=" + encodeURIComponent(text);

  /* 🔥 WA FIX PALING STABIL */
  window.open(url, "_blank");
}

/* NAVIGASI */
function showPage(page){
  document.getElementById("homePage").style.display = "none";
  document.getElementById("cartPage").style.display = "none";
  document.getElementById("profilePage").style.display = "none";

  document.getElementById(page).style.display = "block";
}

/* INIT */
loadData();
showPage("homePage");
