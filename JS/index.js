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
//Open Login box from Register box
  function openLoginBoxFromRegisBox(){
    openLoginBox();
    closeRegisterBox();
  }
//Open Registor box from Login box
  function openRegisBoxFromLoginBox(){
    closeLoginBox();
    openRegisterBox()
  }

  let product = [
    {
      name: "Archos A9 PCtablet",
      tag: "Archos",
      price: 250,
      inCart: 0
    },
    {
      name: "HP Compaq Mini 5103",
      tag: "HP",
      price: 500,
      inCart: 0
    },
    {
      name: "Monoblock MSI Wind Top AP1920 Black",
      tag: "MSI Wind",
      price: 350,
      inCart: 0
    },
    {
      name: "HP Compaq Mini 5103",
      tag: "HP",
      price: 400,
      inCart: 0
    },
    {
      name: "Apple iMac with Retina 5K Display",
      tag: "Apple",
      price: 2500,
      inCart: 0
    },
    {
      name: "New Apple iMac Pro",
      tag: "Apple",
      price: 499.99,
      inCart: 0
    },
    {
      name: "Microsoft Surface Studio 2",
      tag: "Microsoft",
      price: 3500,
      inCart: 0
    },
    // Laptops page 2 products
    {
      name: "Samsung 300V5A-S0L Orange",
      tag: "Samsung",
      price: 400,
      inCart: 0
    },
    {
      name: "Samsung Galaxy Tab-P7500 16Gb",
      tag: "Samsung",
      price: 430,
      inCart: 0
    },
    {
      name: "Sony Vaio J11M1RB Black",
      tag: "Sony",
      price: 700,
      inCart: 0
    },
    {
      name: "Lenovo IdeaPad U165 K1252G250S-B",
      tag: "Lenovo",
      price: 250,
      inCart: 0
    },
    // Phone page products
    {
      name: "HTC A6380 Gratia Green",
      tag: "HTC",
      price: 500,
      inCart: 0
    },
    {
      name: "Apple iPhone 4 32Gb White",
      tag: "Apple",
      price: 510,
      inCart: 0
    },
    {
      name: "Acer Liquid E Ferrari S100",
      tag: "Acer",
      price: 120,
      inCart: 0
    },
    {
      name: "Samsung S5233t Red",
      tag: "Samsung",
      price: 100,
      inCart: 0
    }
  ]
  
var carts = document.querySelectorAll('#add-to-basket');

for(i= 0; i < carts.length; i++){
  carts[i].addEventListener('click', ()=>cartNumbers(product[i])
  )}

  function onLoadCartNumbers(){
    let productNumber = localStorage.getItem('cartNumbers');
    if(productNumber){
      document.querySelector('#shopping-cart-counter').textContent = productNumber;
    }
  }
  function cartNumbers(product) {
    alert(product);
    let productNumber = localStorage.getItem('cartNumbers');
    productNumber = parseInt(productNumber);
    if (productNumber){
      localStorage.setItem('cartNumbers', productNumber + 1);
      document.querySelector('#shopping-cart-counter').textContent = productNumber + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#shopping-cart-counter').textContent = 1;
      }
    }
onLoadCartNumbers();