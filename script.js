//scrolling animations

const fadingElements = document.querySelectorAll('.fade-in');
const windowHeight = window.innerHeight;

function showElementsDown() {
  fadingElements.forEach((elem)=>{
    const rect = elem.getBoundingClientRect().bottom;
    if (windowHeight > rect) {
      elem.classList.remove('fade-in');
      elem.classList.add('apear');
    } else {
      elem.classList.add('fade-in');
      elem.classList.remove('apear');
    }
  });
}

window.addEventListener('scroll', showElementsDown);



//mobile nav menu

//open
const hamburger = document.querySelector('.hamburger-lines');
const allElementWithoutMobile = document.querySelectorAll('body *:not(.mobile--nav *)');
const mobileNavigationMenu = document.querySelector('.mobile--nav');
//close
const close = document.querySelector('.close');


function showMobileNavigation() {
  allElementWithoutMobile.forEach(elem =>{
    elem.classList.add('disactive');
    mobileNavigationMenu.style.display = 'block';
  })
}

hamburger.addEventListener('click', showMobileNavigation);


function hideMobileMenu() {
  allElementWithoutMobile.forEach(elem =>{
    elem.classList.remove('disactive');
    mobileNavigationMenu.style.display = 'none';
  });
}

close.addEventListener('click', hideMobileMenu);


//scroll on button to section


const mainSection = document.querySelector('.main--section');
const portfolio = document.querySelector('.portfolio--section');
const contact = document.querySelector('.contact--section');
const header = document.querySelector('header')
const navigationsButtons = document.querySelectorAll('.btn');
const navElements = document.querySelector('nav ul').getElementsByTagName('li');

let scrollOptions = {
  behavior: "smooth",
};

function scrollOnButtons(event) {
  let eventTargetClass = event.target.classList;
  console.log(event.target);
  if (eventTargetClass.contains('hero--mobile--navigation--button')  || event.target == navElements[0]) {
    console.log('check')
    mainSection.scrollIntoView(scrollOptions);
  } else if (eventTargetClass.contains('main--section--navigation--button') || event.target == navElements[1]) {
    portfolio.scrollIntoView(scrollOptions);
  } else if (eventTargetClass.contains('button--navigation--footer')) {
    scrollOptions.block = 'end';
    header.scrollIntoView(scrollOptions);
  } else if (eventTargetClass.contains('hero--desktop--navigation--button')) {
    scrollOptions.block = 'start';
    mainSection.scrollIntoView(scrollOptions);
  } else if (eventTargetClass.contains('portfolio--section--navigation--button-top')) {
    scrollOptions.block = 'start';
    header.scrollIntoView(scrollOptions);
  } else if (eventTargetClass.contains('portfolio--section--navigation--button-bottom') || event.target == navElements[2]) {
    scrollOptions.block = 'start';
    contact.scrollIntoView(scrollOptions);
  }
}

navigationsButtons.forEach(elem=>{
  elem.addEventListener('click', scrollOnButtons);
})



// scroll mobile navigation
let mobileNavigationButtons = document.querySelector('.mobile--nav').querySelectorAll('h1');

function scrollToSectionFromMobileNav(event) {
  let target = event.target;
  allElementWithoutMobile.forEach(elem =>{
    elem.classList.remove('disactive');
    mobileNavigationMenu.style.display = 'none';
  });
  if (target == mobileNavigationButtons[0]) {
    mainSection.scrollIntoView(scrollOptions);
  } else if (target == mobileNavigationButtons[1]) {
    portfolio.scrollIntoView(scrollOptions);
  } else if (target == mobileNavigationButtons[2]) {
    scrollOptions.block = 'start';
    contact.scrollIntoView(scrollOptions);
  }
}


mobileNavigationButtons.forEach(elem=>{
  elem.addEventListener('click', scrollToSectionFromMobileNav);
});

//main section carosuel

const activeElements = document.querySelectorAll('.main--section--carousel--buttons div, .main--section--dots div');
const carouselButtons = document.querySelectorAll('.carousel--buttons--boxes div')
const mainSectionParagraph = document.querySelector('.main--section--text p');
const carouselContentDots = document.querySelectorAll('.main--section--dots div');
const mainSectionText = document.querySelector('.main--section--text');
console.log(mainSectionText);

console.log(mainSectionText);
console.log(activeElements);

function changeParagraphContent(event) {
  activeElements.forEach(elem =>{
    elem.classList.remove('active');
  });
  if (event.target == activeElements[0]) {
    mainSectionParagraph.innerHTML = 'While I was studying in highschool, I took a part in many startup ideas projects. It was my first step to passionate about IT world. After I passed the school in 2019 I was working for startup called Numbala as creative guy. In 2020 I finished bootcamp CodersLab JS Developer, but in meanwhile I got a job as UX specialist. There I was working on developing messneger chatbot.';
    activeElements[0].classList.add('active');
    carouselContentDots[0].classList.add('active');
  } else if (event.target == activeElements[1]) {
    mainSectionParagraph.innerHTML = 'Firstly I started develop skills very thoroughly in HTML and CSS. I added to this sass to clarify code, and after that I learned JS to make possible to make dynamic webpages. I expand my knowledge also as UX and UI designer for be more conscious in all the process of developing.';
    activeElements[1].classList.add('active');
    carouselContentDots[1].classList.add('active');
  } else if (event.target == activeElements[2]) {
    mainSectionParagraph.innerHTML = 'I am passionate about write a code and the accompanying feeling of flowstate. Solving problems make me satisfied, and also I feel better when I can learn something new every single day. Except that I am studying economy and in freetime I train muay thai.';
    activeElements[2].classList.add('active');
    carouselContentDots[2].classList.add('active');
  }
  mainSectionText.classList.remove('appear-from-left')
  window.requestAnimationFrame(()=>{
    mainSectionText.classList.add('appear-from-left')
  });
};



activeElements.forEach((elem)=>{
  elem.addEventListener('click', changeParagraphContent)
});

