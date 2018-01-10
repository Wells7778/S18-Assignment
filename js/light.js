var state = true;
function toggleLight() {
  var img = document.getElementById('image');
  state = !state;
  img.src = state ? 'image/on.png' : 'image/off.png';
}
var timeleft  = 0;
var setting = 0;

function setTimer() {
  var time = document.getElementById('time').value;
  if (isNaN(time)) {
    alert('請輸入數字');
  }else {
    timeleft = time;
    setting = setInterval(countDownTimer, 1000);
    document.getElementById('time').value = "";
  }
}

function countDownTimer(){
  var img = document.getElementById('image');
  timeleft -= 1 ;
  console.log(timeleft);
  if (timeleft <= 0) {
    img.src = 'image/off.png';
    clearInterval(setting);
  }
  document.getElementById('timer').innerHTML = timeleft;
}
