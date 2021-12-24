var i = 0;
var txt = 'Объединенные Арабские Эмираты (ОАЭ) – государство на Аравийском полуострове вдоль южного побережья Персидского залива, состоящее из семи эмиратов. Столица страны Абу-Даби, расположенная на прибрежном острове, славится Большой мечетью шейха Зайда, которая вмещает более 40 тысяч верующих и освещается хрустальными люстрами. В Дубае туристов привлекают самый высокий в мире небоскреб Бурдж-Халифа, огромные торговые центры и развлекательные заведения в самобытном стиле.';
var speed = 40;

function typeWriter(){
    if(i < txt.length){
        document.getElementById("p").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    
}

var j=0;
var text = 'Дуба́й — крупнейший город в Объединённых Арабских Эмиратах и глубоководный морской порт, административный центр эмирата Дубай, важнейший торговый и финансовый центр ОАЭ и всего Ближнего Востока. Расположен на берегу Персидского залива. В период 1954—1971 г. являлся административным центром британского протектората Договорный Оман. В Дубае проводятся разнообразные международные конференции, фестивали, выставки и т.п. С 1 октября 2021 года по 31 марта 2022 года в Дубае проводится всемирная выставка Экспо-2020.';
var time = 20;
function DtypeWriter(){
    if(j < text.length){
        document.getElementById("dp").innerHTML += text.charAt(j);
        j++;
        setTimeout(DtypeWriter, time);
    }
    
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  let target = button.querySelector('.target');
  function handleMove(e) {
    const x = -50 + (e.pageX - button.offsetLeft - 300 / 2) / 3;
    const y = -10 + (e.pageY - button.offsetTop - 100 / 2) / 3;

    target.style.setProperty('--x', `${ x }px`)
    target.style.setProperty('--y', `${ y }px`)
  }
  button.addEventListener('mousemove', (e) => {
    handleMove(e);
  });
  button.addEventListener('touchmove', (e) => {
    handleMove(e.changedTouches[0]);
  });
});

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("buttons");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if ( 700 > sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
