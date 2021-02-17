// //slider
// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(x) {

//   showSlides(slideIndex += x);
// }


// function showSlides(x) {
//   var i;
//   var slides = document.getElementsByClassName("ImageSlide"); //T
//   if (x > slides.length) {
//     slideIndex = 1
//   }
//   if (x < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   // display
//   slides[slideIndex - 1].style.display = "block";



//   //slide image car reservation
//   var myIndex = 0;
//   carousel();

//   function carousel() {
//     var i;
//     var x = document.getElementsByClassName("slid");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) {
//       myIndex = 1
//     }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 2500);
//   }
// }

// prompt contact us page
function MessageChannelbox() {
  var a = document.getElementById('name').value
  var b = document.getElementById('mail').value
  var c = document.getElementById('subj').value
  alert("Thank you Mr/Mrs " + a + " for your message." + "\nEmail: " + b + "\nsubject: " + c);
}

// Function to compelete reservation

function myFunction() {
  var x = document.getElementById("cars").value;
  if(x == "moto"){
    document.getElementById("cars2").innerHTML =
    "<option value='electrical'>Electrical</option>" +
    "<option value='essence'>Essence</option>";
  }
  if(x == "citadine"){
    document.getElementById("cars2").innerHTML =
    "<option value='essence'>Essence</option>" +
    "<option value='diesel'>Diesel</option>" +
    "<option value='electrical'>Electrical</option>" +
    "<option value='hybride'>Hybride</option>" ;
  }
  if(x == "compact"){
    document.getElementById("cars2").innerHTML =
    "<option value='essence'>Essence</option>" +
    "<option value='diesel'>Diesel</option>" + 
    "<option value='hybride'>Hybride</option>";
  }
  if(x == "berlin"){
    document.getElementById("cars2").innerHTML =
    "<option value='essence'>Essence</option>" +
    "<option value='diesel'>Diesel</option>" + 
    "<option value='hybride'>Hybride</option>";
  }
  if(x == "utilitaire"){
    document.getElementById("cars2").innerHTML =
    "<option value='diesel'>Diesel</option>";  
  }
  if(x == "engin"){
    document.getElementById("cars2").innerHTML =
    "<option value='essence'>Essence</option>" +
    "<option value='diesel'>Diesel</option>";
  }
  if(x == "camion"){
    document.getElementById("cars2").innerHTML =
    "<option value='diesel'>Diesel</option>";
  }

var x2 = document.getElementById("cars2").value;
if(x == "berlin" && x2 || x == "camion" && x2){
    document.getElementById("cars3").innerHTML =
    "<option value='auto'>Automatic</option>" + 
    "<option value='manual'>Manual</option>";
  } else {
    document.getElementById("cars3").innerHTML = 
    "<option value='manual'>Manual</option>";
  }
}


// reservation algorithm :)) 

function reservation() {
  var som = 0;
  const i = document.getElementById('days').value
  var dd = document.getElementById('cars').value
  var dd3 = document.getElementById('cars3').value
  var dd2 = document.getElementById('cars2').value


  switch (dd) {
    case "moto":
      som += 10;
      break;
    case "citadine":
      som += 12;
      break;
    case "compact":
      som += 14;
      break;
    case "berlin":
      som += 20;
      break;
    case "utilitaire":
      som += 16;
      break;
    case "engin":
      som += 900;
      break;
    case "camion":
      som += 250;
      break;
  }
  switch(dd2) {
    case "electrical":
      som += 0.05;
      break;
    case "hybride":
      som += 0.09;
      break;
    case "essence":
      som += 0.14;
      break;
    case "diesel":
      som += 0.21;
      break;
  }
  switch(dd3) {
    case "manual":
      som += 0;
      break;
    case "auto":
      som += 0.19;
      break;
  }
  if (i < 0) {
    alert("Please enter a valid number greater than or equal to 1.");
  }
  else {
    som = som * i;
    alert("Thank you for your purchase\n" +  
    "The bill: "+ som + "\$");
  }
}
