function switch_theme() {
   if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
   } else if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
   }
}

function check_email() {
   var email_sent = document.getElementById("email"),
      mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      btn_loading = document.getElementById("button_loading"),
      btn_arrow = document.getElementById("button_icon"),
      btn_success = document.getElementById("button_success"),
      error_msg = document.getElementById("error_msg"),
      error_icon = document.getElementById("error_icon");

   error_msg.classList.remove("show_error");
   error_icon.classList.remove("show_error");
   email_sent.classList.remove("error_field");
   btn_arrow.classList.add("hide_btn");
   btn_loading.classList.add("show_btn");
   btn_loading.classList.add("anim_loading");
   setTimeout(() => {
      if (email_sent.value.match(mail_format)) {
         btn_success.classList.add("show_btn");
         btn_success.classList.add("anim_success");
         setTimeout(() => {
            btn_success.classList.remove("show_btn");
         }, 700);
      } else {
         error_msg.classList.add("show_error");
         error_icon.classList.add("show_error");
         email_sent.classList.add("error_field");
      }
      /*RESET*/
      btn_loading.classList.remove("anim_loading");
      btn_loading.classList.remove("show_btn");
      setTimeout(() => {
         btn_arrow.classList.remove("hide_btn");
      }, 700);
   }, 1000);
}
