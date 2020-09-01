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
        
function gDallePleine(epaisseur, chape, carrelage, platre, sable, enduit) //en cm

{
    return (epaisseur*0.25 + chape*0.2 + carrelage*0.2 + platre*0.1 + sable*0.19 + enduit*0.20) //en KN/m²
}

function gDalleCreuse(type, chape, carrelage, platre, sable, enduit)
{
    let gd=0;
    if(type=="12+4"){ gd=2.6}
    else if(type=="16+4"){gd=2.85}
    else if(type=="20+4"){gd=3.3}
    else if(type=="30+5"){gd=4}
    return (gd + chape*0.2 + carrelage*0.2 + platre*0.1 + sable*0.19 + enduit*0.20) //en KN/m²
}

function gMur(nature, epaisseur, enduitInt, enduitExt)
{
/*briques pleines		par cm 	0,19
parpings pleins		par cm 	0,21
parpings creux porteurs 		par cm 	0,135
*/
let rho=0;
if (nature=="Briques Pleines") {rho=0.19}
else if(nature=="Parpings Pleins") {rho=0.21}
else if(nature=="Parpings Creux") {rho=0.135}
return (rho*epaisseur + enduitInt*0.2 +enduitExt*0.2) // en KN/m² de hauteur et de longueur
}


console.log(gDallePleine(15, 2, 1, 5, 0, 0).toFixed(2));
console.log(gDalleCreuse("16+4", 2, 0, 0, 0, 2).toFixed(2))
console.log(gMur("Parpings Creux", 20, 2, 2).toFixed(2))