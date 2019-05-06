var winScroll,
    mobiles = document.querySelectorAll('.mobile-inertia'),
    messages = document.querySelectorAll('.message-inertia'),
    mobilescreens = document.querySelectorAll('.mouse-inertia'),
    navigation = document.querySelector('.navigation'),
    bgDark = document.querySelector('.bg-dark'),
    sliderTrack = document.querySelector('.slider-track')




// SVG watch scene
new Vivus('relojSVG', { duration: 120, type: 'oneByOne', animTimingFunction: Vivus.EASE }, () => relojSVG.classList.add('done'))



// Scroll navigation links
const scrollButtons = document.querySelectorAll('.scrollto');
for (let elm of scrollButtons) {
    elm.onclick = function (e) {
        e.preventDefault()
        const href = elm.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    }
}


// Scroll effects
window.onscroll = function () {

    winScroll = window.scrollY

    // Navbar morph
    if (winScroll > 100) {
        navigation.classList.add('sticky')
    } else {
        navigation.classList.remove('sticky')
    }


    // Reveal effects
    document.querySelectorAll('.reveal').forEach(function (el) {
        if (isInViewport(el)) {
            el.classList.add('visible')
        } else {
            el.classList.remove('visible')
        }
    })



    // Hero title parallax
    if (isInViewport(document.querySelector('.hero-inertia'))) {
        document.querySelector('.hero-inertia').style.transform = `translateY(${winScroll * .3}px)`
    }











    // Movile devices horizontal transitions
    if (isInViewport(document.querySelector('.features'))) {
        mobiles[0].style.transform = `translateX(${mobiles[0].getBoundingClientRect().top * .2}px)`
        mobiles[1].style.transform = `translateX(${mobiles[1].getBoundingClientRect().top * .07}px)`
    }












    // Message box transitions
    if (isInViewport(document.querySelector('.facts'))) {
        messages[0].style.transform = `translate(${-messages[0].getBoundingClientRect().top * .2}px, ${messages[0].getBoundingClientRect().top * .1}px)`
        messages[1].style.transform = `translate(${messages[1].getBoundingClientRect().top * .1}px, ${messages[1].getBoundingClientRect().top * .05}px)`
        messages[2].style.transform = `translate(${messages[2].getBoundingClientRect().top * .3}px, ${-messages[2].getBoundingClientRect().top * .05}px)`
    }









    // Slider transition
    if (isInViewport(document.querySelector('.join'))) {
        sliderTrack.style.transform = `translateX(${-document.querySelector('.join').getBoundingClientRect().top * .4}px)`
    }







    // Isometric slider transition
    if (isInViewport(document.querySelector('.dark-background'))) {
        bgDark.classList.add('on')
    } else {
        bgDark.classList.remove('on')
    }


}






// Isometric mobile layers mouse inertia
document.querySelector('.contact').onmousemove = function (e) {
    mobilescreens[0].style.transform = `translate(${e.x * .03}px, ${-e.y * .03}px)`
    mobilescreens[1].style.transform = `translate(${e.x * .06}px, ${-e.y * .06}px)`
    mobilescreens[2].style.transform = `translate(${e.x * .09}px, ${-e.y * .09}px)`
    mobilescreens[3].style.transform = `translate(${e.x * .12}px, ${-e.y * .12}px)`
}








// Object viewport detection
function isInViewport(el) {
    const rect = el.getBoundingClientRect()
    const vertInView = (rect.top <= window.innerHeight) && ((rect.top + rect.height) >= 0)
    const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
    return (vertInView && horInView)
}

// Object total depth detection
var getDepth = href => document.querySelector(href).getBoundingClientRect().top + window.scrollY