export const showDataInfo = () => {
  $(".data-info").fadeOut();
  $(".data-plus span").removeClass("active");
  $(".data-item").click(function () {
    const dropdown = $(this).next(".data-info");
    $(".data-info").not(dropdown).fadeOut();
    dropdown.slideToggle();
    $(this).find(".data-plus span").toggleClass("active");
  });
};
