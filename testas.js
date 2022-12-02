// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite  yra vienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

//1.
const a = 4;
const b = 4;

function lygus(a, b) {
    if (a = b) {
        console.log("a yra lygus b");   
    } else if (a > b){
        console.log("a yra didesnis uz b");   
    } else if (a < b){
        console.log("b yra didesnis uz a");   
    }
}
 //lygus(a, b)   


 //2.

 function skaiciai() {
    
        for (let i = 1; i < 11; i++) {
            console.log(i);
        }
 }
//skaiciai()


 //3.

 function kasAntras() {
    
    for (let i = -1; i < 11; i++) {
        i++;
        console.log(i);
    }
}
 //kasAntras()

 //4.

 function random(max) {
    
    for (let i = 0; i < 5; i++) {
        
        console.log(Math.floor(Math.random() * max));
    }
}
// random(10)

// //5.

                                //NEVEIKIA
// let x = 5;
// function ikiPenkiu(x) {
//     while (a < x) {
//         for (let i = 0; i = 5; i++) {
//             const a = Math.floor(Math.random() * 10);
//             console.log(a);
//         }
//     }
// }
// ikiPenkiu(x)


//6.

const max = 30;
const min = 10;

const mini = 20;
const maxi = 30;
let kazkas = [];

// Skaicioja masyvo ilgi
let ilgis = 0;
function l(mini, maxi) {
    mini = Math.ceil(mini);
    maxi = Math.floor(maxi);
    const k = Math.floor(Math.random() * (maxi - mini) + mini);
    return ilgis = k;
}
l(mini, maxi);

// Gamina arreju
function iki(max, min) {
    for (let i = 0; i < ilgis; i++) {  
        min = Math.ceil(min);
        max = Math.floor(max);
        const atsak = Math.floor(Math.random() * (max - min) + min);
        kazkas.push(atsak)
    }
}
iki(max, min)
// console.log(kazkas);

// Surasti didzioausia masyvo reiksme
let largest= 0;
for (let i = 0; i < kazkas.length; i++) {
    if (largest < kazkas[i] ) {
        largest = kazkas[i];
    }
}
// console.log("Didziausias " + largest);


//7.

let raides = [];
let A = 0;
let B = 0;
let C = 0;
let D = 0;

function Letter() {
    const raides = 'ABCD';
    return raides[Math.floor(Math.random() * raides.length)];
}

for (let i = 0; i < 100; i++) {
    raides[i] = Letter();
    if (raides[i] === 'A') {
        A++;
    } else if (raides[i] === 'B') {
        B++;
    } else if (raides[i] === 'C') {
        C++;
    } else {
        D++;
    }
}
// console.log(raides);
// console.log('A : ' + A + '  B : ' + B + '  C : ' + C + '  D : ' + D);

//8.

function lSum(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        let sSum = a + b;
        if (sSum % 2 === 0) {
            return sSum;
        } else {
            return 'Skaiciu suma nelygine';
        }
    } else if (a.constructor === Array && b.constructor === Array) {
        let mSum = a.length + b.length;
        if (mSum % 2 === 0) {
            return mSum;
        } else {
            return 'Masyvu suma nelygine';
        }
    } else {
        return 'Abu kintamieji turi buti skaiciai arba masyvai';
    }
}

console.log(lSum([1, 2, 3], [1, 2]));

//9.

// function name(params) {
    
// }