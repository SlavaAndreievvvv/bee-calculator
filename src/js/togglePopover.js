export const togglePopover = () => {
  $("#activePopover").mouseover(() => {
    $("#popover").addClass("active");
    $("#activePopover").addClass("hover");
  });
  $("#activePopover").mouseout(() => {
    $("#popover").removeClass("active");
    $("#activePopover").removeClass("hover");
  });
  $("#popover").mouseover(() => {
    $("#popover").addClass("active");
    $("#activePopover").addClass("hover");
  });
  $("#popover").mouseout(() => {
    $("#popover").removeClass("active");
    $("#activePopover").removeClass("hover");
  });
  $("#showPopoverOnMobile").click(() => {
    $("#popoverMobile").slideToggle(500);
  });
  $("#showPopoverOnMobile").click(() => {
    if ($("#plus").hasClass("active")) {
      $("#plus").removeClass("active");
    } else {
      $("#plus").addClass("active");
    }
  });
  $("#showPopoverOnMobile").click(() => {
    if ($("#plus").hasClass("active")) {
      $("#itemBee").css({
        backgroundColor: "transparent",
      });
    } else {
      $("#itemBee").css({
        backgroundColor: "#ffdc55",
      });
    }
  });
  $("#showPopoverOnMobile").click(() => {
    if ($("#plus").hasClass("active")) {
      $("#beeHouse").css({
        marginTop: "60px",
      });
    } else {
      $("#beeHouse").css({
        marginTop: "0px",
      });
    }
  });
};
