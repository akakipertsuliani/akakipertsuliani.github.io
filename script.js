document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300 && window.pageYOffset < 1180) {
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

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 3900 }).start();
