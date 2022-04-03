// let deckId = "";
// let scorePlayer1 = 0;
// let scorePlayer2 = 0;

// fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
// 	.then((res) => res.json())
// 	.then((data) => {
// 		deckId = data.deck_id;
// 	})
// 	.catch((err) => {
// 		console.log(`error ${err}`);
// 	});

// document.querySelector("button").addEventListener("click", getFetch);

// function returnValue(value) {
// 	if (value === "ACE") {
// 		return 14;
// 	} else if (value === "KING") {
// 		return 13;
// 	} else if (value === "QUEEN") {
// 		return 12;
// 	} else if (value === "JACK") {
// 		return 11;
// 	} else {
// 		return Number(value);
// 	}
// }

// function checkWinnerRound(player1, player2) {
// 	if (returnValue(player1) > returnValue(player2)) {
// 		scorePlayer1 += 1;
// 		document.querySelector(".player1score").innerHTML = scorePlayer1;
// 		return "Player 1 WON!";
// 	} else if (returnValue(player1) < returnValue(player2)) {
// 		scorePlayer2 += 1;
// 		document.querySelector(".player2score").innerHTML = scorePlayer2;
// 		return "Player 2 WON!";
// 	} else {
// 		return "DRAW!";
// 	}
// }

// function checkGameWinner(player1, player2) {
// 	if (player1 > player2) {
// 		return "PLAYER 1 WON THE GAME!";
// 	} else if (player1 < player2) {
// 		return "PLAYER 2 WON THE GAME!";
// 	} else {
// 		return "DRAW";
// 	}
// }

// function getFetch() {
// 	const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;
// 	fetch(url)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			console.log(data);
// 			document.querySelector("#player1").src = data.cards[0].image;
// 			document.querySelector("#player2").src = data.cards[1].image;

// 			document.querySelector("h3").innerHTML = checkWinnerRound(data.cards[0].value, data.cards[1].value);
// 			document.querySelector(".remaining").innerHTML = data.remaining;

// 			if (data.remaining === 0) {
// 				setTimeout(() => {
// 					alert(checkGameWinner(scorePlayer1, scorePlayer2));
// 				}, 1500);
// 			}
// 		})
// 		.catch((err) => {
// 			console.log(`error ${err}`);
// 		});
// }

function duplicate(arr) {
	let newArr = [...arr];
	for (let i = 1; i <= arr.length; i++) {
		newArr.push(i);
	}
	return newArr;
}

console.log(duplicate([1, 2, 3, 4, 5]));
