document.addEventListener("DOMContentLoaded",add);
function add(){
    document.getElementById("treatment").addEventListener("click",treatment_code)
}
var places = {"J":"Jõhvi","S":"Sillamae","N":"Narva"}
var school = {"P":"Pohikool","K":"Keskkool"}
var language = {"R":"Vene","E":"Eesti"}
function remove(){
    for(var i of document.getElementById("result").children){
        for(var j of i.children){
            j.textContent = "--"
        }
    }
}
function treatment_code(){
    var date = new Date().getFullYear().toString().substr(2,2)
    var code = document.form.code.value
    console.log(date-code.substr(code.length-2,2))
    if(date-code.substr(code.length-2,2) > 0 && date-code.substr(code.length-2,2) < 4 && (code.length == 6 ||code.length == 7)){
        document.getElementById("code").textContent = code
        document.getElementById("koht").textContent = places[code.substr(0,1)]
        document.getElementById("baas").textContent = school[code.substr(1,1)]
        document.getElementById("kursus").textContent = date-code.substr(code.length-2,2)+1
        document.getElementById("keel").textContent = "--"
        if (code.substr(code.length-2,2) <= 19 ){
            if (code.length == 7){
                document.getElementById("keel").textContent = language[code.length-3,1]
                document.getElementById("problem").textContent = ""
            }else{
                remove()
                document.getElementById("problem").textContent = "вы ввели неправильно код, не хватает буквы языка"
            }
        }else{
            if (code.length == 6){
                document.getElementById("keel").textContent = "--"
                document.getElementById("problem").textContent = ""
            }else{
                remove()
                document.getElementById("problem").textContent = "вы ввели неправильно код"
            }
        }
    }else{
        remove()
        document.getElementById("problem").textContent = "вы ввели неправильно код"
    }
}
