function createBackground(){
    let screenX, screenY, itemArea, nTileX, nTileY, tileHTML,
    i=0,
    container= document.getElementById("mainContainer");

    screenX= window.screen.height;
    screenY= window.screen.width;
    itemArea=document.getElementsByClassName("");
    nTileX= Math.trunc(screenX/itemArea);
    nTileY= Math.trunc(screenY/itemArea);
    container.style.gridTemplateColumns= "repeat("+nTileX+",minmax(50px, 1fr))";
    //container.style.gridTemplateRows= "repeat("+nTileY+",minmax(50px, 1fr))";
    do{
        tileHTML="<div id='item' class='container-item'></div>";
        container.insertAdjacentHTML("beforeend",tileHTML);
        i++;
        console.log("i");
    }while(nTileX*nTileY>i);
    
    
    
    window.addEventListener("resize", function(){
        screenX= window.screen.height;
        screenY= window.screen.width;
        itemArea= 50;
        nTileX= Math.trunc(screenX/itemArea);
        nTileY= Math.trunc(screenY/itemArea);
        console.log("\nscreenX : "+screenX+
        "\nscreenY : "+screenY+
        "\nnumber of tiles Y : "+nTileY+
        "\nnumber of tiles X : "+nTileX);
    }); 
}