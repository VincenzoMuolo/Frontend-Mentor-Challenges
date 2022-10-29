function setHeight(){
    adjustcontent();
    /*Readapt if the screen change*/
    window.addEventListener("resize", function(){   
        this.location.reload();
        adjustcontent();  
    });
}
function adjustcontent(){
/*     let navHeight=document.getElementById("nav").offsetHeight,
        footerHeight=document.getElementById("footer").offsetHeight;
    if(window.screen.height>500) footerHeight=footerHeight*1.5;
    document.getElementById("container").style.top=navHeight+"px";
    document.getElementById("container").style.bottom=footerHeight+"px"; */
    document.body.height=window.screen.height;
    console.log('Height1 : '+window.screen.height
                +"\nHeight 2 : "+document.body.height);
}