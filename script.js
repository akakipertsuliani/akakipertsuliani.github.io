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

    let navBar = document.querySelector(".nav-bar");
    let menuButton = document.querySelector(".menu-bar");
    let navigationEl = document.querySelectorAll(".element");

    menuButton.addEventListener("click", () => {
        navBar.classList.toggle("active");
    })

    navigationEl.forEach((element) => {
        element.addEventListener("click", () => {
            navBar.classList.remove("active");
        })
    })

    document.addEventListener("click", (e) => {
        if (!navBar.contains(e.target) && !menuButton.contains(e.target) && window.innerWidth < 1024) {
            navBar.classList.remove("active");
        }
    })

});

let textAnimate = KUTE.to('.text1', { text: "Hello, world" }, { duration: 2500 }).start();