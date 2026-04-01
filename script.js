// =====================
// NAVIGATION FIX FULL
// =====================
function nav(page) {
  document.querySelectorAll('.page').forEach(p => {
    p.style.display = 'none';
    p.classList.remove('active');
  });

  const target = document.getElementById(page);
  if (target) {
    target.style.display = 'block';
    target.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// default load
window.onload = () => {
  nav('home');
  renderCart();
  animateStats();
};

// =====================
// DATA LOAD FIX
// =====================
function openPanel() {
  renderList(panelData);
}

function openFollowers() {
  renderList(followerData);
}

// =====================
// RENDER PRODUK
// =====================
function renderList(data) {
  const container = document.getElementById("panel-list");
  container.innerHTML = "";

  data.forEach(item => {
    container.innerHTML += `
      <div class="product fade-in">
        <div>
          <b>${item.nama}</b><br>
          Rp${item.harga}
        </div>
        <button onclick="addToCart('${item.nama}', ${item.harga})">Order</button>
      </div>
    `;
  });

  // anim scroll
  container.scrollIntoView({ behavior: "smooth" });
}

// =====================
// CART SYSTEM
// =====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(nama, harga) {
  cart.push({ nama, harga });
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  clickEffect();
}

function renderCart() {
  const list = document.getElementById("cartList");
  const total = document.getElementById("total");

  if (!list) return;

  list.innerHTML = "";
  let sum = 0;

  cart.forEach((item, i) => {
    sum += item.harga;
    list.innerHTML += `
      <div class="product fade-in">
        ${item.nama} - Rp${item.harga}
      </div>
    `;
  });

  total.innerText = "Total: Rp" + sum;
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  renderCart();
}

// =====================
// WHATSAPP ORDER FIX
// =====================
function orderWA() {
  if (cart.length === 0) return alert("Keranjang kosong!");

  let text = `🛒 *ORDER V1PEDIASTORE*\n\n`;

  cart.forEach(item => {
    text += `• ${item.nama} - Rp${item.harga}\n`;
  });

  const kode = "INV" + Math.floor(Math.random() * 99999);

  text += `\nKode Order: ${kode}`;
  text += `\n\nNama:\nAlamat:\nCatatan:\n`;

  const url = `https://wa.me/6283143490913?text=${encodeURIComponent(text)}`;
  window.open(url);
}

// =====================
// ANIMASI STATS
// =====================
function animateStats() {
  const stats = document.querySelectorAll('.stats div');

  stats.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";

    setTimeout(() => {
      el.style.transition = "0.6s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 200);
  });
}

// =====================
// CLICK EFFECT UI DEWA
// =====================
function clickEffect() {
  const ripple = document.createElement("div");
  ripple.style.position = "fixed";
  ripple.style.width = "10px";
  ripple.style.height = "10px";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(255,255,255,0.6)";
  ripple.style.left = "50%";
  ripple.style.top = "50%";
  ripple.style.zIndex = "9999";
  ripple.style.transform = "translate(-50%, -50%)";
  ripple.style.animation = "ripple 0.6s ease-out";

  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
}

// =====================
// AUTO FIX BUTTON CLICK
// =====================
document.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON" || e.target.classList.contains("card")) {
    clickEffect();
  }
});
