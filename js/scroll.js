(()=>{
    //Setting each section to a variable
    const landing = document.getElementById("landing");
    const projects = document.getElementById("projects");
    const about = document.getElementById("about");
    const smoothScrolling = () => {
        $("#landing-nav").click(function() {
            $('html,body').animate({
                scrollTop: $("#landing").offset().top},
                'slow');
        });
        $("#projects-nav").click(function() {
            $('html,body').animate({
                scrollTop: $("#projects").offset().top},
                'slow');
        });
        $("#about-nav").click(function() {
            $('html,body').animate({
                scrollTop: $("#about").offset().top},
                'slow');
        });
    }
    const setActive = (n) => {
        document.getElementById("selected-nav-item").removeAttribute("id");
        document.getElementsByClassName("nav-item")[n].setAttribute("id","selected-nav-item");
    }
    window.addEventListener("scroll",()=>{
        const offset = 500; //Will be the "breakpoint" for setting the active tab
        //Getting position of the bottom (y axis)
        const landing_bottom = landing.getBoundingClientRect().bottom;
        const projects_bottom = projects.getBoundingClientRect().bottom;
        const about_bottom = about.getBoundingClientRect().bottom;
        //checking bottom position
        if(landing_bottom>offset){
            document.getElementsByClassName("first-nav-item")[0].style.visibility="hidden";
            document.getElementsByClassName("first-nav-item")[0].style.opacity="0";
            setActive(0);
        }else if(projects_bottom > offset){
            setActive(1);
            document.getElementsByClassName("first-nav-item")[0].style.visibility="visible";
            document.getElementsByClassName("first-nav-item")[0].style.opacity="1";
        }else if(about_bottom > offset){
            document.getElementsByClassName("first-nav-item")[0].style.visibility="visible";
            document.getElementsByClassName("first-nav-item")[0].style.opacity="1";
            setActive(2);
        }
    });
    smoothScrolling();
})();