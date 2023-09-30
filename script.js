let flipflop1 = true;
let flipflop2 = true;
let flipflop3 = true;

document.addEventListener("DOMContentLoaded", () => {
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
    });


    document.getElementsByClassName("contact-container")[0].addEventListener("click", () => {
        window.open("https://github.com/akakipertsuliani", "target=_blank");
    });

    document.getElementsByClassName("contact-container")[2].addEventListener("click", () => {
        window.open("https://facebook.com/akaki.ferculiani.12", "target=_blank");
    });
});