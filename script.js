
const sr = ScrollReveal({
    distance: '50px', 
    duration: 3100,
    
});
sr.reveal('#texta',{
    origin: 'left',
    interval: 100,
});
sr.reveal('#image',{
    origin: 'right',
    interval: 150,
});
const bar = ScrollReveal({
    distance: '170px', 
    duration: 3100,
    
});
bar.reveal('#cont',{
    origin: 'left',
    interval: 150,
});
bar.reveal('#cont2',{
    origin: 'right',
    interval: 150,
});
bar.reveal('#imgbarca-1',{
    origin: 'top',
    interval: 150,
});
bar.reveal('#textbar',{
    origin: 'right',
    interval: 150,
});
const val = ScrollReveal({
    distance: '170px', 
    duration: 3100,
    
});
val.reveal('#imgvalensiya',{
    origin: 'left',
    interval: 150,
});



window.addEventListener('scroll',()=>{
    let content = document.querySelector('.madrid');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight /1.7;
    if(contentPosition < screenPosition){
      content.classList.add('active');  
  
    }else{
        content.classList.remove('active');
    }
    
      
});




var i = 0;
var txt = 'Это самый испанский город, который нравится всем, но не сразу. На первый взгляд здесь нет ничего великого и узнаваемого. Ни музея Сальвадора Дали, ни Собора Cвятого Cемейства. Даже знаменитый музей Прадо находится в здании большом, но неприметном. Красивые каменные дома в классическом стиле, брусчатка в переулках, однообразные площади, фонтаны, памятники… От Мадрида ничего не ждут чего-то особенного, поэтому город никогда не разочаровывает.'; /* The text */
var speed = 50;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("textm").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    
}


