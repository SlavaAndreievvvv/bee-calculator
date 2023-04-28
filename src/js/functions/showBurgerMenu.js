export const showBurgerMenu = () => {
  $("#burgerButton").click(() => {
    $("#burgerMenu").addClass("active");
    $("body").css("overflow", "hidden");
  });
  $("#closeBurgerMenu").click(() => {
    $("#burgerMenu").removeClass("active");
    $("body").css("overflow", "visible");
  });
};
