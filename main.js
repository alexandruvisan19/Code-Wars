function addColor(event) {
	if (event.target.style.backgroundColor === "") {
		event.target.style.backgroundColor = event.target.outerText.toLowerCase();
	} else {
		event.target.style.backgroundColor = "";
	}
}

document.querySelector("ul").addEventListener("click", addColor);
