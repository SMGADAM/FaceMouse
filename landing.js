// placeholder for landing page interactivity
// smooth scroll for nav links
const links = document.querySelectorAll('.nav-links a');
links.forEach(l=>{
    l.addEventListener('click', e=>{
        e.preventDefault();
        const target = document.querySelector(l.getAttribute('href'));
        if(target) target.scrollIntoView({behavior:'smooth'});
    });
});

// mobile menu toggle
const burger = document.createElement('div');
burger.className = 'burger';
burger.innerHTML = '<span></span><span></span><span></span>';
const navContainer = document.querySelector('.navbar .container');
navContainer.appendChild(burger);
burger.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

