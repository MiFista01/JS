$(document).ready(function () {
    // Изготовление верхушки
    $(".games").height("50vw");
    $("#scroll").height("50vw");
    $(".games").slideUp(0);
    $("#scroll").slideUp(0);
    $(".all_games").slideUp(0);
    $(".description").slideUp(0);
    $(".text").css("margin-top", "0px");
    $("#footer").css("margin-top", "0px");
    $(".aside_content").css("margin-bottom", "0px");
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
    // Изготовление верхушки

    // Изготовление асайда
    count = 0
    let unq_kinds = []
    for (i of games){
        for (j of i.genres){
            if(!unq_kinds.includes(j)){
                unq_kinds.push(j);
                var li = document.createElement("li");
                var text = document.createElement("p");
                text.textContent = j;
                text.id = j.replace(" ","_");
                text.style.color = colors[count%colors.length];
                text.style.textShadow = "0px 0px 2px white, 0px 0px 2px white, 0px 0px 2px white"+",0px 0px 5px " + colors[count%colors.length]+", 0px 0px 5px " + colors[count%colors.length]+", 0px 0px 5px " + colors[count%colors.length];
                li.appendChild(text);
                document.getElementById("aside_content").appendChild(li);
                count++;
            }
        }
    }
    // Изготовление асайда

    // проверка на клик для дома
    $("#home").click(function (e) { 
        $("#scroll").slideUp(500, function(){
            $(".games").slideUp(500)
            $("#home_page").slideDown(500);
            old_array = []
            sessionStorage.setItem("count",0)
            $(".all_games").slideUp(0);
            $(".text").css("margin-top", "0px");
            $(".aside_content").css("margin-bottom", "0px");
            $("#footer").css("margin-top", "0px");
        });
        
    });
    // проверка на клик для дома

    // Проверка клика и её реакция
    var old_array = []
    for (i of unq_kinds){
        $("#"+i.replace(" ","_")).click(function (e) {
            let new_array = games.filter(a => a.genres.includes(e.target.id.replace("_"," ")));
            if(JSON.stringify(old_array) !== JSON.stringify(new_array)){
                $("#home_page").slideUp(500);
                $(".games").slideDown(500,function(){
                    $(".text").css("margin-top", "-20vw");
                    $(".aside_content").css("margin-bottom", "31vw");
                    $("#footer").css("margin-top", "14vw");
                    $(".all_games").slideDown(500)
                    $("#scroll").slideUp(500,function(){
                        $(".games_scroll").empty();
                        $(".block_scroll").empty();
                        old_array = new_array
                        let count = 0
                        for (j of old_array){
                            // создание главного элемента
                            let game = document.createElement("div");
                            game.id = count;
                            game.className = "game";
                            game.style.margin = "0";
                            let img = document.createElement("div");
                            img.style.backgroundImage = "url(imgs/"+j.poster+")";
                            game.appendChild(img);
                            let header = document.createElement("h2");
                            header.textContent = j.name;
                            header.style.color = "white";
                            header.style.textAlign = "center";
                            game.appendChild(header);
                            let text = document.createElement("p");
                            text.textContent = "Подробнее...";
                            text.style.color = "white";
                            text.style.textAlign = "center";
                            text.style.cursor = "pointer";
                            text.id = j.anchor;
                            game.appendChild(text);
                            document.getElementById("scroll").appendChild(game);
                            $("#"+j.anchor).click(function (e) { 
                                create_description(e);
                            });
                            // создание главного элемента

                            // создание вторичного элемента
                            let game_unit = document.createElement("div");
                            game_unit.id = String(count)+String(count);
                            game_unit.className = "game_unit"
                            game_unit.style.backgroundImage = "url(imgs/"+j.poster+")";
                            document.getElementById("block_scroll").appendChild(game_unit)
                            $("#"+String(count)+String(count)).click(function (e) { 
                                work_second_slider(e)
                            });
                            // создание вторичного элемента
                            if (count != 0){
                                $("#"+count).slideUp(0);
                            }
                            sessionStorage.setItem("count", 0)
                            count ++;
                            
                        }
                        $("#scroll").slideDown(500)
                    })
                });
            }
        });
    }
    // Проверка клика и её реакция

    // Работа с сглавным слайдером
    var time = 1000
    $("#left").click(function (e) { 
        let number = Number(sessionStorage.getItem("count"));
        console.log("#"+number)
        $("#"+number).slideUp(time, function(){
            number --;
            if (number < 0){
                number = old_array.length+number;
            }
            number %= old_array.length;
            $("#"+number).slideDown(time);
            sessionStorage.setItem("count",number);
        });
        
    });
    $("#right").click(function (e) { 
        let number = Number(sessionStorage.getItem("count"));
        $("#"+number).slideUp(time, function(){
            number ++;
            number %= old_array.length;
            $("#"+number).slideDown(time);
            sessionStorage.setItem("count",number);
        });
        
    });
    // Работа с сглавным слайдером

    // обработка слайдера
    function work_second_slider(target){
        let number = sessionStorage.getItem("count");
        $("#"+number).slideUp(1000, function(){
            $("#"+target.target.id.slice(0,1)).slideDown(1000);
            sessionStorage.setItem("count",target.target.id.slice(0,1))
        });
    }
    // обработка слайдера

    // обработка стрелок нижнего слайдера
    var position = 0
    $("#all_games_left").click(function (e) { 
        if(old_array.length > 8){
            position++;
            if(position > 0){
                position = -old_array.length+8
            }
            console.log(position*$("#00").width())
            document.getElementById("block_scroll").style.marginLeft = position*$("#00").width()+"px";
        }
    });
    $("#all_games_right").click(function (e) { 
        if(old_array.length > 8){
            position--;
            if(position < -old_array.length+8){
                position = 0
            }
            console.log(position*$("#00").width())
            document.getElementById("block_scroll").style.marginLeft = position*$("#00").width()+"px";
        }
    });
    // обработка стрелок нижнего слайдера

    // создание описание игры
    function create_description(target){
        for (i of games){
            if(i.anchor == target.target.id){
                $(".games").slideUp(500, function(){
                    $(".text").css("margin-top", "0px");
                    $(".all_games").slideUp(500, function(){
                        $(".description").slideDown(500);
                    });
                });
                $("#link").attr("href", "imgs/"+i.poster);
                $("#link").attr("data-title", i.name);
                $(".des_img").css("background-image","url(imgs/"+i.poster+")");
                $("#des_header").text(i.name);
                $("#des_def").text("Разработчик: "+i.developer);
                $("#des_geners").text("Жанры: ");
                for (j of i.genres){
                    $("#des_geners").text($("#des_geners").text()+j+"/ ");
                }
                $("#des").text(i.description);
            }
        }
    }
    // создание описание игры

    // обработка возвращения к главному слайдеру
    $("#des_back").click(function (e) { 
        $(".description").slideUp(500, function(){
            $(".text").css("margin-top", "-20vw");
            $(".games").slideDown(500);
            $(".all_games").slideDown(500);
        });
    });
    // обработка возвращения к главному слайдеру
});