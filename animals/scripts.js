var  category=["Кошки","Собаки","Попугаи","Канарейки"];	
var  	animals=[
		{
		classname:"Кошки",
		name:"Домашняя кошка",
		image:"cat.jpg",
		description:"Кошка, или домашняя кошка, — домашнее животное, одно из наиболее популярных «животных-компаньонов»"
		},
		{
		classname:"Кошки",
		name:"Лесная кошка",
		image:"mets_cat.jpg",
		description:"лесная кошка — порода полудлинношёрстных кошек, наиболее распространена в странах Северной Европы"
		},
		{
		classname:"Кошки",
		name:"Камышовый кот",
		image:"kamos.jpg",
		description:"Камышовый кот, или хаус, или камышовая кошка, или болотная рысь (лат. Felis chaus) — хищное млекопитающее из семейства кошачьих. Занесён в Красную книгу России, как редкий и охраняемый вид"
		},	
		{
		classname:"Собаки",
		name:"Немецкая овчарка",
		image:"ovharka.jpg",
		description:"Немецкая овчарка — порода собак, изначально использовалась в качестве пастушьей и служебно-розыскной собаки"
		},
		{
		classname:"Собаки",
		name:"Лабрадор",
		image:"labrador.jpg",
		description:"Лабрадор-ретривер — порода собак. Первоначально была выведена в качестве охотничьей подружейной собаки"
		},
		{
		classname:"Собаки",
		name:"Бульдог",
		image:"buldog.jpg",
		description:"Английский бульдог — короткошёрстная порода собак типа мастифов. По способу использования стандарт относит породу к собакам-телохранителям и компаньонам"
		},
		{
		classname:"Попугаи",
		name:"Ара",
		image:"ara.jpg",
		description:"Ара – это очень крупные, яркие экзотические попугаи, длина тела которых может достигать 98 см (гиацинтовый ара)"
		},
		{
		classname:"Попугаи",
		name:"Какаду",
		image:"kakadu.jpg",
		description:"Какаду – это очень красивые, крупные попугаи с контрастным, высоким хохолком, благодаря которому их невозможно спутать с другими попугаями"
		},
		{
		classname:"Попугаи",
		name:"Неразлучники",
		image:"nerasluchnik.jpg",
		description:"Неразлучники – красивые, яркие, миниатюрные попугаи, длина тела которых составляет около 17 см, а вес примерно 50 грамм"
		}
		];
document.addEventListener("DOMContentLoaded",creat)
function creat(){
    $("#homepage").css(
        "backgroundImage", "url(imgs/animals.jpg)");
    for (i of category){
        li = document.createElement("li")
        text = document.createElement("p")
        text.textContent = i
        text.id = i
        li.appendChild(text)
        document.getElementById("animals").appendChild(li)
        $(i).click(function (e) { 
            e.preventDefault();
            console.log(this.textContent)
        });
    }
}