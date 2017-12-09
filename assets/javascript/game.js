$(document).ready(function() {
  // GLOBAL VARIABLES
  var showGame = $("#viewGame");
  var showEndGame = $("#viewableEnd");
  var time = 30;
  var intervalId;

  // COUNTERS
  var correct = 0;
  var incorrect = 0;

  // CLICK ACTIONS
  $("#start-button").on("click", function() {
    startGame();
  })

  $("#done-button").on("click", function() {
    doneGame();
  })

  // BEGIN GAME
  function startGame() {
    // Transition to questions element
    $("#start-button").replaceWith(showGame);
    // Start Timer
    intervalId = setInterval(function() {
      time--;
      $("#timer").html("Time Remaining: " + time);
      if (time == 0) {
        doneGame();
      }
    }, 1000);
  }
  // END GAME
  function doneGame() {

    clearInterval(intervalId);

    if ($("#correctq1").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    if ($("#correctq2").prop("checked")) {
      correct++;
    } else {
      incorrect++;
    }

    // Transition to correct/incorrect element
    $("#viewGame").replaceWith(showEndGame);

    $("#correct").html(correct);
    $("#incorrect").html(incorrect);
  }


});
