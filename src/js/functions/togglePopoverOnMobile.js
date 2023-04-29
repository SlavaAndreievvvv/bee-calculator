export const togglePopoverOnMobile = () => {
  $("#popoverMobile").hide();
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
        marginTop: "0px",
      });
    } else {
      $("#beeHouse").css({
        marginTop: "60px",
      });
    }
  });
};
