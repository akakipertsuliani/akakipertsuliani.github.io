document.addEventListener("DOMContentLoaded", () => {
    let navBarPosition = false;
    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.getElementById("header").style.top = '0';
        } else {
            document.getElementById("header").style.top = "-9vh";
        }
        previousScrollY = currentScrollY;
    })

    document.getElementById("menu-bar").addEventListener("click", () => {
        let distance = navBarPosition ? "200%" : "100%";
        document.getElementById("nav-container").style.left = distance;
        navBarPosition = !navBarPosition;
        document.getElementById("nav-container").addEventListener("click", () => {
            document.getElementById("nav-container").style.left = "200%";
            navBarPosition = !navBarPosition;
        })
    })

    const carousel = document.querySelector(".skill-container");
    let isDragging = false;
    let startX, scrollLeft;

    carousel.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("mouseleave", () => {
        carousel.style = "cursor: grab;"
        isDragging = false;
    });

    carousel.addEventListener("mouseup", () => {
        carousel.style = "cursor: grab;"
        isDragging = false;
    });

    carousel.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        carousel.style = "cursor: grabbing;"
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 5; 
        carousel.scrollLeft = scrollLeft - walk;
    });


});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 2500 }).start();
