/********************************
************** GLOBAL VARIABLES *
*********************************/
const cardType=["newbie","junior","intermediate","advanced"];
var config = {
    closeHeightSwitch   : ["50%","0%"],
    openHeightSwitch    : ["50%","100%"],
    closeWidthSwitch    : ["50%","0%"],
    openWidthSwitch     : ["50%","100%"],
    heightDelay         : ["0ms","350ms"],
    switchHeight        : [1,0],
    panelDelay          : ["200ms","0ms"],
    closeFontSize       : ["1em","0em"],
    challengeContainer  : ["0%","100%"],
    challengeFontSize   : ["0em","1em"],
    chContainerDelay    : ["0ms","300ms"],
    counterOpacity      : [1,0]
}

/********************************
********** SET CONTAINER HEIGHT *
******* BASED ON AVAIABLE SPACE *
*********************************/
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
    if(window.screen.height>500) footerHeight=footerHeight*1.5;
    document.getElementById("container").style.top=navHeight+"px";
    document.getElementById("container").style.bottom=footerHeight+"px";
    
}
/********************************
************* OPEN CARD HANDLER *
*********************************/
function openCard(card){
    let newbie= document.getElementById("newbie"),              junior= document.getElementById("junior"),
        intermediate= document.getElementById("intermediate"),  advanced= document.getElementById("advanced"),
        panel1= document.getElementById("panel-1"),             panel2= document.getElementById("panel-2"),
        switchValue, position=0, panelOff=0, panelOn=0,         availWidth=document.body.clientWidth, availHeight=document.body.clientHeight;
    
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
    /*Move title height */
    document.getElementById(card.id+"-title").style.opacity="0";
    if(document.getElementById(card.id+"-title").style.bottom==0||document.getElementById(card.id+"-title").style.bottom=="0px"){
        document.getElementById(card.id+"-title").style.bottom="auto";
        document.getElementById(card.id+"-box").style.opacity=config.counterOpacity[1];
        document.getElementById(card.id).classList.toggle("fixed-hover-state");
        document.getElementById(card.id).classList.toggle("card-hover");
    }
    else{
        document.getElementById(card.id+"-title").style.bottom=0;
        document.getElementById(card.id+"-box").style.opacity=config.counterOpacity[0];
        document.getElementById(card.id).classList.toggle("fixed-hover-state");
        document.getElementById(card.id).classList.toggle("card-hover");
    }
    document.getElementById(card.id+"-box").style.transition=
    "450ms opacity ease-in-out 200ms, 450ms transform ease-in-out";
    setTimeout(function rest(){
        document.getElementById(card.id+"-title").style.opacity=1;
        document.getElementById(card.id+"-title").style.transition=
        "350ms opacity ease-in-out";
    },300);

    /********************************
    ************ SINGLE PANEL LOGIC *
    *********************************/
    console.log('Avail Height : '+availHeight+"\nAvail Width : "+availWidth);
    if(availWidth<1024 && availHeight>availWidth){
        if(document.getElementById(card.id).style.height=="100%"){
            switchValue=0;
        }    
        else{
            switchValue=1;
        } 
        cardType.forEach(element => {
            if(element!=card.id) {
                document.getElementById(element).style.height=config.closeHeightSwitch[switchValue];
                document.getElementById(panelOff).style.height=config.closeHeightSwitch[switchValue];
                document.getElementById(element).style.fontSize=config.closeFontSize[switchValue];
            }else {
                document.getElementById(element).style.height=config.openHeightSwitch[switchValue];
                document.getElementById(panelOn).style.height=config.openHeightSwitch[switchValue];
            }
        });

    /********************************
    *************** TWO PANEL LOGIC *
    *********************************/
    }else{
        if(document.getElementById(card.id).style.width=="100%"){
            switchValue=0;
        }
        else{
            switchValue=1;         
        } 
        if(card.id=="newbie"||card.id=="intermediate"){
            if(newbie.style.width!="100%"){
                newbie.style.width="100%";
                intermediate.style.width="100%";
                junior.style.width="0%";
                advanced.style.width="0%";
                if(card.id=="newbie"){
                    panel1.style.height="100%";
                    panel2.style.height="0%";

                }else{
                    panel2.style.height="100%";
                    panel1.style.height="0%";
                }
            }else{
                setTimeout(function rest(){
                    newbie.style.width="50%";
                    intermediate.style.width="50%";
                    junior.style.width="50%";
                    advanced.style.width="50%";
                },200);
                panel1.style.height="50%";
                panel2.style.height="50%";                
            }
        }else if(card.id=="junior"||card.id=="advanced"){
            if(junior.style.width!="100%"){
                junior.style.width="100%";
                advanced.style.width="100%";
                newbie.style.width="0%";
                intermediate.style.width="0%";
                //
                if(card.id=="junior"){
                    panel1.style.height="100%";
                    panel2.style.height="0%";
                }else{
                    panel2.style.height="100%";
                    panel1.style.height="0%";
                }
            }else{
                setTimeout(function rest(){
                    newbie.style.width="50%";
                    intermediate.style.width="50%";
                    junior.style.width="50%";
                    advanced.style.width="50%";
                },200);
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
    panel1.style.transition= "500ms height ease-in-out "+config.panelDelay[switchValue];
    panel2.style.transition= "500ms height ease-in-out "+config.panelDelay[switchValue];
    /*
    ***********************TRANSITIONS***********************
    */
}


function loadChallenge(challenge, event){
    switch(challenge.id){
        case "newbie-challenge-1":
            event.stopPropagation();
            changePageAnim();
            setTimeout(function waitAnim(){
                location.href="./1-Newbie/interactive-rating-component-main/html/index.html";
            },450);
            break;
        case "newbie-challenge-2":
            event.stopPropagation();
            changePageAnim();
            setTimeout(function waitAnim(){
                location.href="./1-Newbie/product-preview-card-component-main/html/index.html";
            },450);
            break;
        case "newbie-challenge-3":
            event.stopPropagation();
            changePageAnim();
            setTimeout(function waitAnim(){
                location.href="./1-Newbie/nft-preview-card-component-main/html/index.html";
            },450);
            break;
            case "newbie-challenge-4":
                event.stopPropagation();
                changePageAnim();
                setTimeout(function waitAnim(){
                    location.href="./1-Newbie/stats-preview-card-component-main/html/index.html";
                },450);
            break;
        default :
            break;
    }
}

function changePageAnim(){
    document.getElementById("nav").classList.toggle("nav-animation-in");
    document.getElementById("nav").classList.toggle("nav-animation-out");
    document.getElementById("container").classList.toggle("animation-out");
}