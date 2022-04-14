const removeConsecutiveDuplicates = (s) => {
	if (s.length <= 1) return s;
	if (s[0] == s[1]) {
		removeConsecutiveDuplicates(s.substring(1));
	} else {
		s[0] + removeConsecutiveDuplicates(s.substring(1));
	}
};
