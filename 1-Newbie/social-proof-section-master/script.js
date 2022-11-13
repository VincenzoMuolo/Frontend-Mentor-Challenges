function switch_theme(){
    document.getElementById("switch_ball").classList.toggle("move-right");
    if(document.body.classList.contains("light")){
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }else if(document.body.classList.contains("dark")){
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  }