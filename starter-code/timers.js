// your code here:
var seconds = 0
var timerId = 0

$("#reset").on("click", function () {
  console.log("reset")
  clearInterval(timerId)
  seconds = 0
  $("#timer").text("Stop Watch")
})
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.
$("#start").on("click", function() {
  console.log("start")
  timerId = setInterval(updateTime, 1000)
})
//Replace "Stop Watch" in the HTML with the content of the seconds variable.
//Use setInterval() to increment the timer by 1 every second.
//Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
$("#pause").on("click", function () {
  console.log("pause")
  clearInterval(timerId)
})
//Stop -- but do not reset! -- the timer using clearInterval().

function updateTime() {
  //increase seconds
  //inserts that value into the <h1> element with id="timer"
    seconds = seconds + 1;
    $("#timer").text("Time elapsed: "+ seconds)
}
