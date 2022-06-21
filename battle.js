const rounds = {
	wins: [],
	losses: [],
	teams: {
		dark: [],
		light: []
	}
};

module.exports = {
	fight: (playerOne, playerTwo) => {
		const action = (data) => {
			const legs = [
				`${data.winner} counter steps ${data.loser}'s attack and stomps ${data.loser}'s ${data.side} :leg: in half.`,
				`${data.winner} cuts through the air striking ${data.loser} in the ${data.side} :leg: ripping it off.`,
				`${data.loser} attempts to flip over ${data.winner} but misses, and instead lands on his ${data.side} :leg: wrong causing it to rip in half.`,
				`${data.loser} runs full speed at ${data.winner}, but forgets to stop and gets his ${data.side} :leg: cut off.`
			];

			const arms = [
				`${data.winner} counter swings ${data.loser}'s attack and chops ${data.loser}'s :muscle: clean off.`,
				`${data.winner} cuts through the air striking ${data.loser} in the ${data.side} :muscle: ripping it off.`,
				`${data.loser} attempts to over power ${data.winner} but fails and lands on his ${data.side} :muscle: wrong causing it to fracture.`,
				`${data.loser} runs full speed at ${data.winner}, but forgets to stop and gets his ${data.side} :muscle: cut off.`
			];

			const head = [
				`With their remaining strength, ${data.winner} swings and removes ${data.loser}'s head clean off :dizzy_face:.`,
				`With all their will, ${data.winner} lands their weapon directly on ${data.loser}'s head removing it with a splater :drop_of_blood:.`,
				`${data.winner} proceeds to head butt ${data.loser} until ${data.loser}'s front skill caved in :skull:.`,
				`${data.winner} took a strong swing at ${data.loser}'s head cutting it clean off at the jaw :skull_crossbones:.`
			];

			if (data.part === 'leg') {
				return legs[Math.floor(Math.random() * 3) + 1];
			}

			if (data.part === 'arm') {
				return arms[Math.floor(Math.random() * 3) + 1];
			}

			if (data.part === 'head') {
				return head[Math.floor(Math.random() * 3) + 1];
			}

			return dual();						
		};

		const dual = () => {
			return `CRASH! ${playerOne} and ${playerTwo} counter defend, sending both nearly out of the arena.`;
		};

		const playerOneRolls = [ 
			Math.floor(Math.random() * 10) + 1,  // left leg
			Math.floor(Math.random() * 10) + 1,  // right leg
			Math.floor(Math.random() * 10) + 1,  // left arm
			Math.floor(Math.random() * 10) + 1,  // right arm
			Math.floor(Math.random() * 10) + 1   // head
		];

		const playerTwoRolls = [ 
			Math.floor(Math.random() * 10) + 1,  // left leg
			Math.floor(Math.random() * 10) + 1,  // right leg
			Math.floor(Math.random() * 10) + 1,  // left arm
			Math.floor(Math.random() * 10) + 1,  // right arm
			Math.floor(Math.random() * 10) + 1   // head
		];

		return [
			`${playerOne} and ${playerTwo} both enter the arena, only one will leave.\n :lightsaber: FIGHT! :lightsaber:`,
			playerOneRolls[0] !== playerTwoRolls[0] 
				? `${playerOneRolls[0] > playerTwoRolls[0] 
					? action({ winner: playerOne, loser: playerTwo, part: 'leg', side: 'left', roll: playerOneRolls[0] }) 
					: action({ winner: playerTwo, loser: playerOne, part: 'leg', side: 'left', roll: playerTwoRolls[0] })}` 
				: dual(),

			playerOneRolls[1] !== playerTwoRolls[1] 
				? `${playerOneRolls[1] > playerTwoRolls[1] 
					? action({ winner: playerOne, loser: playerTwo, part: 'leg', side: 'right', roll: playerOneRolls[1] }) 
					: action({ winner: playerTwo, loser: playerOne, part: 'leg', side: 'right', roll: playerTwoRolls[1] })}` 
				: dual(),

			playerOneRolls[2] !== playerTwoRolls[2] 
				? `${playerOneRolls[2] > playerTwoRolls[2] 
					? action({ winner: playerOne, loser: playerTwo, part: 'arm', side: 'left', roll: playerOneRolls[2] }) 
					: action({ winner: playerTwo, loser: playerOne, part: 'arm', side: 'left', roll: playerTwoRolls[2] })}` 
				: dual(),

			playerOneRolls[3] !== playerTwoRolls[3] 
				? `${playerOneRolls[3] > playerTwoRolls[3] 
					? action({ winner: playerOne, loser: playerTwo, part: 'arm', side: 'right', roll: playerOneRolls[3] }) 
					: action({ winner: playerTwo, loser: playerOne, part: 'arm', side: 'right', roll: playerTwoRolls[3] })}` 
				: dual(),
			playerOneRolls[4] !== playerTwoRolls[4] 
				? `${playerOneRolls.reduce((partialSum, a) => partialSum + a, 0) > playerTwoRolls.reduce((partialSum, a) => partialSum + a, 0) 
					? action({ winner: playerOne, loser: playerTwo, part: 'head', side: 'head', roll: playerOneRolls[4] }) 
					: action({ winner: playerTwo, loser: playerOne, part: 'head', side: 'head', roll: playerTwoRolls[4] })}` 
				: dual(),
			`${
				playerOneRolls.reduce((partialSum, a) => partialSum + a, 0) > playerTwoRolls.reduce((partialSum, a) => partialSum + a, 0) 
					? `${playerOne} has won with ${playerOneRolls.reduce((partialSum, a) => partialSum + a, 0)} points :trophy: | ${playerTwo} has lost with ${playerTwoRolls.reduce((partialSum, a) => partialSum + a, 0)} points :head_bandage:` 
					: `${playerTwo} has won with ${playerTwoRolls.reduce((partialSum, a) => partialSum + a, 0)} points :trophy: | ${playerOne} has lost with ${playerOneRolls.reduce((partialSum, a) => partialSum + a, 0)} points :head_bandage:`
			}` 					
		];
	}
};