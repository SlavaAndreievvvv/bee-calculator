export const showData = () => {
  const button = $("#viewData");
  const buttonMobile = $("#viewDataOnMobile");
  const buttonClose = $("#closeData");
  const dataList = $("#dataList");

  const body = $("body");
  button.click(function () {
    if (dataList.hasClass("active")) {
      dataList.removeClass("active");
      body.css("overflow", "visible");
    } else {
      dataList.addClass("active");
      body.css("overflow", "hidden");
    }
  });

  buttonMobile.click(function () {
    if (dataList.hasClass("active-mobile")) {
      dataList.removeClass("active-mobile");
      body.css("overflow", "visible");
    } else {
      dataList.addClass("active-mobile");
      body.css("overflow", "hidden");
    }
  });
  buttonClose.click(function () {
    dataList.removeClass("active-mobile");
  });
};
