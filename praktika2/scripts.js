document.addEventListener("DOMContentLoaded", creatAll);
var change_time = true
function creatAll(){
    document.getElementById("img").style.backgroundImage = "url(01.jpg)"
    document.getElementById("click_count").addEventListener("click",counter)
    document.getElementById("change_text").addEventListener("click",change_text)
    document.getElementById("change_bg").addEventListener("click",change_bg)
}
function counter(){
    if (parseInt(document.getElementById("count").textContent) == 5){
        ocument.getElementById("click_count").disabled = true;
    }
    document.getElementById("count").textContent = parseInt(document.getElementById("count").textContent)+1
}
function change_text(){
    document.getElementById("changed_text").textContent = document.getElementById("text").value
}
function change_bg(){
    if (change_time){
        if (document.getElementById("img").style.backgroundImage == 'url("01.jpg")'){
            document.getElementById("img").style.backgroundImage = 'url("02.jpg")'
        }else{
            document.getElementById("img").style.backgroundImage = 'url("01.jpg")'
        }
        change_time = false
        setTimeout(change_bool,600)
    }
    console.lo
}
function change_bool(){
    if(change_time){
        change_time = false
    }else{
        change_time = true
    }
}