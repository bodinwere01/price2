var slider = document.getElementById("myRange");
var output = document.getElementById("price");
var output2 = document.getElementById("price2");
var progressbar = document.getElementById("probar");
output.innerHTML = "$"+slider.value+".00";
output2.innerHTML = "$"+slider.value+".00";

slider.oninput = function() {
  output.innerHTML = "$"+this.value+".00";
  output2.innerHTML = "$"+this.value+".00";
  progressbar.style.width = this.value+"%";
}