$(document).ready(function () {
    var text = $("#home").html()
    var count = 0;
    $("#home").html("");
    console.log(count%colors.length);
    for (let i of text){
        var span = document.createElement("span");
        span.textContent = i;
        span.style.textShadow = "0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white"+",0px 0px 10px " + colors[count%colors.length]+", 0px 0px 10px " + colors[count%colors.length]+", 0px 0px 10px " + colors[count%colors.length];
        span.style.color = "white"
        count += 1;
        document.getElementById("home").appendChild(span);
    }
});