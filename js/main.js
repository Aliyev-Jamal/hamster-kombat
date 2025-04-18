const gameTap = document.querySelector('.game-body-tap');
const walletEl = document.querySelector('#wallet')

let wallet = 0;

function handleTap(){
    wallet++;
    walletEl.innerHTML = wallet;
}

gameTap.onclick = handleTap;