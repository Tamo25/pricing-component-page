let slider = document.getElementById("input");
let output = document.getElementById("result");
let month = document.getElementById("month");
let buttom = document.getElementById("switch");

output.innerHTML = slider.value;
let sliderValue = 16;
output.innerHTML = "$" + sliderValue + ".00";

slider.oninput = function () {
  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #A4F3EB 0%, #A4F3EB " +
    value +
    "%, #ECF0FB " +
    value +
    "%, rgba(236, 240, 251, 1))";
   output.innerHTML = "$" + this.value + ",00";
  sliderValue = this.value;
};

buttom.addEventListener("change", function (event) {
  if (event.target.checked) {
    month.textContent = "/year";
    slider.max = "295";
    slider.value = sliderValue * 12 * 0.75;
    output.innerHTML = "$" + slider.value + ",00";
       slider.oninput();
  } else {
    month.textContent = "/month";
    slider.max = "35";
    slider.value = sliderValue / 12 / 0.75;
    output.innerHTML = "$" + slider.value + ",00";
    slider.oninput();
  }
});
