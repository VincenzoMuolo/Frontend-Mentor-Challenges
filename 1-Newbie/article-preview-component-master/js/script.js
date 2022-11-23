window.addEventListener("resize", function () {
   this.location.reload();
   change_options();
});

function switch_theme() {
   if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
   } else if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
   }
}

function change_options() {
   if (document.body.clientWidth <= 768) {
      document.getElementById("share_option").classList.add("card__share_options");
      document.getElementById("share_option").classList.remove("card__share_options_big_screen");
   } else {
      document.getElementById("share_option").classList.remove("card__share_options");
      document.getElementById("share_option").classList.add("card__share_options_big_screen");
   }
}

function open_share_options() {
   document.getElementById("share_icon").classList.toggle("invert_icon");
   document.getElementById("icon_wrapper").classList.toggle("invert_bg");
   let anim_add, anim_remove, anim_add_end_phase, anim_remove_end_phase, wait;
   if (document.body.clientWidth <= 768) {
      (anim_add = "add_anim"), (anim_remove = "remove_anim");
      (anim_add_end_phase = "translateY(0)"), (anim_remove_end_phase = "translateY(100px)");
      wait = 450;
   } else {
      (anim_add = "add_anim_on_bigger_screen"), (anim_remove = "remove_anim_on_bigger_screen");
      (anim_add_end_phase = "scale(100%)"), (anim_remove_end_phase = "scale(0)");
      wait = 250;
   }

   if (document.getElementById("share_option").classList.contains(anim_add)) {
      document.getElementById("share_option").classList.remove(anim_add);
      document.getElementById("share_option").classList.add(anim_remove);
      setTimeout(() => {
         document.getElementById("share_option").style.transform = anim_remove_end_phase;
      }, wait);
   } else {
      document.getElementById("share_option").classList.add(anim_add);
      document.getElementById("share_option").classList.remove(anim_remove);
      setTimeout(() => {
         document.getElementById("share_option").style.transform = anim_add_end_phase;
      }, wait);
   }
}
