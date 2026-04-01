let cart = [];

// 🔥 NAVIGATION FIX
function nav(page){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });

  document.getElementById(page).classList.add("active");
}

// 🔥 FORMAT HARGA KE K
function formatHarga(h){
  if(h >= 1000){
    return "Rp" + (h/1000) + "K";
  }
  return "Rp" + h;
}

// 🔥 LOAD PANEL
function openPanel(){
  let el = document.getElementById("panel-list");
  el.innerHTML = "";

  panel.forEach((p,i)=>{
    el.innerHTML += `
    <div class="product">
      <div>
        ${p.n}<br>
        ${formatHarga(p.h)}
      </div>
      <button onclick="addCart('${p.n}',${p.h})">Order</button>
    </div>`;
  });

  document.getElementById("followers-list").innerHTML = "";
}

// 🔥 LOAD FOLLOWERS
function openFollowers(){
  let el = document.getElementById("followers-list");
  el.innerHTML = "";

  followers.forEach((f,i)=>{
    el.innerHTML += `
    <div class="product">
      <div>
        ${f.n}<br>
        ${formatHarga(f.h)}
      </div>
      <button onclick="addCart('${f.n}',${f.h})">Order</button>
    </div>`;
  });

  document.getElementById("panel-list").innerHTML = "";
}

// 🔥 TAMBAH KE CART
function addCart(n,h){
  cart.push({n,h});
  updateCart();
}

// 🔥 UPDATE CART
function updateCart(){
  let el = document.getElementById("cartList");
  let total = 0;

  el.innerHTML = "";

  cart.forEach(item=>{
    total += item.h;

    el.innerHTML += `
    <div class="product">
      ${item.n} - ${formatHarga(item.h)}
    </div>`;
  });

  document.getElementById("total").innerText = "Total: " + formatHarga(total);
}

// 🔥 CLEAR CART
function clearCart(){
  cart = [];
  updateCart();
}

// 🔥 ORDER WA
function orderWA(){
  if(cart.length === 0){
    alert("Keranjang kosong!");
    return;
  }

  let text = "Halo, saya ingin order:%0A";
  let total = 0;

  cart.forEach(item=>{
    text += "- " + item.n + " (" + formatHarga(item.h) + ")%0A";
    total += item.h;
  });

  text += "%0ATotal: " + formatHarga(total);

  window.open("https://wa.me/6283143490913?text=" + text);
}
