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
    // Si el clic no fue dentro del área del input_search
    if (!search.contains(e.target)) { /*Menciona que si el elemento que se dió click
    dentro del DOM es hijo de search. Si no lo es (!) entonces se quita el color*/
        // Elimina la clase 'icon_color'
        icon_search.classList.remove('icon_color');
    }
});

cards.forEach((card)=>{


card.addEventListener('mousemove', (e) => { /*Se hará uso de un evento para empezar a calcular
                                              la posición de 'card'*/



  const boundingRect = card.getBoundingClientRect(); /*Se obtiene las medidas de card*/


  const x = e.clientX - boundingRect.left; /*Se resta la posición que existe entre el puntero respecto
                                            al eje vertical de la ventana
                                            y el lado izquierdo de 'card'*/

  const y = e.clientY - boundingRect.top;   /*Se resta la posición que existe entre el puntero respecto
                                                al eje horizontal de la ventana
                                                y la lína superior de 'card'*/

  const centerX = boundingRect.width / 2; /*Se elige la mitad de card de manera horizontal,
                                            calcula la linea central*/

  const centerY = boundingRect.height / 2; /*Se elige la mitad de card de manera vertical,
                                            calcula la linea horizontal*/

  const deltaX = (x - centerX) /*Obliga a crear un punto 0 de manera horizontal
  porque el 0 ya no se origina en el borde izquierdo, sino en el centro porque
  se resta con la mitad de 'card'. Con esto se crea un plano cartesiano para calcular valores negativos
  y positivos */ 
  / centerX;  /*Se divide para la misma mitad para que las medidas en la escala sea de 1 a -1.
  Así el valor será más manejable a la hora de aplicarlo al efecto*/
  
  const deltaY = (centerY - y) /*Obliga a crear un punto 0 de manera vertical
  porque el 0 ya no se origina en el borde superior, sino en el centro porque
  se resta con la mitad de 'card' *// centerY;
  /*Se divide para la misma mitad para que las medidas en la escala sea de -1 a 1.
  Así el valor será más manejable a la hora de aplicarlo al efecto*/

/*Por ejemplo: Si el valor total de la carta son 100px, entonces la mitad será 50px.
Si el puntero se encuentra en la parte superior de la carta entonces su valor será 0
porque se resta con la posición que se encuentra la carta con la parte superior de la
ventana. (100px - 100px = 0px).

Luego para crear el plano catersiano, se tiene que crear un punto 0 en la mitad de la carta.
Por lo tanto, si el puntero se encuentra arriba el total será 1, ya que:
(50px - 0px)/50px = 50/50 = 1.

Y si se encuentra en el centro, el resultado es 0:
(50 - 50) / 50 = 0/50 = 0*/

/*Las medidas para el efecto con el puntero deben darse similar a un plano cartesiano,
así las medidas son constantes y el efecto es a tiempo real.*/

  const rotateVertical = deltaX * -10;

  const rotateHorizontal = deltaY * -10; /*por -10 para que el efecto sea pronunciado y 
                                           apegado al puntero*/

  /*Primero se tiene que calcular cuánta distancia existe entre el puntero y los lados del contenedor 
  para que los pixeles se cuenten desde dentro de 'card'. El efecto de rotación se lo hace
  por pixeles. Entonces calcula los pixeles que existe dentro del contenedor hasta el puntero.*/

  const scale = 1.03; // Se agrega junto a la cadena del cambio de efecto para que todo se realice a la par
    card.style.transform = `perspective(800px) rotateX(${rotateHorizontal}deg) rotateY(${rotateVertical}deg) scale(${scale})`;
  /*Con esto, se asegura de que el efecto tridimensional tenga un efecto de seguimiento, así,
  donde se apunte dentro del contenedor, 'card' va a moverse en esa dirección.*/;

  /*Perspective ayuda a que se perciba la profundidad y la distancia en la transformación del elemento*/

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
        
        /*el efecto debe estar dentro de un contenedor y si solo mantiene el valor sin restar, entonces, 
         por ejemplo el valor es de 100px, entonces estará a 100px del contenedor ya que es valor global y
        se irá más abajo debido a la posición en la que se encuentra el efecto. 
        Pero si se le resta con el tope del contenedor, entonces el valor será, por ejemplo 20px,
        y sólo estará a 20px por debajo del tope.*/

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
        product_menu[index].classList.remove('noshow'); /*a un elemento no se le puede poner
                                                          una posición, se tiene que declarar
                                                          toda la variable 'product_menu' y ahí
                                                          sí concatenar la posición*/
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

