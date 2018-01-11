function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replaceButton = document.createElement("button");
  var removeButton = document.createElement("button");
  var input = document.getElementById('input').value;
  if ( input == "" ) {
    input = "根本亂來";
  }
  span.innerHTML = input;
  todo.appendChild(span);
  replaceButton.onclick = function() {
    var input = document.getElementById('input').value;
    if ( input == "" ) {
      alert("no input");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById('input').value = "";
  }
  replaceButton.textContent = "R";
  todo.appendChild(replaceButton);
  removeButton.onclick = function () {
    var answer = confirm('確定刪除');
    if (answer == true) {
      this.parentNode.firstChild.style.color = "red";
      this.parentNode.removeChild(replaceButton);
      this.parentNode.removeChild(this);
    }
  }
  removeButton.textContent = "V";
  todo.appendChild(removeButton);
  document.getElementById('todolist').appendChild(todo);
  document.getElementById('input').value = "";
}