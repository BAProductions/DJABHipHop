$(function() {
  console.log("ready!");
  $({blurRadius: 0}).animate({blurRadius: 100}, {
    duration: 1000,
    step: function() {
      $(".fa-wrapper").css({
        "opacity": this.blurRadius + "%"
      });
    }
  });
});
