const gameTap = document.querySelector('.game-body-tap');
const walletEl = document.querySelector('#wallet');
const levelBar = document.querySelector('.level-bar-percent');
const levelInfo = document.querySelector('#level-info');
const energyEl = document.querySelector('#energy');
const hamster = document.querySelector('.game-body-tap');

let wallet = 0;

const account = {
    balance:0,
    moneyPerTap:1,
    moneyPerSecond:0,
    energy:1000,
    level:{
        lvl:0,
        lvlUpCost:100,
        point:0,
    }
}

function handleTap(){
    if(account.energy - account.moneyPerTap > 0){
        account.energy -= account.moneyPerTap;
        energyEl.innerHTML = account.energy;
        wallet = wallet + account.moneyPerTap;
        walletEl.innerHTML = wallet;
        hamster.classList.add('active-tap');
        let timeout = setTimeout(() => {
            hamster.classList.remove('active-tap');
            clearTimeout(timeout);
        },100);
        upgradeLevel();
    }
}

function upgradeLevel(){
    if(account.level.point < account.level.lvlUpCost){
        account.level.point++;
        levelBar.style.width = (account.level.point / account.level.lvlUpCost) * 100 + '%';
    }else{
        account.level.point = 0;
        account.level.lvl++;
        account.moneyPerTap = account.moneyPerTap * 2;
        account.level.lvlUpCost = account.level.lvlUpCost * 1.5;
        levelBar.style.width = (account.level.point / account.level.lvlUpCost) * 100 + '%';
        levelInfo.innerHTML = account.level.lvl;
    }
}

function liveCycle(){
    let interval = setInterval(() => {
        if(account.energy < 1000){
            account.energy++;
            energyEl.innerHTML = account.energy;
        }else{
            return
        }
    }, 1000);
}

liveCycle();

gameTap.onclick = handleTap;