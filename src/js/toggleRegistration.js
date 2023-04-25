export const toggleRegistration = () => {
  $("#button-registration").click(() => {
    $("#form").addClass("active");
  });
  $("#close").click(() => {
    $("#form").removeClass("active");
  });
};
