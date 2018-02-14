function resetNavDisplay(){
    document.getElementsByClassName("page-nav")[0].style.display="block";
    document.getElementById("project-desc").style.display="none";
}
function displayProjectInfo(){
    document.getElementsByClassName("page-nav")[0].style.display="none";
    document.getElementById("project-desc").style.display="block";
}
function setProjectInfo(index){
    const projectInfo = [
        {
            title:"CryptoApp",
            desc:"a realtime cryptocurrency alert app that sends you text alerts. Alerts are sent based on changes in the crypto currency market and the user's preferences.",
            tech:"PostgreSQL  |  Html  |  Css  |  Javascript  |  Sequelize  |  Node.Js  |  Express",
            gifUrl:"https://thumbs.gfycat.com/CavernousRepulsiveHammerheadbird-size_restricted.gif"
        },
        {
            title:"2048",
            desc:"This was a attempt at replicating the popular game '2048' using only frontend languages.",
            tech:"HTML  |  CSS  |  Javascript",
            gifUrl:"https://thumbs.gfycat.com/BaggyFabulousAfricangoldencat-size_restricted.gif"
        },
        {
            title:"Chomper",
            desc:"This was a group project built using the MERN stack. Our goal was to create a mobile first app that will create 1 week meal plans for our users based on their preferences.",
            tech:"MongoDB  |  Mongoose  |  React  |  HTML  |  CSS  |  Javascript  |  Node.Js  |  Express",
            gifUrl:"https://thumbs.gfycat.com/FrankMealyIbex-size_restricted.gif"
        },
        {
            title:"Project 4",
            desc:"No project data yet..",
            tech:"No project data yet..",
            gifUrl:"https://media1.giphy.com/media/xULW8lV6w4hbkVOJzi/giphy.gif"
        }
    ]
    document.getElementById("project-desc-title").innerText = projectInfo[index].title;
    document.getElementById("project-desc-summary").innerText = projectInfo[index].desc;
    document.getElementById("project-desc-tech").innerText = projectInfo[index].tech;
    document.getElementById("project-desc-img").src = projectInfo[index].gifUrl;
    displayProjectInfo();
}
function addListeners(){
    //adding event listeners to nav items
    let x = document.getElementsByClassName("nav-item");
    for(let i=0;i<x.length;i++){
        x[i].addEventListener("click",function(){
            if(this.getAttribute("id")!=="selected-nav-item"){
                document.getElementById("selected-nav-item").removeAttribute("id");
                this.setAttribute("id","selected-nav-item");
            }
        });
    }
    //adding event listeners for project preview
    x = document.getElementsByClassName("project-preview");
    for(let i=0;i<x.length;i++){
        x[i].addEventListener("mouseover",function(){
            /*
                Todo:
                []-Display data relating to the current project being hovered in the navbar
                []-Display buttons over item being hovered
                    ( View on github & Live site )
            */
           setProjectInfo(i);
        });

        x[i].addEventListener("mouseout",function(){
            resetNavDisplay();
        })
    }
}
window.onload = (function(){
    addListeners();
})();