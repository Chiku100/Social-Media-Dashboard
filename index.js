let containers = document.querySelectorAll(".container");
let cons = $(".container")
let spans = document.querySelectorAll("span");
let smalls = document.querySelectorAll("small");
let cards = document.querySelectorAll(".box1 p");
$("button").click(function () {
    toggle();
})

function toggle() {
    if ($(".circle").css("right") == "2px") {
        $("body").css("background-color", "hsl(230, 17%, 14%)");
        document.querySelector("button").style.background = "linear-gradient(hsl(210, 78%, 56%), hsl(146,68%,55%))";
        $(".circle").css("right", "22px");
        $("body").css("color", "white");
        for (c of containers) {
            c.style.backgroundColor = "hsl(228, 28%, 20%)";
        }
        for (s of spans) {
            s.style.color = "hsl(228, 34%, 66%)";
        }
        $("label").css("color", "hsl(228, 34%, 66%)");
        $("p").css("color", "hsl(228, 34%, 66%)");
        $(".ovrv").css("color", "white");
        $(".circle").css("background-color", "hsl(228, 28%, 20%)");
        for (s of smalls) {
            s.style.color = "hsl(228, 34%, 66%)";
        }
        for (c of cards) {
            c.style.color = "hsl(228, 34%, 66%)";
            for (let i = 0; i < containers.length; i++) {
                containers[i].onmouseover = function () {
                    containers[i].style.backgroundColor = "hsl(232, 19%, 25%)"
                }
                containers[i].onmouseout = function () {
                    containers[i].style.backgroundColor = "hsl(228, 28%, 20%)"
                }
            }
        }
    } else {
        $("body").css("background-color", "white");
        $(".circle").css("right", "2px");
        $("button").css("background", "hsl(230, 22%, 74%)");
        $("body").css("color", "black");
        for (c of containers) {
            c.style.backgroundColor = "hsl(225, 100%, 98%)";
        }
        for (s of spans) {
            s.style.color = "hsl(228, 12%, 44%)";
        }
        for (s of smalls) {
            s.style.color = "hsl(228, 12%, 44%)";
        }
        for (c of cards) {
            c.style.color = "hsl(228, 12%, 44%)";
        }
        $(".circle").css("background-color", "white");
        $(".ovrv").css("color", "hsl(228, 12%, 44%)");
        for (let i = 0; i < containers.length; i++) {
            containers[i].onmouseover = function () {
                containers[i].style.backgroundColor = "hsl(227, 47%, 92%)"
            }
            containers[i].onmouseout = function () {
                containers[i].style.backgroundColor = "hsl(225, 100%, 98%)"
            }
        }
    }
}
