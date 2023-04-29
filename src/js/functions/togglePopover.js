export const togglePopover = () => {
  $("#activePopover").mouseover(() => {
    $("#popover").addClass("active");
    $("#activePopover").addClass("hover");
    $("#arrowUpPopover").addClass("transform");
  });
  $("#activePopover").mouseout(() => {
    $("#popover").removeClass("active");
    $("#activePopover").removeClass("hover");
    $("#arrowUpPopover").removeClass("transform");
  });
  $("#popover").mouseover(() => {
    $("#popover").addClass("active");
    $("#activePopover").addClass("hover");
    $("#arrowUpPopover").addClass("transform");
  });
  $("#popover").mouseout(() => {
    $("#popover").removeClass("active");
    $("#activePopover").removeClass("hover");
    $("#arrowUpPopover").removeClass("transform");
  });
};
