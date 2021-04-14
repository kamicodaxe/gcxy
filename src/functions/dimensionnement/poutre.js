

// Script written by Kami Loïc (ruvice101, kamiruvice@gmail.com)


/**
 * Data:
 * Med [kNm]: Moment
 * V [kN]: Shear
 * fck [kN]: Shear
 * cover [mm]: Concrete cover
 * d [mm]: Effective depth
 */

const Med = 48
const V = 44
const fck = 30
const fyk = 500
const b = 150
const h = 600
const cover = 25
const mainBarSize = 12
const linkBarSize = 10
const d = h - cover - linkBarSize - mainBarSize / 2


/**
 * 
 * @param {*} Med Maximum moment
 * @param {*} b width of beam
 * @param {*} d Effective depth
 * @param {*} kPrime equals 0.167
 * @returns 
 */
function getKIfBeamNotOverReinforced(Med, b, kPrime = 0.167) {
    let k = Med * Math.pow(10, 6) / (b *d *d * fck)
    if (k < kPrime) return k
    // Null implies that the beam is overreinforced
    return null;
}

let k = getKIfBeamNotOverReinforced(Med, b)

console.log(k)

function leverArm(d, K) {
    let z = d * (0.5 + Math.sqrt(0.25 - (K/1.134)));
    return z > 0.95 * d ? 0.95 * d : z;
}

let z = leverArm(d, k)

console.log(z)

/**
 * 
 * @param {*} Med 
 * @param {*} z Lerver arm
 * @returns Area of stell required in [unints]
 */
function getAsReq(Med, z) {
    return Med * Math.pow(10, 6) / (0.87 * fyk * z);
}

let asReq = getAsReq(Med, z)
console.log(asReq)

function getBarSizes(As, bar) {
    let bars =  [8, 10, 12, 14, 16, 18];
    let areas = bars.map(function(bar) {
        return Math.PI * Math.pow(bar, 2) / 4
    })

    console.log(asReq / areas[bars.indexOf(bar)])

    return {

    }
}

getBarSizes(asReq, 12)


/**
 * AsTransMax
 * @param {*} Ac aire de la section droite du béton
 * @returns La section maximale d’armatures
 */
function AsMax(Ac) {
    return 0.04 * Ac;
}

/**
 * Armatures longitudinales
 * @param {} fctm la valeur moyenne de la résistance en traction directe du béton
 * @param {} fyk limite caractéristique d’élasticité de l’acier
 * @param {} bT largeur moyenne de la zone tendue
 * @param {} d hauteur utile de la section droite 
 */
function AsMinTrans(fctm, fyk, bT, d) {
    return 0,26 * (fctm / fyk )* bT * d;
}

/**
 * Get FCTM with concrete class <= C50/60
 * @param {*} fck 
 * @returns 
 */
function getFctm(fck) {
    return 0.3 * Math.pow(fck, 2/3);
}

// console.log( AsMinTrans(getFctm(25), 25, 250, 700 ) / (3.14 * Math.pow(8.78, 2) / 4) )

/**
 * Armatures transversales
 * @param {*} asw section d’armatures d’effort tranchant sur une longueur s
 * @param {*} s espacement des armatures d’effort tranchant
 * @param {*} bw largeur de l’âme de l’élément
 * @param {*} alpha angle d’inclinaison entre ces armatures et l’axe longitudinal de l’élément
 * @param {*} fck résistance caractéristique en compression du béton, mesurée sur cylindre à 28 jours
 * @param {*} fyk limite caractéristique d’élasticité de l’acier 
 * @returns Le taux d’armatures d’effort tranchant
 */
function AsMinLon(asw, s, bw, alpha, fck, fyk) {
    const pwMin = 0.08 * Math.sqrt(fck) / fyk;

    let pw = asw / (s * bw * Math.sin(alpha))

    if (pw >= pwMin) return pw;
    
    console.log('pw is less than pwMin')
}



// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
// });


// Shear reinforment


function getVrdMax() {
    return 0.124 * b * d * (1 - fck/250) * fck * Math.pow(10, -3)
}

console.log(getVrdMax())

if (getVrdMax() >= V) {
    // Continue to step 3 teta = 22deg && cot(teta) = 2.5
    function getAsw() {
        return V * Math.pow(10,3) / (0.78 * d * fyk * 2.5)
    }
    
    console.log(getAsw())
} else {
    // let teta = 0.5 * Math.asin(
    //     V / (0.18 * b * fck *(1 - fck/250))
    // )
}


