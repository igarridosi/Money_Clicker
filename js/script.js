// Objektuak definitzen dira hobekuntzak gordetzeko
class Objetua {
    constructor(name, cost, production) {
        this.name = name;
        this.cost = cost;
        this.count = 0;
        this.production = production;
    }

    // Hobekuntza bat erosteko funtzioa
    erosi() {
        if (clickKontagailua >= this.cost) {
            clickKontagailua -= this.cost;
            this.count++;
            this.cost = Math.ceil(this.cost * 1.5);
            autoClickerCount += this.production;
            eguneratuKontagailua();
            eguneratuHobekuntzak();
        }
    }
}

// Hobekuntzen array-a definitu
let hobekuntzak = [
    new Objetua('penalty', 20, 0.1),
    new Objetua('referee', 100, 0.5),
    new Objetua('var', 300, 1),
    new Objetua('laLiga', 1000, 2.5),
    new Objetua('champions', 5000, 5),
];

// Aldagai globalak
let clickKontagailua = 0;
let autoClickerCount = 0;
let clickBoost = 1;

// HTML elementuak
let madrid = document.getElementById('madrid');
let counter = document.getElementById('counter');
let clickSpeed = document.getElementById('speed');

//Boosters
let blueBoosters = document.getElementById('arrow-blue');
let greenBoosters = document.getElementById('arrow-green');
let candyBoosters = document.getElementById('arrow-candy');
let goldBooster = document.getElementById('arrow-gold');

// Funtzioa kontagailua eguneratzeko
function eguneratuKontagailua() {
    counter.innerText = `Money amount: ${clickKontagailua.toFixed(1)}€`;
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
}

// Funtzioa hobekuntzak eguneratzeko
function eguneratuHobekuntzak() {
    hobekuntzak.forEach(objetua => {
        document.getElementById(`${objetua.name}Field`).innerHTML = `<div> <img src='img/${objetua.name}.png'> <h3>+ ${objetua.production}€/s</h3> <h3>${objetua.count}</h3> </div>`;
        document.getElementById(`${objetua.name}-value`).innerText = `${objetua.cost}€`;
        
        // Botoia desgaitu edo gaitzea
        document.getElementById(objetua.name).disabled = clickKontagailua < objetua.cost; // true / false
        //console.log(clickKontagailua < objetua.cost)

        if (hobekuntzak.find(obj => obj.name === 'penalty').count >= 10) {
            blueBoosters.disabled = false;
        } else {
            blueBoosters.disabled = true;
        }
    
        if (hobekuntzak.find(obj => obj.name === 'var').count >= 5) {
            greenBoosters.disabled = false;
        } else {
            greenBoosters.disabled = true;
        }
    
        if (hobekuntzak.find(obj => obj.name === 'laLiga').count >= 3) {
            candyBoosters.disabled = false;
        } else {
            candyBoosters.disabled = true;
        }

        if (hobekuntzak.find(obj => obj.name === 'champions').count >= 1) {
            goldBooster.disabled = false;
        } else {
            goldBooster.disabled = true;
        }
    });
}

// Erosketa botoiak klikatzeko funtzioak sortu
hobekuntzak.forEach(objetua => {
    document.getElementById(objetua.name).addEventListener('click', () => objetua.erosi());
});

// Elementuak dokumentuan kargatzean
document.addEventListener("DOMContentLoaded", () => {
    hobekuntzak.forEach(objetua => {
        document.getElementById(objetua.name).disabled = true;
    });
    eguneratuKontagailua();
    eguneratuHobekuntzak();
});

// Madrid elementuan klik egitean dirua gehitzea
madrid.addEventListener('click', () => {
    clickKontagailua += clickBoost;
    eguneratuKontagailua();
    eguneratuHobekuntzak();
});

/*
function mouseOver() {
    madrid.style.maxWidth = "45%";
}

function mouseLeave() {
    madrid.style.maxWidth = "40%";
}
    */

// AutoClicker funtzioa hasten da
function startAutoClicker() {
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
    setInterval(() => {
        clickKontagailua += autoClickerCount;
        eguneratuKontagailua();
        eguneratuHobekuntzak();
    }, 1000);
}


// Booster botoien funtzionamendua
blueBoosters.addEventListener('click', () => {
    activateClickBoost(2, 20000, 'blue');
});

greenBoosters.addEventListener('click', () => {
    activateClickBoost(3, 20000, 'green');
});

candyBoosters.addEventListener('click', () => {
    activateClickBoost(5, 45000, 'candy');
});

goldBooster.addEventListener('click', () => {
    activateClickBoost(10, 30000, 'gold');
});


function activateClickBoost(multiplier, duration, color) {
    clickBoost = multiplier;
    setCursor(color);

    setTimeout(() => {
        clickBoost = 1;
        document.body.style.cursor = 'auto';
        document.getElementById("arrow-"+color).style.display = "none";
    }, duration);
}

startAutoClicker();


function setCursor(color) {
    let cursorUrl = '';

    switch (color) {
        case 'green':
        cursorUrl = './img/arrow-green.png';
        break;

        case 'blue':
        cursorUrl = './img/arrow-blue.png';
        break;

        case 'candy':
        cursorUrl = './img/arrow-candy.png';
        break;

        case 'gold':
        cursorUrl = './img/arrow-yellow.png';
        break;
    }

    document.body.style.cursor = `url(${cursorUrl}), auto`;
}
