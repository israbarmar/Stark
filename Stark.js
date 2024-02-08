const d = document;
const product_menu = d.querySelectorAll('.menu');
const product_button = d.querySelectorAll('.button_menu');
const hamburger = d.querySelector('.hamburger');
const hamburger_active = d.querySelector('.hamburger hamburger--collapse is-active');
const menu = d.querySelector('.menu_responsive');
const b_categories = d.querySelector('.categories');
const a_categories = d.querySelector('.articles_categories');
const cards = d.querySelectorAll('.cards');
const search = d.getElementById('i_search');
const icon_search = d.querySelector('.fa-magnifying-glass');
const input_search = d.querySelector('.input_search');
const nav_sections = d.querySelectorAll('.nav_section a');

nav_sections.forEach((section)=>{

    section.classList.add('first_color');

     section.addEventListener('click', ()=>{
           nav_sections.forEach((oSection)=>{
                 oSection.classList.remove('color_nav');
           })
           section.classList.add('color_nav');
 })
})

search.addEventListener('click', ()=>{icon_search.classList.add('icon_color')})

d.addEventListener('click', (e) => {
    if (!search.contains(e.target)) { 
        icon_search.classList.remove('icon_color');
    }
});

cards.forEach((card)=>{


card.addEventListener('mousemove', (e) => { 

  const boundingRect = card.getBoundingClientRect(); 


  const x = e.clientX - boundingRect.left; 
  const y = e.clientY - boundingRect.top;   
  const centerX = boundingRect.width / 2; 

  const centerY = boundingRect.height / 2; 
  const deltaX = (x - centerX) / centerX;  
  
  const deltaY = (centerY - y) / centerY;
  
  const rotateVertical = deltaX * -10;

  const rotateHorizontal = deltaY * -10; 

  const scale = 1.03;
    card.style.transform = `perspective(800px) rotateX(${rotateHorizontal}deg) rotateY(${rotateVertical}deg) scale(${scale})`;
  
});
})

cards.forEach((card)=>{
    card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    });
})

cards.forEach((card) => {
    const resplandor = card.querySelector('.resplandor');

    card.addEventListener('mousemove', (e) => {
        const boundingRect = card.getBoundingClientRect();
        const x = e.clientX - boundingRect.left;
        const y = e.clientY - boundingRect.top;

        resplandor.style.left = `${x}px`;
        resplandor.style.top = `${y}px`;
    });
});

product_button.forEach((b_menu, index)=>{

    b_menu.addEventListener('mouseover', ()=>{
        product_menu[index].classList.remove('noshow');
    })

    b_menu.addEventListener('mouseleave', ()=>{
        product_menu[index].classList.add('noshow');
    })

    b_menu.addEventListener('click', ()=>{
        product_menu[index].classList.toggle('noshow');
    })

})

product_menu.forEach((p_menu, index)=>{
    p_menu.addEventListener('mouseover', ()=>{
        product_menu[index].classList.remove('noshow');
    })

    p_menu.addEventListener('mouseleave', ()=>{
        product_menu[index].classList.add('noshow');
    })
})

const b = d.body;
const m = d.main;

hamburger.addEventListener('click', ()=>{
hamburger.classList.toggle('is-active'), 
menu.classList.toggle('show_menu'),
b.classList.toggle('dissapear')
});

b_categories.addEventListener('click', ()=>a_categories.classList.toggle('noeffect'));

