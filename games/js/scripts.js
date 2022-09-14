$(document).ready(function () {
    var text = $("#home").html()
    var count = 0;
    $("#home").html("");
    for (let i of text){
        var span = document.createElement("span");
        span.textContent = i;
        span.style.textShadow = "0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white, 0px 0px 3px white"+",0px 0px 15px " + colors[count%colors.length]+", 0px 0px 15px " + colors[count%colors.length]+", 0px 0px 15px " + colors[count%colors.length];
        span.style.color = colors[count%colors.length]
        count += 1;
        document.getElementById("home").appendChild(span);
    }
    count = 0;
    var unq_kinds = [];
    for (i of games){
        for (j of i.genres){
            if(!unq_kinds.includes(j)){
                unq_kinds.push(j);
                var li = document.createElement("li");
                var text = document.createElement("p");
                text.textContent = j;
                text.style.color = colors[count%colors.length];
                text.style.textShadow = "0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white"+",0px 0px 5px " + colors[count%colors.length]+", 0px 0px 5px " + colors[count%colors.length]+", 0px 0px 5px " + colors[count%colors.length];
                li.appendChild(text);
                document.getElementById("aside_content").appendChild(li);
                count += 1;
            }
        }
    }
});