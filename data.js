const panel=[
  {n:"RAM 1GB",p:2000},
  {n:"RAM 2GB",p:4000},
  {n:"RAM 3GB",p:6000},
  {n:"RAM 4GB",p:8000},
  {n:"RAM 5GB",p:10000},
  {n:"RAM 6GB",p:12000},
  {n:"RAM 7GB",p:14000},
  {n:"RAM 8GB",p:16000},
  {n:"RAM 9GB",p:18000},
  {n:"RAM 10GB",p:20000}
];

const followers=[
  {n:"1000 Followers",p:45000},
  {n:"2000 Followers",p:90000},
  {n:"3000 Followers",p:135000},
  {n:"4000 Followers",p:180000},
  {n:"5000 Followers",p:225000},
  {n:"10000 Followers",p:450000}
];

/* RENDER PANEL */
const panelList=document.getElementById("panel-list");
panel.forEach(i=>{
  panelList.innerHTML+=`
  <div class="card">
    <b>${i.n}</b><br>
    Rp${i.p}
    <button class="btn" onclick="addToCart('${i.n}',${i.p})">Order</button>
  </div>`;
});

/* RENDER FOLLOWERS */
const followersList=document.getElementById("followers-list");
followers.forEach(i=>{
  followersList.innerHTML+=`
  <div class="card">
    <b>${i.n}</b><br>
    Rp${i.p}
    <button class="btn" onclick="addToCart('${i.n}',${i.p})">Order</button>
  </div>`;
});
