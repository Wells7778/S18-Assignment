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
  }else if (time == ""){
    alert('尚未輸入倒數時間');
  }else {
    timeleft = time;
    setting = setInterval(countDownTimer, 1000);
    document.getElementById('timer').innerHTML = timeleft;
    document.getElementById('time').value = "";
  }
}

function countDownTimer(){
  var img = document.getElementById('image');
  timeleft -= 1 ;
  if (timeleft <= 0) {
    img.src = 'image/off.png';
    clearInterval(setting);
  }
  document.getElementById('timer').innerHTML = timeleft;
}
