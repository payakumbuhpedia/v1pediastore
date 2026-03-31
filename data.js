/* ================= PANEL BOT WA ================= */
const panel = [
  {n:"Panel Bot WA RAM 1GB (PT Roda Actli)", p:2000},
  {n:"Panel Bot WA RAM 2GB (PT Roda Actli)", p:4000},
  {n:"Panel Bot WA RAM 3GB (PT Roda Actli)", p:6000},
  {n:"Panel Bot WA RAM 4GB (PT Roda Actli)", p:8000},
  {n:"Panel Bot WA RAM 5GB (PT Roda Actli)", p:10000},
  {n:"Panel Bot WA RAM 6GB (PT Roda Actli)", p:12000},
  {n:"Panel Bot WA RAM 7GB (PT Roda Actli)", p:14000},
  {n:"Panel Bot WA RAM 8GB (PT Roda Actli)", p:16000},
  {n:"Panel Bot WA RAM 9GB (PT Roda Actli)", p:18000},
  {n:"Panel Bot WA RAM 10GB (PT Roda Actli)", p:20000}
];

/* ================= FOLLOWERS IG ================= */
const followers = [
  {n:"Followers Instagram Indonesia 1000", p:45000},
  {n:"Followers Instagram Indonesia 2000", p:90000},
  {n:"Followers Instagram Indonesia 3000", p:135000},
  {n:"Followers Instagram Indonesia 4000", p:180000},
  {n:"Followers Instagram Indonesia 5000", p:225000},
  {n:"Followers Instagram Indonesia 6000", p:270000},
  {n:"Followers Instagram Indonesia 7000", p:315000},
  {n:"Followers Instagram Indonesia 8000", p:360000},
  {n:"Followers Instagram Indonesia 9000", p:405000},
  {n:"Followers Instagram Indonesia 10000", p:450000}
];

/* ================= AUTO RENDER ================= */
const panelList = document.getElementById("panel-list");
const followersList = document.getElementById("followers-list");

/* RENDER PANEL */
if(panelList){
  panel.forEach(i=>{
    panelList.innerHTML += `
      <div class="product">
        <div>
          <b>${i.n}</b><br>
          Rp${i.p/1000}K
        </div>
        <button class="btn" onclick="add('${i.n}',${i.p})">Order</button>
      </div>
    `;
  });
}

/* RENDER FOLLOWERS */
if(followersList){
  followers.forEach(i=>{
    followersList.innerHTML += `
      <div class="product">
        <div>
          <b>${i.n}</b><br>
          Rp${i.p/1000}K
        </div>
        <button class="btn" onclick="add('${i.n}',${i.p})">Order</button>
      </div>
    `;
  });
}
