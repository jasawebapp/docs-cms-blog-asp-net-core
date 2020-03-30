$("body").removeClass("no-js");

$(document).ready(function() {
  var conf = {
    cursorcolor: "#e6e6e6",
    scrollspeed: 200,
    mousescrollstep: "50",
    emulatetouch: true,
    cursorwidth: "5px",
    cursorborder: "none",
    cursorborderradius: "20px",
    horizrailenabled: false,
    autohidemode: "leave",
    hidecursordelay: 0
  };

  $(".app-sidebar-content").niceScroll(conf);
  setInterval(function() {
    $(".app-sidebar-content")
      .getNiceScroll()
      .resize();
  }, 1);

  $(".hamburger").on("click", function() {
    $(".app").toggleClass("closed-sidebar");
    $(".app-sidebar").toggleClass("open");
    $("body").toggleClass("sidebar-open");
  });

  $(".app-sidebar-overlay").on("click", function() {
    $(".app").removeClass("closed-sidebar");
    $(".app-sidebar").removeClass("open");
    $("body").removeClass("sidebar-open");
  });

  $(".menu-item-account").mouseleave(function() {
    $(this).removeClass("dropdown-open");
  });

  $(".no-scroll-number").on("wheel", function(e) {
    $(this).blur();
  });

  $(".app-sidebar-item").each(function() {
    var childul = $(this).find("ul");
    var $this = $(this);
    if (childul.length > 0) {
      $this.find("> a").addClass("app-sidebar-dropdown");
    }
  });

  $(".app-sidebar-dropdown").on("click", function(e) {
    e.preventDefault();
    var $this = $(this);
    $("body").toggleClass("is-open-sidebar");
    $(".app-sidebar-item > div:not(.banner-profile)")
      .not($this.next())
      .slideUp();
    $(".app-sidebar-item.open")
      .not($this.parent())
      .removeClass("open");
    $(this)
      .parent()
      .toggleClass("open");
    $(this)
      .next()
      .slideToggle();
  });
});
