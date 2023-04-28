export const choseRatingStar = () => {
  $(".star-icon").click(function () {
    var value = $(this).data("value");
    $(".star-icon").removeClass("active");
    $(".star-icon").each(function (index) {
      if (index < value) {
        $(this).addClass("active");
      }
    });
  });
};
