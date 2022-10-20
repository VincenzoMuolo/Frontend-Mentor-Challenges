
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
const diff= ["newbie","junior","intermediate","advanced"];

function expandChosenDif( chosedDiff ){
    if(localStorage.getItem('lastChoise')==chosedDiff.id){
        /*The user want to close the difficulty page selected,
            so i need to recreate the initial situation*/
        transformRows(chosedDiff.id, 1);
        localStorage.setItem('lastChoise',' ');
    }
    else {
        /*The user select a different difficulty than before,
            so i have to make disappear the other ones*/  
        transformRows(chosedDiff.id, 0);
        localStorage.setItem('lastChoise',chosedDiff.id);
    }

}

function transformRows(checkDiff, value){
    diff.forEach(element => {
        if(element!=checkDiff){
            document.getElementById(element).style.height="0%";
            document.getElementById(element).style.opacity=0;
            document.getElementById(element).style.fontSize="0rem";
            document.getElementById(element).style.transition=
                "400ms height ease-out, 300ms font-size ease-in, 400ms opacity ease-out";
        }else{
            document.getElementById(element).style.height="95%";
            document.getElementById(element).style.transition=
                "400ms height ease-in-out";
        }
    });
}
