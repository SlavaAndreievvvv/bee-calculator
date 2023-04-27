export const showDataInfo = () => {
  $("#dataItemInfo").hide();
  $("#dataItem").click(() => {
    $("#dataItemInfo").slideToggle(500);
  });
};
