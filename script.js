let cart=[];

/* SOUND */
const s=new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");

/* FX */
function fx(){
  try{s.currentTime=0;s.play();}catch(e){}
  if(navigator.vibrate) navigator.vibrate(40);

  let f=document.getElementById("fx");
  f.classList.add("show");
  setTimeout(()=>f.classList.remove("show"),300);
}

/* NAV */
function nav(id,el){
  fx();
  document.querySelectorAll(".page").forEach(p=>p.style.display="none");
  let pg=document.getElementById(id);
  if(pg) pg.style.display="block";
}

/* RENDER */
function render(){
  let p=document.getElementById("panel-list");
  let f=document.getElementById("followers-list");

  if(p){
    p.innerHTML="";
    panel.forEach(i=>p.innerHTML+=item(i));
  }

  if(f){
    f.innerHTML="";
    followers.forEach(i=>f.innerHTML+=item(i));
  }
}

function item(i){
  return `
  <div class="product" onclick="fx()">
    ${i.n}<br>
    Rp${i.p/1000}K<br>
    <button onclick="event.stopPropagation();add('${i.n}',${i.p})">Order</button>
  </div>`;
}

/* CART */
function add(n,p){
  fx();
  cart.push({n,p});
}

function clearCart(){
  cart=[];
}

/* WA */
function orderWA(){
  fx();
  if(cart.length==0)return alert("Kosong");

  let kode="V1P-"+Math.floor(Math.random()*999999);

  let txt="ORDER V1PEDIASTORE%0A";
  cart.forEach((i,x)=>txt+=`${x+1}. ${i.n}%0A`);

  txt+="Kode:"+kode;

  location.href="https://wa.me/6283143490913?text="+txt;
}

/* LOADING BAR */
let w=0;
let int=setInterval(()=>{
  w+=5;
  document.getElementById("barFill").style.width=w+"%";
  if(w>=100){
    clearInterval(int);
    document.getElementById("loading").style.display="none";
  }
},50);

/* PARTICLE BG */
let c=document.getElementById("bg");
let ctx=c.getContext("2d");

c.width=innerWidth;
c.height=innerHeight;

let dots=[];
for(let i=0;i<50;i++){
  dots.push({x:Math.random()*c.width,y:Math.random()*c.height});
}

function draw(){
  ctx.clearRect(0,0,c.width,c.height);
  dots.forEach(d=>{
    d.y+=0.5;
    if(d.y>c.height)d.y=0;
    ctx.fillStyle="#0ff";
    ctx.fillRect(d.x,d.y,2,2);
  });
  requestAnimationFrame(draw);
}
draw();

/* INIT */
render();
