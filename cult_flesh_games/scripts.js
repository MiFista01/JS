var games = {
    "My Friend Pedro":{ "Разработчик":"DeadToast Entertainment",
                        "Издатель":"Devolver Digital",
                        "Дата выпуска":"20 июня 2019",
                        "жанр":"Shoot 'em up",
                        "Движок":"Flash",
                        "Геймплей":"В My Friend Pedro игрок проходит через множество тематических уровней, убивая врагов по приказу говорящего банана по имени Педро. Наряду с возможностью замедлять время, игрок теперь может пинать предметы или врагов, разделять выбор между целями и, вращаясь, уклоняться от пуль. В игре также присутствуют элементы паркура, такие как сальто, прыжки через стену и перекаты, которые можно использовать для увеличения количества начисляемых очков.",
                        "img":"imgs/pedro.jpg"},
    "Fancy Pants Adventure 2":{ "Разработчик":"	Brad Borne",
                        "Издатель":"Armor Games",
                        "Дата выпуска":"Март 14, 2006",
                        "жанр":"Платформер",
                        "Движок":"Flash",
                        "Геймплей":"Игрок проводит Fancy Pants Man через открытые уровни, на которых есть препятствия, которые нужно преодолеть, и враги, которых нужно избежать или победить. Эти враги включают пауков, улиток и мышей, вооруженных оружием. Врагов можно победить, прыгнув на них и раздавив Человеком с модными штанами, который также может спрыгнуть с них, чтобы совершить усиленный прыжок",
                        "img":"imgs/fantsy.jpg"},
    "Super Mario 63":{ "Разработчик":"Fan Art game",
                        "Издатель":"--",
                        "Дата выпуска":"10 июня 2009 г.",
                        "жанр":"Платформер",
                        "Движок":"Flash",
                        "Геймплей":"Цель игры — пройти через Грибное королевство, ускользая или уничтожая солдат черепашьего Короля Купы (также известного как Боузер), чтобы спасти захваченную им в плен Принцессу.",
                        "img":"imgs/mario.jpg"}
}
var variant = 0;
var contents;
document.addEventListener("DOMContentLoaded",creat)
function creat(){
    document.getElementById("img").style.backgroundImage = "url("+games["My Friend Pedro"]["img"]+")"
    document.getElementById("game_name").innerHTML = "My Friend Pedro"
    contents = document.getElementById("content")
    var text = ""
    for (i in games["My Friend Pedro"]){
        if (i != "img"){
            text += "<p>"+i+": "+games["My Friend Pedro"][i]+"</p>"
        }
    }
    contents.innerHTML = text
    document.getElementById("left").addEventListener("click",left)
    document.getElementById("right").addEventListener("click",right)
}
function left(){
    variant -= 1
    if (variant < 0){
        variant += Object.keys(games).length
    }
    change()
}
function right(){
    variant += 1
    if (variant > Object.keys(games).length-1){
        variant -= Object.keys(games).length
    }
    console.log(variant)
    change()
}
function change(){
    var numb = 0
    for (i in games){
        if (numb == variant){
            document.getElementById("game_name").innerHTML = i
            var text = ""
            for (j in games[i]){
                if (j != "img"){
                    text += "<p>"+j+": "+games[i][j]+"</p>"
                }
            }
            contents.innerHTML = text
            document.getElementById("img").style.backgroundImage = "url("+games[i]["img"]+")"
        }
        numb += 1
    }
}