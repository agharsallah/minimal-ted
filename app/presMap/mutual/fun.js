	function getColor(d) {
	    return d > 10 ? '#f60707' :
	           d > 7  ? '#FF6F00' :
	           d > 4  ? '#FFFF00' :
	           d > 1  ? '#4CAF50' :
	           d == 'inexistant'? '#FFFFFF' :
	                      '#CDDC39';
	}
	





export { getColor };