// SOUND KLIK
document.querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-3.mp3");
    audio.play();
  });
});

// FAKE NOTIF
setInterval(()=>{
  const notif = document.createElement("div");
  notif.innerText = "User baru order 🔥";
  notif.style.position = "fixed";
  notif.style.bottom = "120px";
  notif.style.left = "20px";
  notif.style.background = "#111";
  notif.style.padding = "10px";
  notif.style.borderRadius = "10px";
  document.body.appendChild(notif);

  setTimeout(()=>notif.remove(),3000);
},6000);
