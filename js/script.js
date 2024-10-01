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
let clickKontagailua = 5000;
let autoClickerCount = 0;

// HTML elementuak
let madrid = document.getElementById('madrid');
let counter = document.getElementById('counter');
let clickSpeed = document.getElementById('speed');

//Boosters
let blueBoosters = document.getElementById('arrow-blue');
let greenBoosters = document.getElementById('arrow-green');
let candyBoosters = document.getElementById('arrow-candy');

// Funtzioa kontagailua eguneratzeko
function eguneratuKontagailua() {
    counter.innerText = `Money amount: ${clickKontagailua.toFixed(1)}€`;
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
}

// Funtzioa hobekuntzak eguneratzeko
function eguneratuHobekuntzak() {
    hobekuntzak.forEach(objetua => {
        document.getElementById(`${objetua.name}Field`).innerHTML = `<div> <img src='img/${objetua.name}.png'> <h3>${objetua.count}</h3> </div>`;
        document.getElementById(`${objetua.name}-value`).innerText = `${objetua.cost}€`;
        
        // Botoia desgaitu edo gaitzea
        document.getElementById(objetua.name).disabled = clickKontagailua < objetua.cost; // true / false
        //console.log(clickKontagailua < objetua.cost)
        
        // Boosters enable / disable
        if(objetua.name == 'penalty' && objetua.count >= 10){
            //boosterCount -= 10; TO DO!!!
            
            document.getElementById("arrow-blue").disabled = false;
            console.log("Sartu")
        }
        else{
            document.getElementById("arrow-blue").disabled = true;
        }
        if(objetua.name == 'var' && objetua.count > 5){
            document.getElementById("arrow-green").disabled = false;
        }
        else{
            document.getElementById("arrow-green").disabled = true;
        }
        if(objetua.name == 'laLiga' && objetua.count > 5){
            document.getElementById("arrow-candy").disabled = false;
        }
        else{
            document.getElementById("arrow-candy").disabled = true;
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


blueBoosters.addEventListener('click', ()=>{
    let clickBoost = 2;
    setTimeout(() => {
        clickKontagailua += clickBoost;
        console.log(clickKontagailua);
    }, 30000); // 30 segundu
});

greenBoosters.addEventListener('click', ()=>{
    let clickBoost = 3;
    setTimeout(() => {
        clickKontagailua += clickBoost;
        console.log(clickKontagailua);
    }, 30000);

});

candyBoosters.addEventListener('click', ()=>{
    let clickBoost = 5;
    setTimeout(() => {
        clickKontagailua += clickBoost;
        console.log(clickKontagailua);
    }, 30000);

});

startAutoClicker();
