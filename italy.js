function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

const italy = ScrollReveal({
    distance: '80px', 
    duration: 3100,
    
});
italy.reveal('#italytext-1, #italyimg-1, #prirodaid',{
    origin: 'top',
    interval: 150,
});

const istorya = ScrollReveal({
  distance: '100px', 
  duration: 3800,
  
});
istorya.reveal('#storya',{
  origin: 'left',
  interval: 300,
});


const gorod = ScrollReveal({
  distance: '100px', 
  duration: 3100,
  
});
istorya.reveal('#gorodimgid',{
  origin: 'left',
  interval: 150,
});

const gory = ScrollReveal({
  distance: '70px', 
  duration: 3100,
  
});
gory.reveal('#goryimgid1',{
  origin: 'left',
  interval: 150,
});
gory.reveal('#goryimgid3',{
  origin: 'right',
  interval: 150,
});

const gory1 = ScrollReveal({
  distance: '70px', 
  duration: 4800,
  
});
gory1.reveal('#goryimgid2',{
  origin: 'bottom',
  interval: 150,
});



const muzei = ScrollReveal({
  distance: '70px', 
  duration: 2700,
  
});
muzei.reveal('#muzei-container,#mezeiphoto4-container',{
  origin: 'left',
  interval: 100,
});
muzei.reveal('#muzei1-container,#muzei4-container',{
  origin: 'right',
  interval: 100,
});



const muzei1 = ScrollReveal({
  distance: '70px', 
  duration: 4500,
  
});
muzei1.reveal('#mezeiphoto-container,#mezeiphoto3-container',{
  origin: 'right',
  interval: 100,
});
muzei1.reveal('#mezeiphoto1-container,#muzei3-container',{
  origin: 'left',
  interval: 100,
});