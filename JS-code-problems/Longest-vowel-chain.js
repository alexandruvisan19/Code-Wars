// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// describe("Basic tests", function(){
//     Test.assertEquals(solve("codewarriors"),2);
//     Test.assertEquals(solve("suoidea"),3);
//     Test.assertEquals(solve("ultrarevolutionariees"),3);
//     Test.assertEquals(solve("strengthlessnesses"),1);
//     Test.assertEquals(solve("cuboideonavicuare"),2);
//     Test.assertEquals(solve("chrononhotonthuooaos"),5);
//     Test.assertEquals(solve("iiihoovaeaaaoougjyaw"),8);
//     });
function solve(s) {
	let cur = 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		if ("aeiou".includes(s[i])) {
			cur++;
			if (cur > max) {
				max = cur;
			}
		} else {
			cur = 0;
		}
	}
	return max;
}
// console.log(solve("ultrarevolutionariees"));
console.log("ultrarevolutionariees".split(/[^aeiou]/).map((x) => x.length));
console.log(..."ultrarevolutionariees".match(/[aeiou]+/g));
// let regex = /([!-\~]*[aeiou][!-\~]*)/gi;
// let test = "Th quick brown fox jumps over the lazy dog. It barked.";
