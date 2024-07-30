function accum(s) { 
	return s.split('').map((char, count) => char.toUpperCase() + char.toLowerCase().repeat(count)).join('-')
}