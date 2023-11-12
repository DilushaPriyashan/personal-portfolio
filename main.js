/*__________________________________________show menu_________________________________________*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*__________________________________________toggle menu mobile_________________________________________*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*__________________________________________scroll sections_________________________________________*/

const sections = document.querySelectorAll('section[id]')
function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*__________________________________________scroll reveal_________________________________________*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

/*__________________________________________loop of the title_________________________________________*/

const roles = ["Engineering Graduate", "Full Stack Developer"];
let roleIndex = 0;
let textIndex = 0;
let isDeleting = false;
let typingSpeed = 150; 

function typeRole() {
    const currentRole = roles[roleIndex];
    const roleElement = document.getElementById("role");
    const cursorElement = document.getElementById("cursor");

    const text = currentRole.slice(0, isDeleting ? textIndex - 1 : textIndex + 1);
    roleElement.textContent = text;

    if (!isDeleting && text === currentRole) {
        isDeleting = true;
        typingSpeed = 400; 
        

    } else if (isDeleting && text === "") {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 150;        
    }

    textIndex = isDeleting ? textIndex - 1 : textIndex + 1;
    cursorElement.style.display = text === currentRole ? "none" : "inline";
    setTimeout(typeRole, typingSpeed);
}

typeRole(); 

/*__________________________________________submit button on contact_________________________________________*/

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const sendButton = document.getElementById("send-button");

  
    sendButton.addEventListener("click", function() {
        
        contactForm.reset();
    });
});

/*__________________________________________scroll button in project_________________________________________*/

document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".scrollbar-item");
    let currentCardIndex = 0;
    
    function scrollToNextCard() {
        if (currentCardIndex < cards.length - 1) {
            currentCardIndex++;
            cards[currentCardIndex].scrollIntoView({ behavior: "smooth" });
        }
    }
    
    function scrollToPreviousCard() {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            cards[currentCardIndex].scrollIntoView({ behavior: "smooth" });
        }
    }

    const forwardArrowIcons = document.querySelectorAll(".next-button");
    forwardArrowIcons.forEach((arrowIcon) => {
        arrowIcon.addEventListener("click", function(event) {
            event.preventDefault(); 
            scrollToNextCard();
        });
    });


    const reverseArrowIcons = document.querySelectorAll(".reverse-button");
    reverseArrowIcons.forEach((arrowIcon) => {
        arrowIcon.addEventListener("click", function(event) {
            event.preventDefault(); 
            scrollToPreviousCard();
        });
    });
});

/*_________________________________________delays and intervals_________________________________________*/

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon, ',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input, .contact__inf ',{interval: 200});