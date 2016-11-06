$(function() {
  $("#message-form").submit(function(ev) {
    var form = $(this);
    ev.preventDefault();

    $.post("send-message", {
      message: form.find("input[name=\"message\"]").val()
    }, function(res) {
      console.log(res);
    });
  });
});