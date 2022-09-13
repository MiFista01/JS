var  category=["Кошки","Собаки","Попугаи","Канарейки"];	
var  	animals=[
		{
		classname:"Кошки",
		name:"Домашняя кошка",
		image:"cat.jpg",
		description:"Кошка, или домашняя кошка, — домашнее животное, одно из наиболее популярных «животных-компаньонов»",
		anchor:"home_cat"
		},
		{
		classname:"Кошки",
		name:"Лесная кошка",
		image:"mets_cat.jpg",
		description:"лесная кошка — порода полудлинношёрстных кошек, наиболее распространена в странах Северной Европы",
		anchor:"forest_cat"
		},
		{
		classname:"Кошки",
		name:"Камышовый кот",
		image:"kamos.jpg",
		description:"Камышовый кот, или хаус, или камышовая кошка, или болотная рысь (лат. Felis chaus) — хищное млекопитающее из семейства кошачьих. Занесён в Красную книгу России, как редкий и охраняемый вид",
		anchor:"reed_cat"
		},	
		{
		classname:"Собаки",
		name:"Немецкая овчарка",
		image:"ovharka.jpg",
		description:"Немецкая овчарка — порода собак, изначально использовалась в качестве пастушьей и служебно-розыскной собаки",
		anchor:"german_shepherd"
		},
		{
		classname:"Собаки",
		name:"Лабрадор",
		image:"labrador.jpg",
		description:"Лабрадор-ретривер — порода собак. Первоначально была выведена в качестве охотничьей подружейной собаки",
		anchor:"labrador"
		},
		{
		classname:"Собаки",
		name:"Бульдог",
		image:"buldog.jpg",
		description:"Английский бульдог — короткошёрстная порода собак типа мастифов. По способу использования стандарт относит породу к собакам-телохранителям и компаньонам",
		anchor:"bulldog"
		},
		{
		classname:"Попугаи",
		name:"Ара",
		image:"ara.jpg",
		description:"Ара – это очень крупные, яркие экзотические попугаи, длина тела которых может достигать 98 см (гиацинтовый ара)",
		anchor:"ara"
		},
		{
		classname:"Попугаи",
		name:"Какаду",
		image:"kakadu.jpg",
		description:"Какаду – это очень красивые, крупные попугаи с контрастным, высоким хохолком, благодаря которому их невозможно спутать с другими попугаями",
		anchor:"cockatoo"
		},
		{
		classname:"Попугаи",
		name:"Неразлучники",
		image:"nerasluchnik.jpg",
		description:"Неразлучники – красивые, яркие, миниатюрные попугаи, длина тела которых составляет около 17 см, а вес примерно 50 грамм",
		anchor:"lovebirds"
		}
		];
var buttons = []
$(document).ready(function () {
	$("#homepage").css(
        "backgroundImage", "url(imgs/animals.jpg)");
	$("#home").click(function (e) { 
		$(".animals").fadeOut(0);
		$("#homepage").fadeIn(0);
		$(".animals").attr("id", "");
		$("#description").fadeOut(0);
	});
	$(".animals").hide();
	$("#description").hide();
	$("#back_to_kind").click(function (e) { 
		$("#description").fadeOut(0);
		$(".animals").fadeIn(0);
		$("#homepage").fadeOut(0);
	});
    for (i of category){
        li = document.createElement("li")
        text = document.createElement("p")
        text.textContent = i
        text.id = i
        li.appendChild(text)
        document.getElementById("categories").appendChild(li)
		$("#"+i).click(function (e) {
			var unique = animals.filter(a => a.classname == e.target.id)
			$("#name").html(e.target.id);
			$("#homepage").fadeOut(0);
			$(".animals").fadeIn(0);
			$("#description").fadeOut(0);
			if (unique.length > 0){
				$("#problem").html("");
				if ($(".animals").attr("id") != e.target.id){
					var count = 1
					
					for (i of animals){
						if (i.classname == e.target.id){
							$(".animals").attr("id", e.target.id);
							var text = `
								<div class="`+i.anchor+`"></div>
								<p>`+i.name+`</p>
								<button id="`+i.anchor+`">Подробнее</button>`
							$("#"+count).html(text);
							$("#"+count).click(function (e) {
								$(".animals").fadeOut(0);
								$("#description").fadeIn(0);
								var required_array = animals.filter(a=> a.anchor == e.target.id)
								$("#animal_name").html(required_array[0].classname+": "+required_array[0].name)
								$("#animal_img").css(
									"backgroundImage", "url(imgs/"+required_array[0].image+")");
								$("#animal_des").html(required_array[0].description);
							});
							count += 1
						}
					}
				}
			}else{
				$(".animals").attr("id", "");
				$("#problem").html("Данные отсутствуют");
				var count = 1
				for (i of animals){
					$("#"+count).html("")
					count += 1
				}
			}
		});
		
    }
});