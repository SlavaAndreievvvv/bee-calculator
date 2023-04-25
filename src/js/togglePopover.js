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
};
