var countries = {"Австрия":["Вена","Грац","Зальцбург","Инсбрук","Кримль","Майрхофен"<"Портшах","Хайлигенблют"],
                "Германия":["Баден-Баден","Кёльн","Линдау","Мюнхен","Франкфурт","Хёхст","Хоэншвангау"],
                "Дания":["Копенгаген","Орхус","Оденсе","Ольборг","Эсбьерг","Раннерс","Кольдинг"],
                "Испания":["Андалусия","Арагон","Валенсия","Галисия","Каталония","Коста Бланка","Мадрид"],
                "Кипр":["Айя-Напа","Никосия","Пафос","Петра-ту-Ромью","Полис","Троодос"]}
document.addEventListener("DOMContentLoaded",creat);
function creat(){
    var text = "<option disabled selected>Выбрать город</option>"
    for (let key in countries) {
        text += `<option value="${key}">${key}</option>`
      }
    let raz = document.getElementById("list_countries")
    document.getElementById("list_countries").innerHTML = text
    raz.addEventListener("change", function() {
        text_cities = "<option disabled selected>Выбрать город</option>"
        for (let key of countries[this.value]){
            text_cities += `<option value="${key}">${key}</option>`
        }
        document.getElementById("list_cities").innerHTML = text_cities
    });
}


























