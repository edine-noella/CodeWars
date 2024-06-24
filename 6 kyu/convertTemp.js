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
        if (to_scale === "F") return temp * 9 / 5 + 32;
        if (to_scale === "K") return temp + 273.15;
        if (to_scale === "R") return (temp + 273.15) * 9 / 5;
        if (to_scale === "De") return (100 - temp) * 3 / 2;
        if (to_scale === "N") return temp * 33 / 100;
        if (to_scale === "Re") return temp * 4 / 5;
        if (to_scale === "Ro") return temp * 21 / 40 + 7.5;
    }
    if (from_scale === "F") {
        if (to_scale === "C") return (temp - 32) * 5 / 9;
        if (to_scale === "K") return (temp + 459.67) * 5 / 9;
        if (to_scale === "R") return temp + 459.67;
        if (to_scale === "De") return (212 - temp) * 5 / 6;
        if (to_scale === "N") return (temp - 32) * 11 / 60;
        if (to_scale === "Re") return (temp - 32) * 4 / 9;
        if (to_scale === "Ro") return (temp - 32) * 7 / 24 + 7.5;
    }
    if (from_scale === "K") {
        if (to_scale === "C") return temp - 273.15;
        if (to_scale === "F") return temp * 9 / 5 - 459.67;
        if (to_scale === "R") return temp * 9 / 5;
        if (to_scale === "De") return (373.15 - temp) * 2 / 3;
        if (to_scale === "N") return (temp - 273.15) * 33 / 100;
        if (to_scale === "Re") return (temp - 273.15) * 4 / 5;
        if (to_scale === "Ro") return (temp - 273.15) * 21 / 40 + 7.5;
    }
    if (from_scale === "R") {
        if (to_scale === "C") return (temp - 491.67) * 5 / 9;
        if (to_scale === "F") return temp - 459.67;
        if (to_scale === "K") return temp * 5 / 9;
        if (to_scale === "De") return (671.67 - temp) * 5 / 6;
        if (to_scale === "N") return temp * 11 / 60;
        if (to_scale === "Re") return temp * 4 / 9;
        if (to_scale === "Ro") return temp * 7 / 24 + 7.5;
    }
    if (from_scale === "De") {
        if (to_scale === "C") return 100 - temp * 2 / 3;
        if (to_scale === "F") return 212 - temp * 6 / 5;
        if (to_scale === "K") return 373.15 - temp * 3 / 2;
        if (to_scale === "R") return 671.67 - temp * 6 / 5;
        if (to_scale === "N") return 33 - temp * 11 / 50;
        if (to_scale === "Re") return 80 - temp * 8 / 15;
        if (to_scale === "Ro") return 60 - temp * 7 / 20;
    }

    if (from_scale === "N") {
        if (to_scale === "C") return temp * 100 / 33;
        if (to_scale === "F") return temp * 60 / 11 + 32;
        if (to_scale === "K") return temp * 100 / 33 + 273.15;
        if (to_scale === "R") return temp * 60 / 11 + 491.67;
        if (to_scale === "De") return 33 - temp * 50 / 11;
        if (to_scale === "Re") return temp * 80 / 33;
        if (to_scale === "Ro") return temp * 35 / 22 + 7.5;
    }
    if (from_scale === "Re") {
        if (to_scale === "C") return temp * 5 / 4;
        if (to_scale === "F") return temp * 9 / 4 + 32;
        if (to_scale === "K") return temp * 5 / 4 + 273.15;
        if (to_scale === "R") return temp * 9 / 4 + 491.67;
        if (to_scale === "De") return 80 - temp * 15 / 8;
        if (to_scale === "N") return temp * 33 / 80;
        if (to_scale === "Ro") return temp * 21 / 32 + 7.5;
    }
    if (from_scale === "Ro") {
        if (to_scale === "C") return (temp - 7.5) * 40 / 21;
        if (to_scale === "F") return (temp - 7.5) * 24 / 7 + 32;
        if (to_scale === "K") return (temp - 7.5) * 40 / 21 + 273.15;
        if (to_scale === "R") return (temp - 7.5) * 24 / 7 + 491.67;
        if (to_scale === "De") return 60 - temp * 20 / 7;
        if (to_scale === "N") return temp * 22 / 35;
        if (to_scale === "Re") return (temp - 7.5) * 32 / 21;
    }else return "Invalid scale";




}

console.log(convertTemp(-30, "De", "K"));
