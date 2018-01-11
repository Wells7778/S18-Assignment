function createToDo() {
  var todo = document.createElement("div");
  var span = document.createElement("span");
  var replace = document.createElement("button");
  var remove = document.createElement("button");
  var input = document.getElementById('input').value;
  if ( input == "" ) {
    input = "XXX";
  }
  span.innerHTML = input;
  todo.appendChild(span);
  replace.onclick = function() {
    var input = document.getElementById('input').value;
    if ( input == "" ) {
      alert("no input");
      return;
    }
    this.parentNode.firstChild.innerHTML = input;
    document.getElementById('input').value = "";
  }
  replace.textContent = "R";
  todo.appendChild(replace);
  remove.onclick = function () {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
  remove.textContent = "V";
  todo.appendChild(remove);
  document.getElementById('todolist').appendChild(todo);
  document.getElementById('input').value = "";
}