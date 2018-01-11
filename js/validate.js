function validate() {
  var code = document.getElementById('nric').value;
  if (code == "") {
    alert("內容是空的");
  }else if (!isNaN(code)) {
    alert("不能全是數字");
  }else if (code.length != 10) {
    alert("長度不對");
  }else{
    document.getElementById("result").innerHTML = "驗證通過";
  }
}