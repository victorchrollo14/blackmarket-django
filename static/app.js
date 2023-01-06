


let navbar = document.querySelector('.navigation-tablets-mobile');
let dis = 0;
let  header = document.querySelector('.header');
let sections = document.querySelectorAll('section:not(.navigation-tablets-mobile');

const nav = this.document.querySelector('.nav');


// functions to show log-in and signup part when user clicks on it.
function func1(){
    document.querySelector('.log-in').style.display="initial";
    document.querySelector('.signup').style.display="none";
}

function func2(){
    document.querySelector('.signup').style.display="initial";
    document.querySelector(".log-in").style.display="none";
}

// Function to display log-in  section on click

function userAuth(){
    document.querySelector('.user-signup').style.display="block";
    document.body.style.opacity='.8';
    document.body.style.overflow='hidden';
}

function loginClose(){
    document.querySelector('.user-signup').style.display="none";
    document.body.style.opacity='initial';
    document.body.style.overflow='initial';
}

// Fuctions to display navigation-links on mobile and tablet;

// document.querySelector('.navbar').addEventListener('click', showNav);


// function showNav(){
//     console.log(dis)
//     document.querySelector('.navigation-tablets-mobile').style.display='flex';
//     dis = 1;
//     document.body.style.opacity='.8';
//     document.body.style.overflow='hidden';
// }


// sections = document.querySelectorAll('section:not(.navigation-tablets-mobile');
// console.log(sections);
// sections.forEach(section => {
//     section.addEventListener('click', hideNav);
// });
 

// function hideNav(){
//     if(dis == 1){
//         console.log(dis);
//         document.querySelector('.navigation-tablets-mobile').style.display="none";
//         document.body.style.opacity='1';
//         document.body.style.overflow='initial';
//         dis = 0;
//     }
// }

// adding background color to navbar while scrolling.

window.addEventListener("scroll", function(){
    let scrHeight = window.scrollY;
    let header = document.querySelector('.header')

    console.log(scrHeight);
    
    if (scrHeight > 200){
        header.style.background="rgb(41,41,41)";
        header.style.color="rgb(158,195,224)";
    }
    else {
        header.style.background="initial";
        header.style.color="white";
    }
 
});