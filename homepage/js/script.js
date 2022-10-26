/*GLOBAL VARIABLES*/
const cardType=["newbie","junior","intermediate","advanced"];
var config = {
    /* Reduced card attributes */
    closeHeightSwitch   : ["50%","0%"],
    openHeightSwitch    : ["50%","100%"],
    closeWidthSwitch    : ["50%","0%"],
    openWidthSwitch     : ["50%","100%"],
    heightDelay         : ["0ms","350ms"],
    switchHeight        : [1,0],
    panelDelay          : ["200ms","0ms"],
    closeFontSize       : ["1em","0em"],
    moveUpTitle         : ["40%","2%"],
    challengeContainer  : ["0%","100%"],
    challengeFontSize   : ["0em","1em"],
    chContainerDelay    : ["0ms","300ms"]
}

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
        footerHeight=document.getElementById("footer").offsetHeight;
    document.getElementById("container").style.top=navHeight+"px";
    document.getElementById("container").style.bottom=footerHeight+"px";
    
}

function openCard(card){
    let newbie= document.getElementById("newbie"),  junior= document.getElementById("junior"),
        intermediate= document.getElementById("intermediate"),  advanced= document.getElementById("advanced"),
        panel1= document.getElementById("panel-1"), panel2= document.getElementById("panel-2"),
        switchValue, position=0, panelOff=0, panelOn=0, availWidth=document.body.clientWidth;

    if(card.id=="newbie"||card.id=="junior"){
        panelOff="panel-2";
        panelOn="panel-1";
        position=1;
        /* newbie and junior without delay */
    }else{
        panelOff="panel-1";
        panelOn="panel-2";
        position=0;
        /* intermediate and advanced without delay */
    }
    //If single panel
    if(availWidth<=768){
        if(document.getElementById(card.id).style.height=="100%"){
            switchValue=0;
            //
            document.getElementById("container").style.gap="0.5em";
            panel1.style.gap="0.5em";
            panel2.style.gap="0.5em";
            // 
        }    
        else{
            switchValue=1;
            //
            document.getElementById("container").style.gap="0em";
            panel1.style.gap="0em";
            panel2.style.gap="0em";
            // 
        } 
        cardType.forEach(element => {
            if(element!=card.id) {
                document.getElementById(element).style.height=config.closeHeightSwitch[switchValue];
                document.getElementById(panelOff).style.height=config.closeHeightSwitch[switchValue];
                document.getElementById(element).style.fontSize=config.closeFontSize[switchValue];
            }else {
                document.getElementById(element).style.height=config.openHeightSwitch[switchValue];
                document.getElementById(panelOn).style.height=config.openHeightSwitch[switchValue];
                document.getElementById(element+"-title").style.top=config.moveUpTitle[switchValue];
            }
        });
    //If two panel
    }else{
        if(document.getElementById(card.id).style.width=="100%"){
            switchValue=0;
            //
            document.getElementById("container").style.gap="0.5em";
            panel1.style.gap="0.5em";
            panel2.style.gap="0.5em";
            // 
        }
        else{
            switchValue=1;  
            //
            document.getElementById("container").style.gap="0em";
            panel1.style.gap="0em";
            panel2.style.gap="0em";
            //             
        } 
        if(card.id=="newbie"||card.id=="intermediate"){
            if(newbie.style.width!="100%"||newbie.style.width!="100%"){
                newbie.style.width="100%";
                intermediate.style.width="100%";
                junior.style.width="0%";
                advanced.style.width="0%";
                //
                if(card.id=="newbie"){
                    panel1.style.height="100%";
                    panel2.style.height="0%";
                    document.getElementById("newbie-title").style.top="2%";

                }else{
                    panel2.style.height="100%";
                    panel1.style.height="0%";
                    document.getElementById("intermediate-title").style.top="2%";
                }
            }else{
                setTimeout(function rest(){
                    newbie.style.width="50%";
                    intermediate.style.width="50%";
                    junior.style.width="50%";
                    advanced.style.width="50%";
                    document.getElementById("newbie-title").style.top="45%";
                    document.getElementById("junior-title").style.top="45%";
                    document.getElementById("intermediate-title").style.top="45%";
                    document.getElementById("advanced-title").style.top="45%";
                },200);
                panel1.style.height="50%";
                panel2.style.height="50%";                
            }
        }else if(card.id=="junior"||card.id=="advanced"){
            if(junior.style.width!="100%"||advanced.style.width!="100%"){
                junior.style.width="100%";
                advanced.style.width="100%";
                newbie.style.width="0%";
                intermediate.style.width="0%";
                //
                if(card.id=="junior"){
                    panel1.style.height="100%";
                    panel2.style.height="0%";
                    document.getElementById("junior-title").style.top="2%";
                }else{
                    panel2.style.height="100%";
                    panel1.style.height="0%";
                    document.getElementById("advanced-title").style.top="2%";
                }
            }else{
                setTimeout(function rest(){
                    newbie.style.width="50%";
                    intermediate.style.width="50%";
                    junior.style.width="50%";
                    advanced.style.width="50%";
                },200);
                document.getElementById("newbie-title").style.top="45%";
                document.getElementById("junior-title").style.top="45%";
                document.getElementById("intermediate-title").style.top="45%";
                document.getElementById("advanced-title").style.top="45%";
                panel1.style.height="50%";
                panel2.style.height="50%";                
            }
        }   
    }
    /*  ========================================
                    CHALLENGE CONTAINER
        =======================================*/
    if(document.getElementById(card.id+"-challenge-container")!=null){
        document.getElementById(card.id+"-challenge-container").style.width=config.challengeContainer[switchValue];
        document.getElementById(card.id+"-challenge-container").style.fontSize=config.challengeFontSize[switchValue];
        document.getElementById(card.id+"-challenge-container").style.transition=
        "500ms width ease-in-out "+config.chContainerDelay[switchValue]+
        ", 500ms font-size ease-in-out "+config.chContainerDelay[switchValue];
    }


    /*
    ***********************TRANSITIONS***********************
    */
    newbie.style.transition= "500ms width ease-in-out, 500ms font-size ease-out,"
    +"500ms height ease-in-out "+config.heightDelay[(config.switchHeight[0+position])*switchValue];
    
    junior.style.transition= "500ms width ease-in-out, 500ms font-size ease-out,"
    +"500ms height ease-in-out "+config.heightDelay[(config.switchHeight[0+position])*switchValue];
    
    intermediate.style.transition= "500ms width ease-in-out, 500ms font-size ease-out,"
    +"500ms height ease-in-out "+config.heightDelay[(config.switchHeight[1-position])*switchValue];
    
    advanced.style.transition= "500ms width ease-in-out, 500ms font-size ease-out,"
    +"500ms height ease-in-out "+config.heightDelay[(config.switchHeight[1-position])*switchValue];

    document.getElementById("newbie-title").style.transition="350ms top ease-in-out 250ms";
    document.getElementById("junior-title").style.transition="350ms top ease-in-out 250ms";
    document.getElementById("intermediate-title").style.transition="350ms top ease-in-out 250ms";
    document.getElementById("advanced-title").style.transition="350ms top ease-in-out 250ms";
    document.getElementById("container").style.transition="250ms gap ease-in-out";
    panel1.style.transition= "500ms height ease-in-out "+config.panelDelay[switchValue]+", 250ms gap ease-in-out";
    panel2.style.transition= "500ms height ease-in-out "+config.panelDelay[switchValue]+", 250ms gap ease-in-out";
    /*
    ***********************TRANSITIONS***********************
    */
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