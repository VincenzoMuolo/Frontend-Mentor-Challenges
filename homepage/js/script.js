/*GLOBAL VARIABLES*/

const difficulty= ["newbie","junior","intermediate","advanced"];

var config = {
    /* Reduced card attributes */
    closingCardHeight  : ["0%"," "],
    closingCardWidth   : ["0%","20%"],
    opacity    : [0,1],
    fontsize   : ["0em","1.2em"],
    /* Expanded card attributes */
    expandCardHeight    : ["90%"," "],
    expandCardWidth     : ["100%","20%"],
    expandCardHdelay    : ["400ms","0ms"],
    expandCardWdelay    : ["200ms","0ms"],
    titleBottom      : ["85%","0"],
    titleDelay    : ["300ms","0ms"],
    marginTop   : ["30px","10px"],
    counterDelay : ["350ms","550ms"],
    /* challenge container */
    containerWidth : ["90%","0%"],
    containerFont :["1em","0em"],
    containerAnimTime : ["300ms","200ms"],
    challengeWidthDelay : ["300ms","0ms"],
    challengeFontDelay : ["800ms","0ms"],
    moveRight : ["auto","25px"]
};

function setHeight(){
    adjustcontent();

    /*Readapt if the screen change*/
    window.addEventListener("resize", function(){   
        this.location.reload();
        adjustcontent();  
    });
}

function adjustcontent(){
    let navHeight=document.getElementById("nav").offsetHeight,
        footerHeight=document.getElementById("footer").offsetHeight,
        availPage=(screen.availHeight-navHeight-footerHeight),
        margintop;
    if(document.body.clientWidth<1280){
        availPage=(availPage*0.8);
        margintop=(availPage*0.1);
    }else if(document.body.clientWidth>=1208){
        availPage=(availPage*0.6);
        margintop=(availPage*0.2);
    }
    document.getElementById("container").style.marginTop=margintop+"px";
    document.getElementById("container").style.height=availPage+"px";
}

function expandChosenDifficulty( chosedDifficulty){
    if(document.body.clientWidth<1280){
        config.closingCardHeight[1]="18%";
        config.expandCardHeight[1]="18%";
    }else if(document.body.clientWidth>=1280){
        config.closingCardHeight[1]="30%";
        config.expandCardHeight[1]="30%";
    }
    if(localStorage.getItem('lastChoise')==chosedDifficulty.id){
        /*Expand animation off*/
        transformRows(chosedDifficulty.id,1);
        localStorage.setItem('lastChoise',null);
    }
    else {
        /*Expand animation on*/  
        transformRows(chosedDifficulty.id, 0);

        localStorage.setItem('lastChoise',chosedDifficulty.id);

    }

}

function transformRows(checkdifficulty, value){
    difficulty.forEach(element => {
        /*Cards Changes */
        if(element!=checkdifficulty){
            if(document.body.clientWidth>=1280){
                document.getElementById(element).style.width=config.closingCardWidth[value];
            }
            document.getElementById(element).style.height=config.closingCardHeight[value];
            document.getElementById(element).style.opacity=config.opacity[value];
            /*Cards font sizes */
            document.getElementById(element).style.fontSize=config.fontsize[value];
            document.getElementById(element).style.transition=
            "450ms height ease-in-out, 450ms width ease-in ,"+
            "500ms font-size ease-in, 450ms opacity ease-out";
            /*Challenge counter */
            document.getElementById(element+"-counter").style.opacity=config.opacity[value];
            document.getElementById(element+"-counter").style.marginTop=config.marginTop[value];
            document.getElementById(element+"-counter").style.transition=
            "150ms opacity ease-out "+config.counterDelay[value]
                +", 150ms margin-top ease-in "+config.counterDelay[value];
        }else{
            /*Card changes*/
            if(document.body.clientWidth>=1280){
                document.getElementById(element).style.width=config.expandCardWidth[value];
            }
            document.getElementById(element).style.height=config.expandCardHeight[value];
            document.getElementById(element).style.transition=
            "500ms height ease-in-out "+config.expandCardHdelay[value]+" , 500ms width ease-out "+config.expandCardWdelay[value];
            /*Title change*/
            document.getElementById(element+"-title").style.bottom=config.titleBottom[value];
            document.getElementById(element+"-title").style.transition=
                "500ms bottom ease-in "+config.titleDelay[value];
            /*Challenge counter */
            document.getElementById(element+"-counter").style.opacity=config.opacity[value];
            document.getElementById(element+"-counter").style.marginTop=config.marginTop[value];
            document.getElementById(element+"-counter").style.transition=
                "250ms opacity ease-out "+config.counterDelay[value]
                    +", 200ms margin-top ease-in "+config.counterDelay[value];
            /*Challenge container*/
            document.getElementById(element+"-challenge-container").style.width=config.containerWidth[value];
            document.getElementById(element+"-challenge-container").style.fontSize=config.containerFont[value];
            document.getElementById(element+"-challenge-container").style.marginRight=config.moveRight[value];
            document.getElementById(element+"-challenge-container").style.transition=
                "500ms width ease-out "+config.challengeWidthDelay[value]+
                ","+config.containerAnimTime[value]+" font-size ease-in "+config.challengeFontDelay[value]+
                ",150ms margin-right ease-out";     
        }
    });
}

function loadChallenge(challenge){
    switch(challenge.id){
        case "newbie-challenge-1":
            changePageAnim();
            setTimeout(function waitAnim(){
                location.href="./1-Newbie/interactive-rating-component-main/html/index.html";
            },400);
            break;
        default :
            break;
    }
}

function changePageAnim(){
    document.getElementById("nav").classList.toggle("nav-animation-in");
    document.getElementById("nav").classList.toggle("nav-animation-out");
}