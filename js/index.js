const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const body = document.getElementsByClassName('container');
const header = document.getElementsByTagName('header');
const navBar = document.getElementsByTagName('nav');

const navBtns = document.querySelectorAll('nav a');

navBtns.forEach(btns => {
  btns.style.color = 'green';
});

let newBtn = document.createElement("a");
newBtn.textContent = "Thing";
navBar[0].appendChild(newBtn);

navBar[0].prepend("Thing");

navBtns[0].textContent = "Services";
navBtns[1].textContent = "Product";
navBtns[2].textContent = "Vision";
navBtns[3].textContent = "Features";
navBtns[4].textContent = "About";
navBtns[5].textContent = "Contact";


const cta = document.querySelector('div.cta-text');

const title = document.querySelector('.cta-text h1');
title.innerHTML = "DOM<br/>Is<br/>Awesome";

const headerBtn = document.querySelector('.cta-text button');
headerBtn.textContent = "Get Started";

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', '../img/header-img.png');

const mainH4 = document.querySelectorAll('.text-content h4');

mainH4[0].textContent = "Features";
mainH4[1].textContent = "About";
mainH4[2].textContent = "Services";
mainH4[3].textContent = "Product";
mainH4[4].textContent = "Vision";

const mainP = document.querySelectorAll('.text-content p');

mainP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempuis et. Suspendisse tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[1].textContent = "About content elementum magna eros, ac psuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornaare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in.";
mainP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in.";
mainP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi."

const mainImg = document.getElementById('middle-img');

mainImg.setAttribute('src', '../img/mid-page-accent.jpg');

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

const contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = "123 Way 456 Street<br/>Somewhere, USA";
contactP[1].textContent = "1 (888)888-8888";
contactP[2].textContent = "sales@greatidea.io";

const copyRight = document.querySelector('footer p');
copyRight.textContent = "Copyright Great Idea! 2018";