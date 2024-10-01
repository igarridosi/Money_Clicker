let clickKontagailua = 5000;
let autoClickerCount = 0;

let penalty = 20;
let referee = 100;
let VAR = 300;
let laLiga = 1000;
let champions = 5000;

let penaltyCount = 0;
let refereeCount = 0;
let VARCount = 0;
let laLigaCount = 0;
let championsCount = 0;

let madrid = document.getElementById('madrid');
let counter = document.getElementById('counter');
let clickSpeed = document.getElementById('speed');

let penaltyField = document.getElementById('penaltyField');
let refereeField = document.getElementById('refereeField');
let varField = document.getElementById('varField');
let laLigaField = document.getElementById('laLigaField');
let championsField = document.getElementById('championsField');


let penaltyValue = document.getElementById("penalti-value");
let refereeValue = document.getElementById("referee-value");
let varValue = document.getElementById("var-value");
let laLigaValue = document.getElementById("laliga-value");
let championsValue = document.getElementById("champions-value");

function mouseOver(){
    madrid.style.width = "60%";
}

function mouseLeave(){
    madrid.style.width = "50%";
}

function eguneratuKontagailua(){
    counter.innerText = `Money amount: ${clickKontagailua.toFixed(1)}€`
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("penalti").disabled = true;
    document.getElementById("referee").disabled = true;
    document.getElementById("var").disabled = true;
    document.getElementById("laLiga").disabled = true;
    document.getElementById("champions").disabled = true;
});

madrid.addEventListener('click', () => {
    clickKontagailua++;
    eguneratuKontagailua();
    if(clickKontagailua >= penalty){
        document.getElementById("penalti").disabled = false;
    }
    else{
        document.getElementById("penalti").disabled = true;
    }
    if(clickKontagailua >= referee){
        document.getElementById("referee").disabled = false;
    }
    else{
        document.getElementById("referee").disabled = true;
    }
    if(clickKontagailua >= VAR){
        document.getElementById("var").disabled = false;
    }
    else{
        document.getElementById("var").disabled = true;
    }
    if(clickKontagailua >= laLiga){
        document.getElementById("laLiga").disabled = false;
    }
    else{
        document.getElementById("laLiga").disabled = true;
    }
    if(clickKontagailua >= champions){
        document.getElementById("champions").disabled = false;
    }
    else{
        document.getElementById("champions").disabled = true;
    }
    
    
});

function penaltiClick(){
    if(clickKontagailua >= penalty){
        clickKontagailua -= penalty;

        penaltyCount++;
        penaltyField.innerHTML = `<div> <img src='img/penalti.png'> <h3>${penaltyCount}</h3> </div>`;

        autoClickerCount += 0.1;
        penalty = Math.ceil(penalty * 1.5);
        penaltyValue.innerText = `${penalty}€`
        eguneratuKontagailua();
        startAutoClicker();

        if(clickKontagailua < penalty){
            document.getElementById("penalti").disabled = true;
        }
    }
}

function refereeClick(){
    if(clickKontagailua >= referee){
        clickKontagailua -= referee;

        refereeCount++;
        refereeField.innerHTML = `<div> <img src='img/arbitro.png'> <h3>${refereeCount}</h3> </div>`;
        

        autoClickerCount += 0.5;
        referee = Math.ceil(referee * 1.5);
        refereeValue.innerText = `${referee}€`
        eguneratuKontagailua();
        startAutoClicker();

        if(clickKontagailua < referee){
            document.getElementById("referee").disabled = true;
        }
    }
}

function varClick(){
    if(clickKontagailua >= VAR){
        clickKontagailua -= VAR;

        VARCount++;
        varField.innerHTML = `<div> <img src='img/var.png'> <h3>${VARCount}</h3> </div>`;

        autoClickerCount += 1;
        VAR = Math.ceil(VAR * 1.5);
        varValue.innerText = `${VAR}€`
        eguneratuKontagailua();
        startAutoClicker();

        if(clickKontagailua < VAR){
            document.getElementById("var").disabled = true;
        }
    }
}

function laLigaClick(){
    if(clickKontagailua >= laLiga){
        clickKontagailua -= laLiga;

        laLigaCount++;
        laLigaField.innerHTML = `<div> <img src='img/laliga.png'> <h3>${laLigaCount}</h3> </div>`;

        autoClickerCount += 2.5;
        laLiga = Math.ceil(laLiga * 1.5);
        laLigaValue.innerText = `${laLiga}€`
        eguneratuKontagailua();
        startAutoClicker();

        if(clickKontagailua < laLiga){
            document.getElementById("laLiga").disabled = true;
        }
    }
}

function championsClick(){
    if(clickKontagailua >= champions){
        clickKontagailua -= champions;

        championsCount++;
        championsField.innerHTML = `<div> <img src='img/champions.png'> <h3>${championsCount}</h3> </div>`;

        autoClickerCount += 5;
        champions = Math.ceil(champions * 1.5);
        championsValue.innerText = `${champions}€`;
        eguneratuKontagailua();
        startAutoClicker();

        if(clickKontagailua < champions){
            document.getElementById("champions").disabled = true;
        }
    }
}

function startAutoClicker() {
    clickSpeed.innerText = `Per second: ${autoClickerCount.toFixed(1)}`;
    setInterval(() => {
        clickKontagailua += autoClickerCount;
        eguneratuKontagailua();
    }, 1000);
}