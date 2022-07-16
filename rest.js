// scroll tracker
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector(".scroll-tracker");
const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.px(150), CSS.percent(100)],
});
scrollTracker.animate(
    {
        transform: ['scaleX(0)', 'scaleX(1)'],
    },
    {
        duration: 1,
        timeline:scrollTrackingTimeline,
    }
);

// ikona menu bars na malym ekranie
const bars = document.querySelector('.bar-sign');
const xSign = document.querySelector('.fa-x');
const menuHeader = document.querySelector('.menu-header');
const opacityRest = document.querySelector('.opacity-rest');




//const navLinks = document.querySelectorAll('.nav__link');

const menuContent = document.querySelector('.menu-content');

// pierwszy level dropdown
const dropdown = document.querySelector('.dropdown');
const dropdown2 = document.querySelector('.dropdown2');
const dropdown3 = document.querySelector('.dropdown3');

//przyciski do pierwszego levelu dropdown'ow
const dropbtn = document.querySelector('.dropbtn');
const dropbtn2 = document.querySelector('.dropbtn2');
const dropbtn3 = document.querySelector('.dropbtn3');

//drugi levl dropdown
const dropdown_1 = document.querySelector('.dropdown_1');
const dropdown_2 = document.querySelector('.dropdown_2');

//przyciski do pierwszego levelu dropdown'ow
const dropbtn_1 = document.querySelector('.dropbtn_1');
const dropbtn_2 = document.querySelector('.dropbtn_2');

// OBRACANIE CHEVRONAMI
const chevron = document.querySelector('.rotate');
const chevron2 = document.querySelector('.rotate2');
const chevron3 = document.querySelector('.rotate3');
const chevron4 = document.querySelector('.rotate4');
const chevron5 = document.querySelector('.rotate5');
 

// klikanie w bars ikone menu
bars.addEventListener('click', () => {
    //menuContent.classList.add('display'); //klikniecie w bars dodaje display do menu content
    menuContent.classList.add('open-nav');    
    menuHeader.classList.add('opacity');  //opacity na header
    opacityRest.classList.add('opacity');  //opacity na body
    document.body.classList.add('overflow-freeze'); //zamrazamy overflow
    

  
    
});
xSign.addEventListener('click', () => {  
  //menuContent.classList.remove('display'); 
  menuContent.classList.remove('open-nav');
  menuHeader.classList.remove('opacity');  //opacity na element nizej usuwamy
  opacityRest.classList.remove('opacity');  //opacity na body
  document.body.classList.remove('overflow-freeze') // odmrazamy overflow na body;

  dropdown.classList.remove('display'); //usuwamy display z submenu
  dropdown2.classList.remove('display');
  dropdown3.classList.remove('display');
  dropdown_1.classList.remove('display'); //usuniecie display z submenu level2
  dropdown_2.classList.remove('display');
  //usuniecie obrotu chevrons po zamknieciu menu:
  chevron.classList.remove('down');
  chevron2.classList.remove('down');
  chevron3.classList.remove('down');
  chevron4.classList.remove('down');
  chevron5.classList.remove('down');
});

const closeMenu = document.querySelectorAll('.close-menu');
closeMenu.forEach(link => {
  link.addEventListener('click', () => {
    menuContent.classList.remove('open-nav');
    menuHeader.classList.remove('opacity');  //opacity na element nizej usuwamy

    document.body.classList.remove('overflow-freeze') // odmrazamy overflow na body;
  
    dropdown.classList.remove('display'); //usuwamy display z submenu
    dropdown2.classList.remove('display');
    dropdown3.classList.remove('display');
    dropdown_1.classList.remove('display'); //usuniecie display z submenu level2
    dropdown_2.classList.remove('display');
    //usuniecie obrotu chevrons po zamknieciu menu:
    chevron.classList.remove('down');
    chevron2.classList.remove('down');
    chevron3.classList.remove('down');
    chevron4.classList.remove('down');
    chevron5.classList.remove('down');
  });
});


// otwieranie submenu level 1
dropbtn.addEventListener('click', ()=> {
    dropdown.classList.toggle('display');
    dropdown_1.classList.remove('display');
    dropdown_2.classList.remove('display');
    chevron.classList.toggle('down'); //obrot chevronem
    //usuniecie down z chevronow w submenu:
    chevron2.classList.remove('down');
    chevron3.classList.remove('down');
});
dropbtn2.addEventListener('click', ()=> {
    dropdown2.classList.toggle('display');
    chevron4.classList.toggle('down'); //obrot chevronem
});
dropbtn3.addEventListener('click', ()=> {
    dropdown3.classList.toggle('display');
    chevron5.classList.toggle('down'); //obrot chevronem
});

// otwieranie submenu level 2
dropbtn_1.addEventListener('click', ()=> {
    dropdown_1.classList.toggle('display');
    chevron2.classList.toggle('down'); //obrot chevronem
});
dropbtn_2.addEventListener('click', ()=> {
    dropdown_2.classList.toggle('display');
    chevron3.classList.toggle('down'); //obrot chevronem
});

