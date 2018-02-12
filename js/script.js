function addListeners(){
    //adding event listeners to nav items
    let x = document.getElementsByClassName("landing-nav-item");
    for(let i=0;i<x.length;i++){
        x[i].addEventListener("click",function(){
            if(this.getAttribute("id")!=="selected-landing-nav-item"){
                document.getElementById("selected-landing-nav-item").removeAttribute("id");
                this.setAttribute("id","selected-landing-nav-item");
            }
        });
    }
}
window.onload = (function(){
    addListeners();
})();