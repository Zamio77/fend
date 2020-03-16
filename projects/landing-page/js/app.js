/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
const isInViewport = elem => {
    const el = elem.getBoundingClientRect();
    return (
        el.top >= 0 &&
        el.top <= 0 &&
        el.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        el.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav(sections) {
    const fragment = document.createDocumentFragment();
    sections.forEach(section => {
        const liSection = document.createElement('li');
        liSection.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        fragment.appendChild(liSection);
    });
    navbarList.append(fragment);
}

// Scroll to element ID 
function scrollToElement(elem) {
    const rect = elem.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    window.scrollTo({
        top,
        left: 0,
        behavior: 'smooth'
    })
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active