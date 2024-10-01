// Objektuak definitzen dira hobekuntzak gordetzeko
class Improvement {
    constructor(name, cost, production) {
        this.name = name;
        this.cost = cost;
        this.count = 0;
        this.production = production;
    }

    // Hobekuntza bat erosteko funtzioa
    buy() {
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

// Hobekuntzen array bat definitzen da
let improvements = [
    new Improvement('penalty', 20, 0.1),
    new Improvement('referee', 100, 0.5),
    new Improvement('var', 300, 1),
    new Improvement('laLiga', 1000, 2.5),
    new Improvement('champions', 5000, 5),
];

// Aldagai globalak
let clickKontagailua = 0;
let autoClickerCount = 0;

// HTML elementuak
let madrid = document.getElementById('madrid');
let counter = document.getElementById('counter');
let clickSpeed = document.getElementById('speed');

// Funtzioa kontagailua eguneratzeko
function eguneratuKontagailua() {
    counter.innerText = `Money amount: ${clickKontagailua.toFixed(1)}€`;
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
}

// Funtzioa hobekuntzak eguneratzeko
function eguneratuHobekuntzak() {
    improvements.forEach(improvement => {
        document.getElementById(`${improvement.name}Field`).innerHTML = `<div> <img src='img/${improvement.name}.png'> <h3>${improvement.count}</h3> </div>`;
            document.getElementById(`${improvement.name}-value`).innerText = `${improvement.cost}€`;
        
        // Botoia desgaitu edo gaitzea
        document.getElementById(improvement.name).disabled = clickKontagailua < improvement.cost;
        console.log(clickKontagailua < improvement.cost)
    });
}

// Erosketa botoiak klikatzeko funtzioak sortu
improvements.forEach(improvement => {
    document.getElementById(improvement.name).addEventListener('click', () => improvement.buy());
});

// Elementuak dokumentuan kargatzean
document.addEventListener("DOMContentLoaded", () => {
    improvements.forEach(improvement => {
        document.getElementById(improvement.name).disabled = true;
    });
    eguneratuKontagailua();
    eguneratuHobekuntzak();
});

// Madrid elementuan klik egitean dirua gehitzea
madrid.addEventListener('click', () => {
    clickKontagailua++;
    eguneratuKontagailua();
    eguneratuHobekuntzak();
});


function mouseOver() {
    madrid.style.maxWidth = "45%";
}

function mouseLeave() {
    madrid.style.maxWidth = "40%";
}

// AutoClicker funtzioa hasten da
function startAutoClicker() {
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
    setInterval(() => {
        clickKontagailua += autoClickerCount;
        eguneratuKontagailua();
        eguneratuHobekuntzak();
    }, 1000);
}

// AutoClicker martxan jartzen da
startAutoClicker();
