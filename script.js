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

    // window.addEventListener("loadstart", () => {
    //     console.log("Nice");
    // })

});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 2500 }).start();
