document.addEventListener("DOMContentLoaded", () => {
    let previousScrollY = window.pageYOffset;
    window.addEventListener("scroll", () => {
        let currentScrollY = pageYOffset;
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
});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 2500 }).start();
