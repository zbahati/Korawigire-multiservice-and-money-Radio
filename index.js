const toggle=document.querySelector('#toggle');
const navMenu=document.querySelector('.nav-menu');

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');

    navMenu.classList.toggle('active');
})
