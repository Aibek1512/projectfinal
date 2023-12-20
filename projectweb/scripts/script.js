$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
      hiddenRow.toggleClass("hidden");
      if (hiddenRow.is(":visible")) {
        $(".expand-btn").html("Back");
      } else {
        $(".expand-btn").html("Expand");
      }
    }); // on 'click'
    $(".play-button").click(function () {
      $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
      $(".modal-canvas").toggleClass("hidden");
    });
  });
  function sendMessage() {

    var emailInput = document.getElementById('emailInput');
    var emailValue = emailInput.value;
  

    console.log('Email:', emailValue);


    emailInput.value = '';
  }