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
});