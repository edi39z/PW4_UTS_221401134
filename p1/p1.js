const blocks = document.getElementsByClassName('block');
const turn = document.getElementById('turn');
const winner = document.getElementById('winner');
const restart = document.getElementById('restart');

let currentPlayer = 1;
let gameEnded = false;

const click_block = function (event) {
    event.preventDefault();
    if (this.textContent !== '' || gameEnded) {
        return;
    }

    this.textContent = get_sign();
    this.classList.add(get_sign().toLowerCase());

    if (check_winner()) {
        winner.innerHTML = `<span class="gold-text">Player ${currentPlayer}!</span>`;
        restart.removeAttribute("hidden");
        gameEnded = true;
    } else if (check_tie()) {
        winner.innerHTML = `<span class="gold-text">Draw!</span>`;
        restart.removeAttribute("hidden");
        gameEnded = true;
    } else {
        currentPlayer = 3 - currentPlayer;
        turn.textContent = `Player ${currentPlayer}: ${get_sign()}`;
    }
};

const get_sign = function () {
    return currentPlayer === 1 ? 'X' : 'O';
};

const check_winner = function () {
    for (let i = 0; i < 3; i++) {
        if (blocks[i * 3].textContent === get_sign() &&
            blocks[i * 3 + 1].textContent === get_sign() &&
            blocks[i * 3 + 2].textContent === get_sign()) {
            return true;
        }

        if (blocks[i].textContent === get_sign() &&
            blocks[i + 3].textContent === get_sign() &&
            blocks[i + 6].textContent === get_sign()) {
            return true;
        }
    }

    if (blocks[0].textContent === get_sign() &&
        blocks[4].textContent === get_sign() &&
        blocks[8].textContent === get_sign()) {
        return true;
    }

    if (blocks[2].textContent === get_sign() &&
        blocks[4].textContent === get_sign() &&
        blocks[6].textContent === get_sign()) {
        return true;
    }

    return false;
};

const check_tie = function () {
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].textContent === '') {
            return false;
        }
    }
    return true;
};

const restart_game = function () {
    location.reload();
};

for (let index = 0; index < blocks.length; index++) {
    blocks[index].addEventListener('click', click_block);
}

restart.addEventListener('click', restart_game);
