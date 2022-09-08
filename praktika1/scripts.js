var array_numbers = []
var tasks = "";
var count_task = 0
function randomInt_range(min,max){
    return Math.floor(Math.random() * (max - min) ) + min;
}
function create(){
    document.getElementById("generate").addEventListener("click",generate_tasks)
    document.getElementById("check").addEventListener("click",check);
    document.getElementById("remove").addEventListener("click",remove_values)
    
}
function create_tasks(count_tasks){
    var task = "";
    for (i = 0; i< count_tasks;i++){
        task = `<div class="line"><p><span id="`+i+`1"></span> * <span id="`+i+`2"></span> = <input type="text" id="answer`+i+`" style="width: 2vw;"></p>`+`<p class = "bool" id="bool`+i+`"> </p></div>`
        tasks += task
    }
    document.getElementById("lines").innerHTML = tasks
}
function generate_tasks(){
    count_task = document.getElementById('count_tasks').value;
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value)
    array_numbers = []
    tasks = ""
    create_tasks(count_task)
    console.log(max)
    for (i = 0; i< count_task; i++){
        var numb1 = randomInt_range(min,max);
        var numb2 = randomInt_range(min,max);
        array_numbers.push([numb1,numb2]);
        document.getElementById(i+"1").innerHTML = numb1;
        if (numb2 < 0){
            numb2 = "("+numb2+")";
        }
        document.getElementById(i+"2").innerHTML = numb2;
    }
}
function check(){
    for (i = 0; i<count_task; i++){
        var summ = array_numbers[i][0]*array_numbers[i][1];
        if(summ == document.getElementById('answer'+i).value){
            document.getElementById("bool"+i).innerHTML = "Ответ правильный";
            document.getElementById("bool"+i).style.color = "green";
            document.getElementById('answer'+i).style.backgroundColor = "green"
        }
        else{
            document.getElementById("bool"+i).innerHTML = "Ответ не правильный";
            document.getElementById("bool"+i).style.color = "red";
            document.getElementById('answer'+i).style.backgroundColor = "red"
        }
    }
}
function remove_values(){
    document.getElementById('count_tasks').value = ""
    document.getElementById('min').value = ""
    document.getElementById('max').value = ""
    document.getElementById("lines").innerHTML = ""
    tasks = ""
    array_numbers = []
}
document.addEventListener("DOMContentLoaded",create);
