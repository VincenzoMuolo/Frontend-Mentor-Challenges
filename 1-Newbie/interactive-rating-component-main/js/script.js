function clickHandler(element){
    console.log(element.id);
    for(let i=1;i<=5;i++){
        document.getElementById(i).classList.remove("active"); 
    }
    document.getElementById(element.id).classList.add("active");
}
function saveRating(){
    let i=1;
    let cardSize= document.getElementById("mainCard");
    while(i<=5){
        if(document.getElementById(i).classList.contains("active")){
            document.getElementById("userVote").textContent=i;
            document.getElementById("iconContainer").classList.toggle("animation-out");
            document.getElementById("textCard").classList.toggle("animation-out");
            document.getElementById("ratingBox").classList.toggle("animation-out");
            document.getElementById("submit").classList.toggle("animation-out");
            setTimeout(
                function animTime(){
                    document.getElementById("iconContainer").style.display="none";
                    document.getElementById("textCard").style.display="none";
                    document.getElementById("thanksCard").style.display="flex";
                    document.getElementById("thanksCard").classList.toggle("animation-in");
                }
            ,1500);
            break;
        }
        else i++;      
    }
}