let cart = [];

/* 🔥 NAVIGATION */
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

/* 🔥 RENDER PANEL */
function openPanel(){
  const list = document.getElementById("panel-list");
  list.innerHTML = "";

  panel.forEach((item,i)=>{
    list.innerHTML += `
      <div class="product">
        <div>
          ${item.n}<br>
          Rp${item.h}
        </div>
        <button onclick="addCart('${item.n}',${item.h})">Order</button>
      </div>
    `;
  });

  document.getElementById("followers-list").innerHTML = "";
}

/* 🔥 RENDER FOLLOWERS */
function openFollowers(){
  const list = document.getElementById("followers-list");
  list.innerHTML = "";

  followers.forEach((item,i)=>{
    list.innerHTML += `
      <div class="product">
        <div>
          ${item.n}<br>
          Rp${item.h}
        </div>
        <button onclick="addCart('${item.n}',${item.h})">Order</button>
      </div>
    `;
  });

  document.getElementById("panel-list").innerHTML = "";
}

/* 🔥 TAMBAH KE KERANJANG */
function addCart(nama,harga){
  cart.push({nama,harga});
  updateCart();

  /* AUTO PINDAH KE KERANJANG */
  showPage("cart");
}

/* 🔥 UPDATE CART */
function updateCart(){
  const list = document.getElementById("cartList");
  const total = document.getElementById("total");

  list.innerHTML = "";
  let t = 0;

  cart.forEach((item,i)=>{
    t += item.harga;

    list.innerHTML += `
      <div class="product">
        <div>${item.nama}</div>
        <button onclick="removeCart(${i})">❌</button>
      </div>
    `;
  });

  total.innerText = "Total: Rp" + t;
}

/* 🔥 HAPUS ITEM */
function removeCart(i){
  cart.splice(i,1);
  updateCart();
}

/* 🔥 CLEAR */
function clearCart(){
  cart = [];
  updateCart();
}

/* 🔥 ORDER WA AUTO */
function orderWA(){
  if(cart.length === 0){
    alert("Keranjang kosong!");
    return;
  }

  let kode = "V1-" + Math.floor(1000 + Math.random()*9000);

  let text = `🛒 *ORDER V1PEDIASTORE*\n`;
  text += `📌 Kode: ${kode}\n\n`;

  cart.forEach((item,i)=>{
    text += `${i+1}. ${item.nama} - Rp${item.harga}\n`;
  });

  let total = cart.reduce((a,b)=>a+b.harga,0);

  text += `\n💰 Total: Rp${total}\n`;
  text += `⚡ Mohon diproses ya admin`;

  let url = "https://wa.me/6283143490913?text=" + encodeURIComponent(text);
  window.open(url,"_blank");
}
