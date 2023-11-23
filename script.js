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
            document.querySelector(".header").style.top = '0';
        } else {
            document.querySelector(".header").style.top = "-9vh";
            document.querySelector(".header").addEventListener("mouseover", () => {
                document.querySelector(".header").style.top = "0";
            });

        }
        previousScrollY = currentScrollY;
    });

    let position1 = 0;
    let position2 = 0;
    let position3 = 0;

    document.querySelectorAll(".drop-down-button").forEach((button, index) => {
        button.addEventListener("click", () => {
            switch (index) {
                case 0:
                    if (position1) {
                        document.querySelectorAll(".imgs-left").forEach((element) => {
                            element.style = "opacity: 0; transform: translateY(-5px)";
                        })
                        document.getElementById("first").style.transform = "rotate(0)";
                        position1 = 0;
                        break;
                    }
                    document.querySelectorAll(".imgs-left").forEach((element) => {
                        element.style = "opacity: 1; transform: translateY(5px)";
                    });
                    document.getElementById("first").style.transform = "rotate(180deg)";
                    position1 = 1;
                    break;
                case 1:
                    if (position2) {
                        document.querySelectorAll(".imgs-middle").forEach((element) => {
                            element.style = "opacity: 0; transform: translateY(-5px)";
                        });
                        document.getElementById("second").style.transform = "rotate(0)";
                        position2 = 0;
                        break;
                    }
                    document.querySelectorAll(".imgs-middle").forEach((element) => {
                        element.style = "opacity: 1; transform: translateY(5px)";
                    });
                    document.getElementById("second").style.transform = "rotate(180deg)";
                    position2 = 1;
                    break;
                case 2:
                    if (position3) {
                        document.querySelectorAll(".imgs-right").forEach((element) => {
                            element.style = "opacity: 0; transform: translateY(-5px)";
                        });
                        document.getElementById("three").style.transform = "rotate(0)";
                        position3 = 0;
                        break;
                    }
                    document.querySelectorAll(".imgs-right").forEach((element) => {
                        element.style = "opacity: 1; transform: translateY(5px)";
                    });
                    document.getElementById("three").style.transform = "rotate(180deg)";
                    position3 = 1;
                    break;
            };
        });
    });

    let num = 0;

    document.querySelector(".menu-bar").addEventListener("click", () => {
        if (num === 0) {
            document.querySelector(".nav-bar").style = "transform: translateX(0);";
            num = 1;
        } else if (num === 1) {
            document.querySelector(".nav-bar").style = "transform: translateX(100%);";
            num = 0;
        }
    });

    document.querySelectorAll(".element").forEach((element) => {
        if (window.innerWidth <= 768) {
            element.addEventListener("click", () => {
                document.querySelector(".nav-bar").style = "transform: translateX(100%);";
            });
        }   
    });

});

let textAnimate = KUTE.to('.text1', { text: "Hello, world" }, { duration: 2500 }).start();
