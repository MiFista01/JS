var aaa = $(animals)
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
							$("#"+i.anchor).click(function (e) {
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