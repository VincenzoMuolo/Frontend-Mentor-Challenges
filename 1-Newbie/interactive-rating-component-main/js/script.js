
function alwaysCenteredCard(){
    let mainCard = document.getElementById("mainCard");
    let centerValue=(window.screen.height/2)-(mainCard.clientHeight/2);
    mainCard.style.marginTop= centerValue+"px";
    /*Adjust div position according to any height value change*/
    window.addEventListener("resize", function(){
        centerValue=(window.screen.height/2)-(mainCard.clientHeight/2);
        mainCard.style.marginTop= centerValue+"px";
        mainCard.style.marginTop= centerValue+"px";
    });

}