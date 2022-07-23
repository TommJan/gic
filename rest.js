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

///////////////////////////////
///////////////////////////////
// MAP
const mapContainer = document.getElementById('map-container');

const map = L.map(mapContainer).setView([49.61, 10.55], 1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



const markers = [
    ["<b style='font-size:1.125rem;'>Hawkridge Compost Facility Inc</b> <br> <h5 style='font-size:.875rem; padding-top:.25em'>Zuiveringsslib 35.000 ton</h5> <br> <a href='composting-systems-referenties_1.html' class='terug'>Meer informatie >></a>", 44.604158224473835,-69.40621083198116],
    ["<b style='font-size:1.125rem;'>Ostrom's Farms</b> <br> <h5 style='font-size:.875rem; padding-top:.25em'>Champignoncompost 25.000 ton</h5> <br> <a href='composting-systems-referenties_2.html' class='terug'>Meer informatie >></a>", 47.04812272146516,-122.7623671373626],
    ["<b style='font-size:1.125rem;'>Elf Mushrooms</b> <br> <a href='composting-systems-referenties_3.html' class='terug'>Meer informatie >></a>", -33.645202053855336, 150.84966659746138],
    ["<b style='font-size:1.125rem;'>Jazz Trust</b> <br> <h5 style='font-size:.875rem; padding-top:.25em'>GFT-afval 5.000 ton</h5> <br> <a href='composting-systems-referenties_4.html' class='terug'>Meer informatie >></a>", -39.91726425753696, 175.00636279340637],
    ["<b style='font-size:1.125rem;'>SMS Ersanlar Tarim Ltd.</b> <br> <h5 style='font-size:.875rem; padding-top:.25em'>Champignoncompost 27.000 ton</h5> <br> <a href='composting-systems-referenties_5.html' class='terug'>Meer informatie >></a>", 37.13754625934479, 30.238438632744565],
    ["<b style='font-size:1.125rem;'>Anglian Water Services Ltd.</b> <br> <h5 style='font-size:.875rem; padding-top:.25em'>Zuiveringsslib 12.500 ton</h5> <br> <a href='composting-systems-referenties_6.html' class='terug'>Meer informatie >></a>", 52.335455487307485, 0.4062451776963639]
    ];
let marker = [];
for ( let i=0; i < markers.length; i++ ){
    marker = L.marker ([markers[i][1], markers[i][2]])
    .bindPopup(markers[i][0])

    .addTo( map );
}
