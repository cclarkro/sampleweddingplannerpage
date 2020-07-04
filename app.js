const navSlide = () => {
    const menu = document.querySelector('.menu-button');

    menu.addEventListener('click', () => {
        // Toggle Active Class  
           menu.classList.toggle('menu-slide');

       }); 


}   

navSlide();