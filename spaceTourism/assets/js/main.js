/*--- Show mobile navigation ---*/
const toggleBtn = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-navigation');


toggleBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        toggleBtn.setAttribute('aria-expanded', true);
    }
    else{
        nav.setAttribute('data-visible', false);
        toggleBtn.setAttribute('aria-expanded', false);
    }
});
