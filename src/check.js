const checkWin = turn => {
	console.log("turn", turn)

	const winConditions = [
		    [1, 2, 3],
		    [4, 5, 6],
		    [7, 8, 9],
		    [1, 4, 7],
		    [2, 5, 8],
		    [3, 6, 9],
		    [1, 5, 9],
		    [3, 5, 7]
		  ];

	for (let i = 0 ; i < winConditions.length ; i++ ) {
		let a = document.getElementById(winConditions[i][0]).value
		let b = document.getElementById(winConditions[i][1]).value
		let c = document.getElementById(winConditions[i][2]).value
		if (a === b && b === c && a && b && c) {
			return true;
		}
	}

	return false;

}

export default checkWin;