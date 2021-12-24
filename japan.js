// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("top");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function openModal() {
    document.getElementById("myModal1").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal1").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
   
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
  



 function change(element){
    $("#mikasa").animate({opacity: '0'}, "slow");
    $("#mikasa").animate({opacity: '0.5',left:"+=100px"}, "slow");
    $("#mikasa").animate({opacity: '0.8',left:"-=100px"}, "slow");
    $("#mikasa").animate({opacity: '0.8'}, "slow");
    $("#mikasa").animate({opacity: '1'}, "slow");
  
    $("#naruto2").animate({opacity: '0'},"slow");
    $("#naruto2").animate({opacity: '0.5',left:"+=100px"},"slow");
    $("#naruto2").animate({opacity: '0.8',left:"-=100px"},"slow");
    $("#naruto2").animate({opacity: '0.8'}, "slow");
    $("#naruto2").animate({opacity: '1'},"slow");

    $("#genos").animate({opacity: '0'},"slow");
    $("#genos").animate({opacity: '0.5',left:"+=100px"},"slow");
    $("#genos").animate({opacity: '0.8',left:"-=100px"},"slow");
    $("#genos").animate({opacity: '0.8'}, "slow");
    $("#genos").animate({opacity: '1'},"slow");
   
 }

 $(document).ready(function(){
    $("#ooo").click(function(){
      $(".anim").slideDown("slow");
    });
  });

//   $("#naruto3").animate({bottom: '1550px'});
  
 

