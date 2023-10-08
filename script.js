let flipflop1 = true;
let flipflop2 = true;
let flipflop3 = true;

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth > 768) {
        document.getElementsByClassName("skill-container")[0].addEventListener("click", () => {
            let flip = "top: 90px; opacity: 1;";
            let flop = "top: 200px; opacity: 0;";
            let choose = flipflop1 ? flip : flop;
            document.getElementById("skill-icon-container2").style = flop;
            document.getElementById("skill-icon-container3").style = flop;
            document.getElementById("skill-icon-container1").style = choose;
            flipflop1 = !flipflop1;
            flipflop2 = true;
            flipflop3 = true;
            location.href = "#skill";
        });

        document.getElementsByClassName("skill-container")[1].addEventListener("click", () => {
            let flip = "top: 90px; opacity: 1;";
            let flop = "top: 200px; opacity: 0;";
            let choose = flipflop2 ? flip : flop;
            document.getElementById("skill-icon-container1").style = flop;
            document.getElementById("skill-icon-container3").style = flop;
            document.getElementById("skill-icon-container2").style = choose;
            flipflop2 = !flipflop2;
            flipflop1 = true;
            flipflop3 = true;
            location.href = "#skill";
        });

        document.getElementsByClassName("skill-container")[2].addEventListener("click", () => {
            let flip = "top: 90px; opacity: 1;";
            let flop = "top: 200px; opacity: 0;";
            let choose = flipflop3 ? flip : flop;
            document.getElementById("skill-icon-container1").style = flop;
            document.getElementById("skill-icon-container2").style = flop;
            document.getElementById("skill-icon-container3").style = choose;
            flipflop3 = !flipflop3;
            flipflop1 = true;
            flipflop2 = true;
            location.href = "#skill";
        });
    }
});

let textAnimate = KUTE.to('#wellcome-text', { text: "Hello, world" }, { duration: 3900 }).start();
