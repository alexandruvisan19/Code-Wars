let isEligible = parseInt("0");
let timerCounter = parseInt("20");
let HMSTime;
let spinBannerDiv;
let bannerImg;
let spinNowImg;
let onclick;

// Check mobile or PC and select the spin banner
function checkDevice() {
	if (document.querySelector(".mobileView")) {
		// mobile
		spinBannerDiv = document.querySelector("banner-888")._shadow.querySelector('[data-bannerdata="daily-spin"]');
		bannerImg = document.querySelector("banner-888")._shadow.querySelector('[data-bannerdata="daily-spin"] img');
		console.log("mobile");
		console.log(spinBannerDiv);
	} else {
		// pc
		spinBannerDiv = document
			.querySelector("#staticCtaPoker8 banner-888")
			._shadow.querySelector('[data-bannerdata="daily-spin"]');
		bannerImg = document
			.querySelector("#staticCtaPoker8 banner-888")
			._shadow.querySelector('[data-bannerdata="daily-spin"] img');
		console.log("pc");
		console.log(spinBannerDiv);
	}
}

// Get Timer
function getTimer() {
	var measuredTime = new Date(null);
	measuredTime.setSeconds(timerCounter); // specify value of SECONDS
	HMSTime = measuredTime.toISOString().substr(11, 8);
	console.log(HMSTime);
}

// Add Timer Div
function addTimer() {
	checkDevice();
	getTimer();
	let divTimer = `<div part="timerWrap" id="timerWrap"></div><div part="timer" id="timer"></div>`;
	spinBannerDiv.innerHTML += divTimer;
}

// Fadeout effect
function removeFadeOut(el, second) {
	setTimeout(function () {
		el.style.transition = `opacity 2s ease`;
		el.style.display = "none"
	}, second);
}

function spinBannerTimerUpdate() {
	let timerDiv;
	let timerWrap;
	if (document.querySelector(".mobileView")) {
		// mobile
		timerWrap = document.querySelector("banner-888")._shadow.querySelector("#timerWrap");
		timerDiv = document.querySelector("banner-888")._shadow.querySelector("#timer");
	} else {
		// pc
		timerWrap = document.querySelector("#staticCtaPoker8 banner-888")._shadow.querySelector("#timerWrap");
		timerDiv = document.querySelector("#staticCtaPoker8 banner-888")._shadow.querySelector("#timer");
	}

	if (timerCounter > 0) {
		timerCounter -= 1;
		getTimer();
		timerDiv.innerHTML = HMSTime;
	}

	if (HMSTime === "00:00:00") {
		removeFadeOut(timerDiv, 1000);
		removeFadeOut(timerWrap, 1000);
		spinBannerDiv.setAttribute("onclick", onclick);
		spinBannerDiv.classList.add("clickable");
	}
}

const timerBanner = {
	isEligible: parseInt("0"),
	timerCounter: parseInt("20"),
	HMSTime,
	spinBannerDiv,
	bannerImg,
	spinNowImg,
	onclick,
	checkDevice() {
		if (document.querySelector(".mobileView")) {
			// mobile
			spinBannerDiv = document.querySelector("banner-888")._shadow.querySelector('[data-bannerdata="daily-spin"]');
			bannerImg = document.querySelector("banner-888")._shadow.querySelector('[data-bannerdata="daily-spin"] img');
			console.log("mobile");
			console.log(spinBannerDiv);
		} else {
			// pc
			spinBannerDiv = document
				.querySelector("#staticCtaPoker8 banner-888")
				._shadow.querySelector('[data-bannerdata="daily-spin"]');
			bannerImg = document
				.querySelector("#staticCtaPoker8 banner-888")
				._shadow.querySelector('[data-bannerdata="daily-spin"] img');
			console.log("pc");
			console.log(spinBannerDiv);
		}
	},
	getTimer() {
		var measuredTime = new Date(null);
		measuredTime.setSeconds(timerCounter); // specify value of SECONDS
		HMSTime = measuredTime.toISOString().substr(11, 8);
		console.log(HMSTime);
	},
	addTimer() {
		checkDevice();
		getTimer();
		let divTimer = `<div part="timerWrap" id="timerWrap"></div><div part="timer" id="timer"></div>`;
		spinBannerDiv.innerHTML += divTimer;
	},
	removeFadeOut(el, second) {
		setTimeout(function () {
			el.style.transition = `opacity 2s ease`;
			el.style.display = "none"
		}, second);
	},
	spinBannerTimerUpdate() {
		let timerDiv;
		let timerWrap;
		if (document.querySelector(".mobileView")) {
			// mobile
			timerWrap = document.querySelector("banner-888")._shadow.querySelector("#timerWrap");
			timerDiv = document.querySelector("banner-888")._shadow.querySelector("#timer");
		} else {
			// pc
			timerWrap = document.querySelector("#staticCtaPoker8 banner-888")._shadow.querySelector("#timerWrap");
			timerDiv = document.querySelector("#staticCtaPoker8 banner-888")._shadow.querySelector("#timer");
		}

		if (timerCounter > 0) {
			timerCounter -= 1;
			getTimer();
			timerDiv.innerHTML = HMSTime;
		}

		if (HMSTime === "00:00:00") {
			removeFadeOut(timerDiv, 1000);
			removeFadeOut(timerWrap, 1000);
			spinBannerDiv.setAttribute("onclick", onclick);
			spinBannerDiv.classList.add("clickable");
		}
	},
};
