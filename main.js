let name = "John";

function greeting() {
	let message = "Hi";
	console.log(message + " " + name);
}

greeting();

// let value;
// const loader = document.querySelector("#loading");

// function displayLoading() {
// 	loader.classList.add("display");
// 	// to stop loading after some time
// 	setTimeout(() => {
// 		loader.classList.remove("display");
// 	}, 5000);
// }

// function hideLoading() {
// 	loader.classList.remove("display");
// }

// document.querySelector("input[type=submit]").addEventListener("click", function (e) {
// 	e.preventDefault();
// 	value = document.querySelector("input[type=date]").value;
// 	getFetch();
// 	displayLoading();
// 	document.querySelector("input[type=date]").value = "";
// });

// function getFetch() {
// 	const url = `https://api.nasa.gov/planetary/apod?api_key=Fj4JCDFAyogLg8uEngWefQg2uq6hnr4ZWvlQN4FE&date=${value}`;
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			if (data.media_type == "image") {
// 				document.querySelector(".image").src = data.hdurl;
// 			} else if (data.media_type == "video") {
// 				document.querySelector("iframe").src = data.url;
// 				document.querySelector("iframe").style.display = "block";
// 			} else {
// 				alert("media not supported - contact NASA IMMEDIATLY!");
// 			}
// 			document.querySelector("h2").innerHTML = data.title;
// 			document.querySelector(".explanation").innerHTML = data.explanation;
// 			hideLoading();
// 		})
// 		.catch((err) => {
// 			console.log(`error ${err}`);
// 		});
// }
