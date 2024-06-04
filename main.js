// HELP WITH DEBUGGING //
'use strict';

// INIT VALUES //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
};

// GAME FUNCTIONS //

// PLAYER WINS THE GAME - GRAB CLASSES & CHANGE STYLES //
const playerWins = function () {
	displayMessage('Correct Number! 🎉');
	document.querySelector('.secret-number').textContent = secretNumber;
	document.querySelector('body').style.backgroundColor = '#32de84';
	document.querySelector('.sprinkles').style.opacity = '0';
	document.querySelector('.game-title').style.color = '#f1f1f1';
	document.querySelector('.subtitle').style.color = '#f1f1f1';
	document.querySelector('.message').style.color = '#f1f1f1';
	document.querySelector('.secret-number').style.color = '#f1f1f1';
	document.querySelector('.btn-check').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-check').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-check').style.color = '#2a2a2a';
	document.querySelector('.btn-restart').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-restart').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-restart').style.color = '#2a2a2a';
	document.querySelector('.btn-howto').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-howto').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-howto').style.color = '#2a2a2a';
	document.querySelector('.label-score').style.color = '#f1f1f1';
	document.querySelector('.score').style.color = '#f1f1f1';
	document.querySelector('.label-highscore').style.color = '#f1f1f1';
	document.querySelector('.highscore').style.color = '#f1f1f1';
};

// PLAYER LOOSES THE GAME - GRAB CLASSES & CHANGE STYLES //
const playerLoses = function () {
	displayMessage('You Lost!');
	document.querySelector('.score').textContent = 0;
	document.querySelector('body').style.backgroundColor = '#FF5050';
	document.querySelector('.sprinkles').style.opacity = '0';
	document.querySelector('.game-title').style.color = '#f1f1f1';
	document.querySelector('.subtitle').style.color = '#f1f1f1';
	document.querySelector('.message').style.color = '#f1f1f1';
	document.querySelector('.secret-number').style.color = '#f1f1f1';
	document.querySelector('.btn-check').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-check').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-check').style.color = '#2a2a2a';
	document.querySelector('.btn-restart').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-restart').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-restart').style.color = '#2a2a2a';
	document.querySelector('.btn-howto').style.backgroundColor = '#f1f1f1';
	document.querySelector('.btn-howto').style.borderColor = '#d4d4d4';
	document.querySelector('.btn-howto').style.color = '#2a2a2a';
	document.querySelector('.label-score').style.color = '#f1f1f1';
	document.querySelector('.score').style.color = '#f1f1f1';
	document.querySelector('.label-highscore').style.color = '#f1f1f1';
	document.querySelector('.highscore').style.color = '#f1f1f1';
};

// RESTARTING THE GAME - GRAB CLASSES & INITIALISE STYLES BACK TO ORIGINAL //
const gameRestart = function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage('Start Guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.secret-number').textContent = '?';
	document.querySelector('.input-guess').value = '';
	document.querySelector('body').style.backgroundColor = '#f5f5f5';
	document.querySelector('.sprinkles').style.opacity = '1';
	document.querySelector('.game-title').style.color = '#2a2a2a';
	document.querySelector('.subtitle').style.color = '#2a2a2a';
	document.querySelector('.message').style.color = '#2a2a2a';
	document.querySelector('.secret-number').style.color = '#2a2a2a';
	document.querySelector('.btn-check').style.backgroundColor = '#007fff';
	document.querySelector('.btn-check').style.borderColor =
		'rgba(0, 71, 171, 0.5)';
	document.querySelector('.btn-check').style.color = '#f1f1f1';
	document.querySelector('.btn-restart').style.backgroundColor = '#007fff';
	document.querySelector('.btn-restart').style.borderColor =
		'rgba(0, 71, 171, 0.5)';
	document.querySelector('.btn-restart').style.color = '#f1f1f1';
	document.querySelector('.btn-howto').style.backgroundColor = '#007fff';
	document.querySelector('.btn-howto').style.borderColor =
		'rgba(0, 71, 171, 0.5)';
	document.querySelector('.btn-howto').style.color = '#f1f1f1';
	document.querySelector('.label-score').style.color = '#2a2a2a';
	document.querySelector('.score').style.color = '#2a2a2a';
	document.querySelector('.label-highscore').style.color = '#2a2a2a';
	document.querySelector('.highscore').style.color = '#2a2a2a';
};

// GAME LOGIC //

// CLICKING 'CHECK' BUTTON - GRAB CLASSES //
document.querySelector('.btn-check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.input-guess').value);
	console.log(guess, typeof guess);

	// CHECK IF THERE IS NO INPUT - DISPLAY STYLES
	if (!guess) {
		displayMessage('Not a number...');
		document.querySelector('.message').style.color = '#FF5050';

		// IF A PLAYER WINS, CALL THE PLAYERWINS FUNCTION //
	} else if (guess === secretNumber) {
		playerWins();

		// SET A HIGHSCORE - OVERWRITE IF IT'S BIGGER THAN PREVIOUS //
		if (score > highScore) {
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}

		// IF THE GUESS IS WRONG - GRAB CLASSES & CHANGE STYLES
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
			score--;
			document.querySelector('.message').style.color = '#FF5050';
			document.querySelector('.score').textContent = score;
		} else {
			// CALL THE 'PLAYER LOOSES' FUNCTION WHEN X LOOSES THE GAME //
			playerLoses();
		}
	}

	// GAME RESET BUTTON //
	document.querySelector('.btn-restart').addEventListener('click', function () {
		gameRestart();
	});
});

// TUTORIAL MODAL WINDOW //

// GRAB MODAL WINDOW CLASSES //
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtn = document.querySelectorAll('.btn-howto');

// FUNCTION TO CLOSE THE MODAL WINDOW //
const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

// FUNCTION TO OPEN THE MODAL WINDOW //
const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

// MODAL WINDOW LOGIC //
for (let i = 0; i < openModalBtn.length; i++) {
	openModalBtn[i].addEventListener('click', openModal);
}

// LISTEN FOR BUTTON CLICK - IF PRESENT, CALL CALLBACK FUNCTION TO CLOSE MODAL //
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// LISTEN FOR IF A USER PRESSES KEYBOARD 'ESC' KEY TO CLOSE MODAL //
document.addEventListener('keydown', function (event) {
	console.log(event.key);

	// IF USER PRESSES 'ESC' KEY AND THERE IS NO 'HIDDEN' CLASS, CALL CLOSE MODAL FUNCTION //
	if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});
