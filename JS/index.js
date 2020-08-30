//To close|open Menu 
function closeFn() {
    var x = document.getElementById("menuBar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  //Open register Box
  function openRegisterBox(){
    let registerBox = document.getElementsByClassName("register-box")[0];
    registerBox.style.display = "block";
  }

    //Close register Box
  function closeRegisterBox(){
    let registerBox = document.getElementsByClassName("register-box")[0];
    registerBox.style.display = "none";
  } 
  //Close Login box
  function closeLoginBox(){
    let loginBox = document.getElementsByClassName("login-box")[0];
    loginBox.style.display = "none";
  }
  //Open Login box
  function openLoginBox(){
    let loginBox = document.getElementsByClassName("login-box")[0];
    loginBox.style.display = "block";
  }

  function openLoginBoxFromRegisBox(){
    openLoginBox();
    closeRegisterBox();
  }

  function openRegisBoxFromLoginBox(){
    closeLoginBox();
    openRegisterBox()
  }