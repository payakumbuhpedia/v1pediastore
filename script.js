function loadData(){

let panelHTML="";
panelList.forEach(p=>{
panelHTML+=`
<div class="item">
<div>
<b>${p.nama}</b><br>
<small>Rp${p.harga}</small>
</div>
<button onclick="addCart('${p.nama}',${p.harga})">Order</button>
</div>`;
});
document.getElementById("panelList").innerHTML=panelHTML;


let followHTML="";
followersList.forEach(f=>{
followHTML+=`
<div class="item">
<div>
<b>${f.nama}</b><br>
<small>Rp${f.harga}</small>
</div>
<button onclick="addCart('${f.nama}',${f.harga})">Order</button>
</div>`;
});
document.getElementById("followersList").innerHTML=followHTML;

}
