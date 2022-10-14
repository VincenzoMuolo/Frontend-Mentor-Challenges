function clickHandler(element){
    console.log(element.id);
    for(let i=1;i<=5;i++){
        document.getElementById(i).classList.remove("active"); 
    }
    document.getElementById(element.id).classList.add("active");
}