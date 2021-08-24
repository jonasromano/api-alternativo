document.addEventListener("DOMContentLoaded",function(e){
    let miRegistro = document.getElementById("miRegistro");
    miRegistro.onsubmit = function(e){
        e.preventDefault();
        let formData = new FormData(this);
        let jsonData = {};
        for(let[K , v] of formData){
            jsonData[K] = v;
        }
        console.log(jsonData);
    }
});