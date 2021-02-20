'use strict';

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const nav_menu = document.querySelector('.main-nav');
const nav_icon = document.querySelector('.mobile-nav-icon');
const nav_close = document.querySelector('.mobile-close');
const navHeight = nav.getBoundingClientRect().height;
const features = document.querySelector('.js--wp-1');
const phone = document.querySelector('.js--wp-2');
const cities = document.querySelector('.js--wp-3');
const planPremium = document.querySelector('.js--wp-4');



//Implementing sticky navigation bar
const stickyNav = function (entries) {
  const [entry] = entries;
  //console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-65px`, //to add a marging and make the nav sticky 90 px before the start of the section 1
});
headerObserver.observe(header);

//Smooth scrolling

document.querySelector('.main-nav').addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy: we do the navigation only if the click event happens in one of the links in the navigation bar
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    //console.log('LINK');
  }
});

//Animations 


const fadeIn = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate__fadeIn');
    })

} 

const pulse = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) entry.target.classList.add('animate__pulse');
}
    
const fadeInUp = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) entry.target.classList.add('animate__fadeInUp');
}

const obsOptions = {
    root: null,
    threshold: 0.2,
}

const fadeInObserver = new IntersectionObserver (fadeIn, obsOptions);
const pulseObserver = new IntersectionObserver (pulse, obsOptions);
const fadeInUpObserver = new IntersectionObserver (fadeInUp, obsOptions);

fadeInObserver.observe(features);
fadeInObserver.observe(cities);
pulseObserver.observe(planPremium);
fadeInUpObserver.observe(phone);

// Display navigation on mobile

nav_icon.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('clicked');
    nav_icon.classList.add('hidden');
    nav_close.classList.remove('hidden');
    nav_menu.classList.remove('hidden');
 }
    
)

nav_close.addEventListener('click', function(e){
        e.preventDefault();
        nav_icon.classList.remove('hidden');
        nav_close.classList.add('hidden');
        nav_menu.classList.add('hidden');
    }
)