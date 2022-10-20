/*GLOBAL VARIABLES*/
const diff= ["newbie","junior","intermediate","advanced"];
var config = {
    heightlow  : ["0%","20%"],
    opacity    : [0,1],
    fontsize   : ["0em","1.2em"],
    heightup   : ["95%","20%"],
    bottom     : ["90%","0"],
    right      : ["100%","0"],
    delay      : ["300ms","100ms"],
};

function setHeight(){
    let navHeight=document.getElementById("nav").offsetHeight,
        availPage=(screen.availHeight-navHeight);
    if(screen.availHeight>900)  availPage=(availPage*0.7);
    else    availPage=(availPage*0.9);
    document.getElementById("container").style.height=availPage+"px";
    /*Readapt if the screen change*/
    window.addEventListener("resize", function(){   
        this.location.reload();
        this.setTimeout(function rest(){
            document.getElementById("container").style.height=availPage+"px";
        },1000);  
    });

}

function expandChosenDif( chosedDiff ){
    if(localStorage.getItem('lastChoise')==chosedDiff.id){
        /*Expand animation off*/
        transformRows(chosedDiff.id,1);
        localStorage.setItem('lastChoise',null);
    }
    else {
        /*Expand animation on*/  
        transformRows(chosedDiff.id, 0);
        localStorage.setItem('lastChoise',chosedDiff.id);
    }

}

function transformRows(checkDiff, value){
    diff.forEach(element => {
        if(element!=checkDiff){
            document.getElementById(element).style.height=config.heightlow[value];
            document.getElementById(element).style.opacity=config.opacity[value];
            document.getElementById(element).style.fontSize=config.fontsize[value];
            document.getElementById(element).style.transition=
                "400ms height ease-out, 300ms font-size ease-in, 400ms opacity ease-out";
        }else{
            document.getElementById(element).style.height=config.heightup[value];
            document.getElementById(element).style.transition=
                "400ms height ease-in-out";
            document.getElementById(element+"-title").style.bottom=config.bottom[value];
            document.getElementById(element+"-title").style.right=config.right[value];
            document.getElementById(element+"-title").style.transition=
                "300ms bottom ease-out, 450ms right ease-in-out "+config.delay[value];
        }
    });
}
