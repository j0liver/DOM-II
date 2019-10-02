// header//////////////////////////////////////////////
const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', () =>{
    // TweenMax.to(e.target, 1, {
    //     scale: 1.3,
    // })
    logo.style.color= 'red';
})

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((element) => {
    element.addEventListener('mouseover', () =>{
        navLinksColor();
    })    
})

const navLinksColor = ()=>{
    setInterval(() => {
        navLinks.forEach((element) => {
                element.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

        })
    }, 1000);
}


const nav = document.querySelector('.main-navigation');
const navColor = () => {
    setInterval(() => {
            nav.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        },1000);

}
window.addEventListener('scroll', () => {
    navColor();
})

const heroBus = document.querySelector('.intro img');
window.addEventListener('keydown', () =>{
    heroBus.style.transform = 'scale(2.0)';
    
})

const heroHeader = document.querySelector('.intro h2');
heroHeader.addEventListener('dblclick', () =>{
    heroHeader.style.backgroundColor = 'blue';
    
})

const heroP = document.querySelector('.intro p');
heroP.addEventListener('mouseenter', () =>{
    heroP.style.backgroundColor = 'purple';
    
})

const contentHeader = document.querySelector('.content-section .text-content h2');
// console.log(contentHeader);
contentHeader.addEventListener('wheel', () =>{
    contentHeader.style.color = 'pink';
    
})

const contentP  = document.querySelectorAll('.content-section .text-content p');
// console.log(contentP);
window.addEventListener('resize', () =>{
    contentP.forEach((element) => {
        element.style.color= 'white';
    })
})



const contentImg  = document.querySelectorAll('.content-section img');
// console.log(contentImg);
window.addEventListener('focus', () =>{
    contentImg.forEach((element) => {
        element.style.transform = 'scale(2.0)';
    })
})

const contentDestinationImg  = document.querySelector('.content-destination img');
// console.log(contentDestinationImg);
contentDestinationImg.addEventListener('mousemove', () =>{
    contentDestinationImg.style.transform = 'scale(2.0)';
})

const footer = document.querySelector('footer');
console.log(footer);
footer.addEventListener('mouseup', () =>{
   
    footer.style.backgroundColor = 'gray';
   
})



