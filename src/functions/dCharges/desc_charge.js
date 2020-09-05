/* 
Description     	gamma(KN/m3)	epaisseur(m)	G(KN/m²)
Dalle pleine	      25             	0              	0
Dalle creuse		 -                -             2,85
chape	               20	            0,02	    0,4
Carrelage	           20           	0,01	    0,2
Platre	               10	            0	        0
Sable	               19	            0       	0
Enduit sous dalle	    20	            0,02	    0,4
Autres			                                    0
                                            G(KN/m²)	3,85 
12+4	2,6
16+4	2,85
20+4	3,3
30+5	4
                                            
*/
        
function gDallePleine(options)
{
    let {
        epaisseur, //en cm
        chape = 0, //en cm|
        carrelage  = 0, //en cm
        platre  = 0, //en cm
        sable  = 0, //en cm
        enduit = 0 //en cm
    } = options //en cm

    // Rejetter le cas impossible
    if (!epaisseur || typeof epaisseur !== "number" ) {
        return console.warn("Veuillez préciser l'épaisseur de la dalle pleine");
        // Fin de la fonction!
    }

    let ans = (epaisseur*0.25 + chape*0.2 + carrelage*0.2 + platre*0.1 + sable*0.19 + enduit*0.20); //en KN/m²
    return {
        value: ans.toFixed(2),
        unit: 'KN/m²'
    };
}

function gDalleCreuse(options)
{
    let {
        type,
        chape  = 0,
        carrelage  = 0,
        platre  = 0,
        sable  = 0,
        enduit = 0
    } = options

    let gd=0;

    switch (type) {
        case 0: gd=2.6; // "12+4"
            break;
        case 1: gd=2.85; // "16+4"
            break;
        case 2: gd=3.3; // "20+4"
            break;
        case 3: gd=4; // "30+5"
            break;
        default: console.warn('Specify a type!');
            break;
    }

    let ans = gd + chape*0.2 + carrelage*0.2 + platre*0.1 + sable*0.19 + enduit*0.20; //en KN/m²
    return {
        value: ans.toFixed(2),
        unit: 'KN/m²'
    };

}

function gMur(options)
{

    let {
        nature  = 0, //en cm
        epaisseur, //en cm
        enduitInt  = 0, //en cm
        enduitExt = 0 //en cm
    } = options //en cm

/**
 * briques pleines		        par cm 	0,19 type 0
 * parpings pleins		        par cm 	0,21 type 1
 * parpings creux porteurs 		par cm 	0,135 type 2
 **/

let rho = 0;
if (nature === 0 ) { rho=0.19 }
else if(nature === 1 ) { rho=0.21 }
else if(nature === 2 ) { rho=0.135 }

let ans = (rho*epaisseur + enduitInt*0.2 +enduitExt*0.2) // en KN/m² de hauteur et de longueur

return {
    value: ans.toFixed(2),
    unit: 'KN/m²',
    comment: ''
};

}



// TESTS

var options1 = {
    epaisseur: 15, //en cm
    chape: 2, //en cm|
    carrelage: 1, //en cm
    platre: 5, //en cm
    sable: 0, //en cm
    enduit: 0 //en cm
}

console.log(gDallePleine(options1));


var options2 = {
    type: 1,
    chape: 2,
    carrelage: 0,
    platre: 0,
    sable: 0,
    enduit: 2
}
console.log(gDalleCreuse(options2));


var options3 = {
    nature: 2, //en cm
    epaisseur : 20, //en cm
    enduitInt: 2, //en cm
    enduitExt: 2 //en cm
};

console.log(gMur(options3));