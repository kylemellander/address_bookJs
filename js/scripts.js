$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var newContact = { firstName: $("#new-first-name").val(), lastName: $("#new-last-name").val(), address: $("#new-address").val() };

    $("ul#contacts").append("<li>" + newContact.firstName + " " + newContact.lastName + "</li>");

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-address").val("");

  })
})
