window.addEventListener("load", () => {
    const loadingPage = document.querySelector('.loader-page');
    loadingPage.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".logo").addEventListener("click", () => {
        location.href = "#";
    });

    let previousScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
        let currentScrollY = window.scrollY;
        if (previousScrollY > currentScrollY) {
            document.querySelector(".header").style.top = '0';
        } else {
            document.querySelector(".header").style.top = "-9vh";
            document.querySelector(".header").addEventListener("mouseover", () => {
                document.querySelector(".header").style.top = "0";
            });

        }
        previousScrollY = currentScrollY;
    });
});

let textAnimate = KUTE.to('.text1', { text: "Hello, world" }, { duration: 2500 }).start();
