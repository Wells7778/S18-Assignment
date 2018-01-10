var state = true;
function togglelight() {
  var img = document.getElementById("image");
  state = !state;
  img.src = state ? "image/on.png" : "image/off.png";
}

var timeleft = 5;
function countDownTimer(){
  var img = document.getElementById("image");
  timeleft -= 1;
  if (timeleft <= 0) {
    img.src = "image/off.png";
    clearInterval(setting);
  }
  document.getElementById("timer").innerHTML = timeleft;
}

var setting = setInterval(countDownTimer, 1000);