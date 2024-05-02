let flag = 1;

const ar = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

let itm = document.getElementsByClassName('btn');

for(let i=0; i<9; i++) {
    itm[i].addEventListener('click', (e) => {
        let id = e.target.id;
        let x = id[0] * 1, y = id[1] * 1;

        if(ar[x][y] === 0) {
            ar[x][y] = flag;

            let move = 'X';
            if(flag == 2) {
                move = 'O';
            }

            itm[i].textContent = move;

            checkWinner();

            if(flag === 1) flag = 2;
            else flag = 1;
        }
    });
}

const checkWinner = () => {
    for(let i = 0; i < 3; i++) {

        let ok = true;

        for(let j = 0; j < 3; j++) {
            if(ar[i][j] !== ar[i][0] || ar[i][j] === 0) {
                ok = false;
                break;
            }
        }

        if(ok) {
            declareWinner();
            return;
        }
    }

    for(let j = 0; j < 3; j++) {

        let ok = true;

        for(let i = 0; i < 3; i++) {
            if(ar[i][j] !== ar[0][j] || ar[i][j] === 0) {
                ok = false;
                break;
            }
        }

        if(ok) {
            declareWinner();
            return;
        }
    }

    if(ar[0][0] === ar[1][1] && ar[1][1] === ar[2][2] && Math.min(ar[0][0], ar[1][1], ar[2][2]) > 0) {
        declareWinner();
        return;
    }

    if(ar[0][2] === ar[1][1] && ar[1][1] === ar[2][0] && Math.min(ar[0][2], ar[1][1], ar[2][0]) > 0) {
        declareWinner();
        return;
    }
}

const declareWinner = () => {
    document.getElementById('winner').textContent = 'Player ' + flag + ' is the winner!';
    
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            ar[i][j] = -1;
        }
    }
}
