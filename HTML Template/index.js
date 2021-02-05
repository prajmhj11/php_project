$(()=>{
    $('#banner-area .owl-carousel').owlCarousel({
        loop: true,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
    });

    $('#top-sale .owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items: 1
            },
            480:{
                items: 3
            },
            960:{
                items: 5
            },
            1080:{
                items: 6
            }
        }
    });

    $(".my-rating").starRating({
        starSize: 20,
        readOnly: true
    })
})
