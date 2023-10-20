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

        if (window.scrollY > 300 && window.screenY < 1180) {
            document.getElementsByClassName("header")[0].style.left = "10%";
            document.getElementsByClassName("paragraph")[0].style.left = "50%";
            document.getElementsByClassName("emphasis")[0].style.left = "20%";
        } else {
            document.getElementsByClassName("header")[0].style.left = "-210%";
            document.getElementsByClassName("paragraph")[0].style.left = "250%";
            document.getElementsByClassName("emphasis")[0].style.left = "-220%";
        }
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

});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 2500 }).start();
