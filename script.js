var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

// console.log(body);
// body.style.background = "red";

// console.log(css);
// console.log(color1);
// console.log(color2);

setGradient();

// create a random color function
function setGradient() {
	body.style.background =
	"linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

//grab the color value for color1 input value
color1.addEventListener("input", setGradient);

//grab the color value for color2 input value
color2.addEventListener("input", setGradient);

//run randomColor funtion on click
// random.addEventListener("click", );