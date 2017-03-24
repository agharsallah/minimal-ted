	function getColor(d) {
	    return d > 10 ? 'black' :
	           d > 7  ? '#2c7fb8' :
	           d > 4  ? '#81D4FA' :
	           d > 1  ? '#B3E5FC' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#B2DFDB';
	}
	





export { getColor };