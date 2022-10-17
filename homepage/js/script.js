function createBackground(){
    var cellDimension=0;
    /*Adjust cell to screen dimension*/
    let width=document.body.clientWidth;
    switch(true){
        case width>=2560:
            cellDimension= 150;
            break;
        case width>=1980:
            cellDimension= 80;
            break;
        case width>=768:       
            cellDimension= 70;
            break;
        default :
            cellDimension= 50;
            break;
    }
    createGrid(cellDimension);
    window.addEventListener("resize", function(){   
        this.location.reload();
        createGrid(cellDimension);   
    });
}

function createGrid(cellDim){
    let column= Math.floor(document.body.clientWidth/cellDim),
    row= Math.floor(document.body.clientHeight/cellDim);
    console.log("Column : "+column+
                "\nbody width : "+document.body.clientWidth+
                "\nRows : "+row+
                "\nbody height : "+document.body.clientHeight);
    let container= document.getElementById("container");
    let startcol,endcol,endrow;
    switch(true){
        case column>=20 :
            startcol=6;
            endcol=column-4;
            break;
        case column>=15 :
            startcol=4;
            endcol=column-2;
            break;
        case column>=10 :
            startcol=3;
            endcol=column-1;
            break;
        case column<=10 :
            startcol=2;
            endcol=column;
            break;
        default :
            startcol=2;
            endcol=column-2;
        }
        switch(true){
            case row>=20 :
                endrow=row-1;
                break;
            default:
                endrow=row-1;
        }

    container.style.setProperty("--endRow", endrow);
    container.style.setProperty("--startCol", startcol);
    container.style.setProperty("--endCol", endcol);
    container.style.setProperty("--columns", column);
    container.style.setProperty("--columnNav", column+1);
    container.style.setProperty("--rows",row);
    let cell="<div class='cell'></div>";

    for(let i=0;i<(column*row);i++){
        container.innerHTML+=cell;
    }
}