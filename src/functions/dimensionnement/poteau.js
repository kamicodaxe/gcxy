



/**
 * Armatures longitudinales
 * @param {*} Ned effort normal de compression agissant
 * @param {*} Fyd limite d’élasticité de calcul des armatures;
 * @param {*} Ac aire de la section droite du béton
 * @returns  section totale d’armatures longitudinales
 */

function AsMinLon(Ned, Fyd, Ac) {
    let asMin = 0.10 * Ned / Fyd;

    if (AsMin > 0.04 * Ac) {
        return console.log('AsMin est supérieure à 0.04Ac')
    }

    if (AsMin < 0.002 * Ac) {
        return console.log('AsMin inférieure à 0002Ac')
    }
    
    return asMin
}