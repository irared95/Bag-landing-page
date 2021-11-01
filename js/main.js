function initMap() {
    const coordinates = {
        lat: 49.659774441117634,
        lng: 32.01388160816503
    };

    const map = new google.maps.Map(document.querySelector('#map'), {
        center: coordinates,
        zoom: 10
    })

    const marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        // icon: {
        //     url: 'marker.png',
        //     scaledSize: {
        //         width: 42,
        //         height: 42
        //     }
        // }
    });
}

initMap();

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger--js');
    const navMenu = document.querySelector('.nav__menu--js');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    })

    // tabs
    const tabsBtn = document.querySelectorAll(".feature__tab-btn--js")
    const tabsItems = document.querySelectorAll(".feature__content-item--js")
    tabsBtn.forEach(onTabClick)

    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId)

            if (!currentBtn.classList.contains("active")) {
                tabsBtn.forEach(function(item) {
                    item.classList.remove("active")
                });
                tabsItems.forEach(function(item) {
                    item.classList.remove("active")
                });
                currentBtn.classList.add("active")
                currentTab.classList.add("active")
            }
        });
    }


    $('.partners__slider--js').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        arrows: true,
        dots: true,
        dotsClass: 'dots partners__dots',
        prevArrow: '<div class="partners__arrow-prev partners__arrow"><img src="./image/icon-arrow-left.png" alt="arrow"></div>',
        nextArrow: '<div class="partners__arrow-next partners__arrow"><img src="./image/icon-arrow-right.png" alt="arrow"></div>',

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});