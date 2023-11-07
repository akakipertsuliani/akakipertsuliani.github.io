window.addEventListener("load", () => {
    const loadingPage = document.querySelector('.loader-page');
    loadingPage.style.display = 'none';
});

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
    });

    document.getElementById("menu-bar").addEventListener("click", () => {
        let distance = navBarPosition ? "200%" : "100%";
        document.getElementById("nav-container").style.left = distance;
        navBarPosition = !navBarPosition;
        document.getElementById("nav-container").addEventListener("click", () => {
            document.getElementById("nav-container").style.left = "200%";
            navBarPosition = !navBarPosition;
        });
    });

    let position1 = 0;
    let position2 = 0;
    let position3 = 0;
    let startY1 = 120;
    let startY2 = 120;
    let startY3 = 120;

    document.querySelectorAll(".text-over-container").forEach((button, index) => {
        button.addEventListener("click", () => {
            switch (index) {
                case 0:
                    if (position1) {
                        document.querySelectorAll(".img-c-1").forEach((element) => {
                            startY1 = 120;
                            element.style = `transform: translateY(${startY1}%); opacity: 0;`;
                        })
                        document.getElementsByClassName("fa-solid")[1].style.transform = "rotate(0)";
                        position1 = 0;
                        break;
                    }
                    document.querySelectorAll(".img-c-1").forEach((element) => {
                        element.style = `transform: translateY(${startY1}%); opacity: 1;`;
                        startY1 += 120;
                    });
                    document.getElementsByClassName("fa-solid")[1].style.transform = "rotate(180deg)";
                    position1 = 1;
                    break;
                case 1:
                    if (position2) {
                        document.querySelectorAll(".img-c-2").forEach((element) => {
                            startY2 = 120;
                            element.style = `transform: translateY(${startY2}%); opacity: 0;`;
                        })
                        document.getElementsByClassName("fa-solid")[2].style.transform = "rotate(0)";
                        position2 = 0;
                        break;
                    }
                    document.querySelectorAll(".img-c-2").forEach((element) => {
                        element.style = `transform: translateY(${startY2}%); opacity: 1;`;
                        startY2 += 120;
                    });
                    document.getElementsByClassName("fa-solid")[2].style.transform = "rotate(180deg)";
                    position2 = 1;
                    break;
                case 2:
                    if (position3) {
                        document.querySelectorAll(".img-c-3").forEach((element) => {
                            startY3 = 120;
                            element.style = `transform: translateY(${startY3}%); opacity: 0;`;
                        });
                        document.getElementsByClassName("fa-solid")[3].style.transform = "rotate(0)";
                        position3 = 0;
                        break;
                    }
                    document.querySelectorAll(".img-c-3").forEach((element) => {
                        element.style = `transform: translateY(${startY3}%); opacity: 1;`;
                        startY3 += 120;
                    });
                    document.getElementsByClassName("fa-solid")[3].style.transform = "rotate(180deg)";
                    position3 = 1;
                    break;
            };
        });
    });
});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 2500 }).start();
