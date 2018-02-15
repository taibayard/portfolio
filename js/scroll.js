(function(){
    //Setting each section to a variable
    const landing = document.getElementById("landing");
    const projects = document.getElementById("projects");
    const about = document.getElementById("about");
    window.addEventListener("scroll",function(){
        const offset = 200; //Will be the "breakpoint" for setting the active tab
        //Getting position of the bottom (y axis)
        const landing_bottom = landing.getBoundingClientRect().bottom;
        const projects_bottom = projects.getBoundingClientRect().bottom;
        const about_bottom = about.getBoundingClientRect().bottom;
        //checking bottom position
        if(landing_bottom>offset){
            setActive(0);
        }else if(projects_bottom > offset){
            setActive(1);
        }else if(about_bottom > offset){
            setActive(2);
        }
    })
    //Sets the new active item. in this case an id was used to identify the current nav item.
    function setActive(n){
        document.getElementById("selected-nav-item").removeAttribute("id"); //The id of your " selected item "
        document.getElementsByClassName("nav-item")[n].setAttribute("id","selected-nav-item");
    }
}())