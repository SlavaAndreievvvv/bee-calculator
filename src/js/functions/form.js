export const checkForm = () =>
  $(document).ready(function () {
    $("#form").submit(function (event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var tel = $("#tel").val();
      var password = $("#password").val();
      var doublePassword = $("#doublePassword").val();

      if (name == "") {
        $("#formNameError").html("Введите имя");
        event.preventDefault();
      }

      if (email == "") {
        $("#formEmailError").html("Введите почту");
        event.preventDefault();
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        $("#formEmailError").html("Некорректный формат почты");
        event.preventDefault();
      }

      if (tel == "") {
        $("#formTelError").html("Введите телефон");
        event.preventDefault();
      } else if (!/^[0-9-+\s()]*$/.test(phone)) {
        $("#formTelError").html("Некорректный формат телефона");
        event.preventDefault();
      }

      if (password == "") {
        $("#formPasswordError").html("Введите пароль");
        event.preventDefault();
      } else if (password.length < 6) {
        $("#formPasswordError").html(
          "Пароль должен содержать минимум 6 символов"
        );
        event.preventDefault();
      }

      if (doublePassword == "") {
        $("#formDoublePasswordError").html("Подтвердите пароль");
        event.preventDefault();
      } else if (password != doublePassword) {
        $("#formDoublePasswordError").html("Пароли не совпадают");
        event.preventDefault();
      }
    });
  });
