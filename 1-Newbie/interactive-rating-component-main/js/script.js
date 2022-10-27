function clickHandler(element){
    console.log(element.id);
    for(let i=1;i<=5;i++){
        document.getElementById(i).classList.remove("active"); 
    }
    document.getElementById(element.id).classList.add("active");
}
function saveRating(){
    let i=1;
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
                    document.getElementById("thanksSvg").classList.toggle("animation-in-svg");
                }
            ,500);
            break;
        }
        else{
            i++;
            if(i==5){
                setTimeout(function delay(){
                    document.getElementById("submit").classList.toggle("err-no-input");
                },300);
            }
        }  
    }
}
function goToHomepage(){
    changePageAnim();
    setTimeout(function waitAnim(){
        location.href="/index.html";
    },450);
}
function changePageAnim(){
    document.getElementById("nav").classList.toggle("nav-animation-out");
    document.getElementById("mainCard").classList.remove("animation-page-in");
    document.getElementById("mainCard").classList.toggle("animation-page-out");
}