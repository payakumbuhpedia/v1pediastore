*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:sans-serif;
}

body{
  background:#f5f6fa;
  padding-bottom:90px;
}

/* LOADING */
#loading{
  position:fixed;
  width:100%;
  height:100%;
  background:linear-gradient(135deg,#5f8bff,#7aa6ff);
  display:flex;
  justify-content:center;
  align-items:center;
  color:#fff;
  font-size:22px;
  z-index:9999;
}

/* HEADER */
.header{
  background:linear-gradient(135deg,#5f8bff,#7aa6ff);
  color:#fff;
  text-align:center;
  padding:40px 20px 100px;
  border-radius:0 0 40px 40px;
}

/* CARD */
.card{
  background:#fff;
  margin:15px;
  padding:15px;
  border-radius:20px;
  box-shadow:0 8px 20px rgba(0,0,0,.08);
}

/* STATS */
.stats{
  display:flex;
  text-align:center;
}
.stats div{flex:1;}
.stats b{
  display:block;
  font-size:18px;
}

/* PRODUCT */
.product{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:10px 15px;
  padding:12px;
  background:#fff;
  border-radius:15px;
}

.btn{
  background:#5f8bff;
  color:#fff;
  border:none;
  padding:10px 15px;
  border-radius:12px;
}

/* NAVBAR */
.navbar{
  position:fixed;
  bottom:0;
  width:100%;
  display:flex;
  justify-content:space-around;
  background:#fff;
  padding:10px;
  border-top:1px solid #ddd;
  z-index:1000;
}

.navbar div{
  text-align:center;
  font-size:14px;
}

/* ACTIVE */
.active-nav{
  color:#5f8bff;
  font-weight:bold;
}

/* BADGE */
.badge{
  position:absolute;
  top:-5px;
  right:20px;
  background:red;
  color:#fff;
  font-size:10px;
  padding:2px 6px;
  border-radius:50%;
}

/* PAGE */
.page{
  display:none;
}
.page.active{
  display:block;
}

/* POPUP */
.popup{
  position:fixed;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%) scale(0);
  background:#fff;
  padding:20px;
  border-radius:20px;
}
.popup.active{
  transform:translate(-50%,-50%) scale(1);
}

/* PROFILE */
.profile p{
  margin:8px 0;
}
