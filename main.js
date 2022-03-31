class TvShows {
	constructor(title, description, releaseDate, genre) {
		this.title = title;
		this.description = description;
		this.releaseDate = releaseDate;
		this.genre = genre;
	}
	addToList() {
		alert("Added to list!");
	}
	play() {
		alert("Show starting");
	}
	stop() {
		alert("Show stopping");
	}
}

let areYouAfraidOfTheDark = new TvShows("Are you afraid of the dark", "very scary", 95, "horror");
console.log(areYouAfraidOfTheDark);
