let selected = "";

/* PANEL BOT */
function showPanel(){
  document.getElementById("followers").style.display="none";

  let html = "";
  for(let i=1;i<=10;i++){
    let harga = i*2000;
    html += `
    <div class="item">
      <div>RAM ${i}GB</div>
      <div>Rp ${harga.toLocaleString()}</div>
      <button class="order" onclick="order('Panel Bot RAM ${i}GB - Rp ${harga}')">Order</button>
    </div>`;
  }

  let el = document.getElementById("panel");
  el.innerHTML = html;
  el.style.display="block";
}

/* FOLLOWERS */
function showFollowers(){
  document.getElementById("panel").style.display="none";

  let html = "";
  for(let i=1;i<=10;i++){
    let jumlah = i*1000;
    let harga = i*45000;

    html += `
    <div class="item">
      <div>${jumlah} Followers</div>
      <div>Rp ${harga.toLocaleString()}</div>
      <button class="order" onclick="order('Followers ${jumlah} - Rp ${harga}')">Order</button>
    </div>`;
  }

  let el = document.getElementById("followers");
  el.innerHTML = html;
  el.style.display="block";
}

/* ORDER */
function order(item){
  selected = item;
  alert("Dipilih: " + item);
}

/* WHATSAPP */
function openWA(){
  if(selected==""){
    alert("Pilih layanan dulu!");
    return;
  }

  let kode = Math.floor(Math.random()*99999);

  let pesan = `Halo saya mau order:
${selected}
Kode Order: ${kode}`;

  let nomor = "628XXXXXXXXXX"; // GANTI NOMOR

  window.location.href =
  `https://wa.me/${nomor}?text=` + encodeURIComponent(pesan);
}
