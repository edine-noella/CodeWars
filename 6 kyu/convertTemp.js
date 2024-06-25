// possible scale inputs:
//     "C"  for Celsius
//     "F"  for Fahrenheit
//     "K"  for Kelvin
//     "R"  for Rankine
//     "De" for Delisle
//     "N"  for Newton
//     "Re" for Réaumur
//     "Ro" for Rømer

function convertTemp(temp, from_scale, to_scale) {
    if (from_scale === to_scale) return temp;
    if (from_scale === "C" ) {
        if (to_scale === "F") return Math.round((temp *9/5) + 32);
        if (to_scale === "K") return Math.round(temp + 273.15);
        if (to_scale === "R") return Math.round((temp + 273.15) * 9 / 5);
        if (to_scale === "De") return Math.round((temp * 1.5) - 100);
        if (to_scale === "N") return Math.roung(temp * 0.33000);
        if (to_scale === "Re") return Math.round((temp * 4)/5);
        if (to_scale === "Ro") return Math.round((temp / 1.9047619) + 7.5);
    }
    if (from_scale === "F") {
        if (to_scale === "C") return Math.round((temp - 32) * 5/9);
        if (to_scale === "K") return Math.round((temp - 32) * 5 / 9 + 273.15);
        if (to_scale === "R") return Math.round(temp + 459.67);
        if (to_scale === "De") return Math.round(( 212 - temp ) * 5 / 6);
        if (to_scale === "N") return Math.round((temp - 32) * 11 / 60);
        if (to_scale === "Re") return Math.round((temp - 32) * 4 / 9);
        if (to_scale === "Ro") return Math.round((temp - 32) * 7 / 24 + 7.5);
    }
    if (from_scale === "K") {
        if (to_scale === "C") return Math.round(temp - 273.15);
        if (to_scale === "F") return Math.round(temp * 9 / 5 - 459.67);
        if (to_scale === "R") return Math.round(temp * 9 / 5);
        if (to_scale === "De") return Math.round((373.15 - temp) * 2 / 3);
        if (to_scale === "N") return Math.round((temp - 273.15) * 33 / 100);
        if (to_scale === "Re") return Math.round((temp - 273.15) * 4 / 5);
        if (to_scale === "Ro") return Math.round((temp - 273.15) * 21 / 40 + 7.5);
    }
    if (from_scale === "R") {
        if (to_scale === "C") return Math.round((temp - 491.67) * 5 / 9);
        if (to_scale === "F") return Math.round(temp - 459.67);
        if (to_scale === "K") return Math.round(temp * 5 / 9);
        if (to_scale === "De") return Math.round((671.67 - temp) * 5 / 6);
        if (to_scale === "N") return Math.round(temp * 11 / 60);
        if (to_scale === "Re") return Math.round(temp * 4 / 9);
        if (to_scale === "Ro") return Math.round(temp * 7 / 24 + 7.5);
    }
    if (from_scale === "De") {
        if (to_scale === "C") return Math.round(100 - temp * 2 / 3);
        if (to_scale === "F") return Math.round(212 - temp * 6 / 5);
        if (to_scale === "K") return Math.round(( 373.15 - temp * 2 / 3 )) ;
        if (to_scale === "R") return Math.round(671.67 - temp * 6 / 5);
        if (to_scale === "N") return Math.round(33 - temp * 11 / 50);
        if (to_scale === "Re") return Math.round(80 - temp * 8 / 15);
        if (to_scale === "Ro") return Math.round(60 - temp * 7 / 20);
    }

    if (from_scale === "N") {
        if (to_scale === "C") return Math.round(temp * 100 / 33);
        if (to_scale === "F") return Math.round(temp * 60 / 11 + 32);
        if (to_scale === "K") return Math.round(temp * 100 / 33 + 273.15);
        if (to_scale === "R") return Math.round(temp * 60 / 11 + 491.67);
        if (to_scale === "De") return Math.round(33 - temp * 50 / 11);
        if (to_scale === "Re") return Math.round(temp * 80 / 33);
        if (to_scale === "Ro") return Math.round(temp * 35 / 22 + 7.5);
    }
    if (from_scale === "Re") {
        if (to_scale === "C") return Math.round(temp * 5 / 4);
        if (to_scale === "F") return Math.round(temp * 9 / 4 + 32);
        if (to_scale === "K") return Math.round(temp * 5 / 4 + 273.15);
        if (to_scale === "R") return Math.round(temp * 9 / 4 + 491.67);
        if (to_scale === "De") return Math.round(80 - temp * 15 / 8);
        if (to_scale === "N") return Math.round(temp * 33 / 80);
        if (to_scale === "Ro") return Math.round(temp * 21 / 32 + 7.5);
    }
    if (from_scale === "Ro") {
        if (to_scale === "C") return Math.round((temp - 7.5) * 40 / 21);
        if (to_scale === "F") return Math.round((temp - 7.5) * 24 / 7 + 32);
        if (to_scale === "K") return Math.round((temp - 7.5) * 40 / 21 + 273.15);
        if (to_scale === "R") return Math.round((temp - 7.5) * 24 / 7 + 491.67);
        if (to_scale === "De") return Math.round(60 - temp * 20 / 7);
        if (to_scale === "N") return Math.round(temp * 22 / 35);
        if (to_scale === "Re") return Math.round((temp - 7.5) * 32 / 21);
    }else return "Invalid scale";




}

console.log(convertTemp(-30, "De", "K"));
