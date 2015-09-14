$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var newContact = { firstName: $("#new-first-name").val(), lastName: $("#new-last-name").val(), address: $("#new-address").val() };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-address").val("");

    $(".contact").last().click(function() {

      $(".show-contact").show();
      $(".show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);

    })
  })

});
