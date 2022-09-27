$("button").click(function () {
    toggle();
})
function toggle() {
    if ($(".circle").css("right") == "2px") {
        $("html").attr("data-theme", "dark");
        $("button").css({ background: 'linear-gradient(hsl(210, 78%, 56%),hsl(146,68%,55%))' });
        $(".circle").css("right", "22px");
        animation();

    } else {
        $("html").attr("data-theme", "light");
        $(".circle").css("right", "2px");
        $("button").css("background", "hsl(230, 22%, 74%)");
        animation();
    }
}
let animation = () => {
    $("html").addClass("transition");
    window.setTimeout(() => {
        $("html").removeClass("transition");
    }, 200);
};
