var text = ["design", "develop", "streamline", "create", "innovate", "prototype", "automate"];
var counter = 0;
var elem = document.getElementById("hero-text-c");
var inst = setInterval(change, 2000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}
