var text = ["design", "develop", "create", "innovate"];
var counter = 0;
var elem = document.getElementById("hero-text-c");
var inst = setInterval(change, 1500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
