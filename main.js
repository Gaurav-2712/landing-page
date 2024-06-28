const nav_btn = document.getElementById('mobile-nav-toggle'); 
const primaryNav =  document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header')

console.log(nav_btn)

nav_btn.addEventListener('click',()=>{
  console.log("click")
  primaryNav.hasAttribute('data-visible') ? nav_btn.setAttribute('aria-expanded' , false) : nav_btn.setAttribute('aria-expanded' , true)
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay')
})