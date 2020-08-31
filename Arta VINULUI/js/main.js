
// const prevIcon = '<img src="./img/arrow-left.svg">'
// const nextIcon = '<img src="./img/arrow-right.svg">'


$(document).ready(function () {
    $('.popular-block').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })


    $('.promotional-slider-product').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:2
            }
        }
    })

    $('.new-product').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots: false,
        items: 4,
        navText: ['<img src="img/arrow-left.svg">','<img src="img/arrow-left.svg">'],
        // navText: [prevIcon, nextIcon],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:3
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
});


(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 80 ) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    }
}());

$('#burger-toggle').on("click", function(event) {
    event.preventDefault();
    $(this).toggleClass('active');
    $('#sort-menu').toggleClass('active');
});

   
