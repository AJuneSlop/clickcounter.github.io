var button = document.getElementById("clickme"),tempclick=0;
button.onclick = function() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    button.innerHTML = "Click me: " + localStorage.clickcount;
  } else {
    ++tempclick;
    button.innerHTML = "Click me: " + tempclick;
  }
}
