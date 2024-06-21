//convert from one temperature scale to another scale
// "C"  for Celsius
// "F"  for Fahrenheit
// "K"  for Kelvin
// "R"  for Rankine
// "De" for Delisle
// "N"  for Newton
// "Re" for Réaumur
// "Ro" for Rømer

function convertTemp (temp, fromScale, toScale) {
    if (fromScale === toScale) {
        return temp;
    }
    if (fromScale === "C") {

        if (toScale === "F") {
        return temp * 9 / 5 + 32;
        }

        if (toScale === "K") {
        return temp + 273.15;
        }

        if (toScale === "R") {
        return (temp + 273.15) * 9 / 5;
        }

        if (toScale === "De") {
        return (100 - temp) * 3 / 2;
        }

        if (toScale === "N") {
        return temp * 33 / 100;
        }

        if (toScale === "Re") {
        return temp * 4 / 5;
        }

        if (toScale === "Ro") {
        return temp * 21 / 40 + 7.5;
        }

    }
    if (fromScale === "F") {
        if (toScale === "C") {
        return (temp - 32) * 5 / 9;
        }
        if (toScale === "K") {
        return (temp + 459.67) * 5 / 9;
        }
        if (toScale === "R") {
        return temp + 459.67;
        }
        if (toScale === "De") {
        return (212 - temp) * 5 / 6;
        }
        if (toScale === "N") {
        return (temp - 32) * 11 / 60;
        }
        if (toScale === "Re") {
        return (temp - 32) * 4 / 9;
        }
        if (toScale === "Ro") {
        return (temp - 32) * 7 / 24 + 7.5;
        }
    }
    if (fromScale === "K") {
        if (toScale === "C") {
        return temp - 273.15;
        }
        if (toScale === "F") {
        return temp * 9 / 5 - 459.67;
        }
        if (toScale === "R") {
        return temp * 9 / 5;
        }
        if (toScale === "De") {
        return (373.15 - temp) * 2 / 3;
        }
        if (toScale === "N") {
        return temp * 33 / 100;
        }
        if (toScale === "Re") {
        return (temp - 273.15) * 4 / 5;
        }
        if (toScale === "Ro") {
        return (temp - 273.15) * 21 / 40 + 7.5;
        }

    }
    if (fromScale === "R") {
        if (toScale === "C") {
        return (temp - 491.67) * 5 / 9;
        }
        if (toScale === "F") {
        return temp - 459.67;
        }
        if (toScale === "K") {
        return temp * 5 / 9;
        }
        if (toScale === "De") {
        return (671.67 - temp) * 5 / 6;
        }
        if (toScale === "N") {
        return (temp - 491.67) * 11 / 60;
        }
        if (toScale === "Re") {
        return (temp - 491.67) * 4 / 9;
        }
        if (toScale === "Ro") {
        return (temp - 491.67) * 7 / 24 + 7.5;
        }

    }

    if (fromScale === "De") {
        if (toScale === "C") {
        return 100 - temp * 2 / 3;
        }
        if (toScale === "F") {
        return 212 - temp * 6 / 5;
        }
        if (toScale === "K") {
        return 373.15 - temp * 3 / 2;
        }
        if (toScale === "R") {
        return 671.67 - temp * 6 / 5;
        }
        if (toScale === "N") {
        return 33 - temp * 11 / 50;
        }
        if (toScale === "Re") {
        return temp * 4 / 5;
        }
        if (toScale === "Ro") {
        return 60 - temp * 7 / 20;
        }

    }

    if (fromScale === "N") {
        if (toScale === "C") {
        return temp * 100 / 33;
        }
        if (toScale === "F") {
        return temp * 60 / 11 + 32;
        }
        if (toScale === "K") {
        return temp * 100 / 33 + 273.15;
        }
        if (toScale === "R") {
        return temp * 60 / 11 + 491.67;
        }
        if (toScale === "De") {
        return 33 - temp * 50 / 11;
        }
        if (toScale === "Re") {
        return temp * 80 / 33;
        }
        if (toScale === "Ro") {
        return temp * 35 / 22 + 7.5;
        }

    }

    if (fromScale === "Re") {
        if (toScale === "C") {
        return temp * 5 / 4;
        }
        if (toScale === "F") {
        return temp * 9 / 4 + 32;
        }
        if (toScale === "K") {
        return temp * 5 / 4 + 273.15;
        }
        if (toScale === "R") {
        return temp * 9 / 4 + 491.67;
        }
        if (toScale === "De") {
        return temp * 5 / 4;
        }
        if (toScale === "N") {
        return temp * 33 / 80;
        }
        if (toScale === "Ro") {
        return temp * 21 / 32 + 7.5;
        }

    }

    if (fromScale === "Ro") {
        if (toScale === "C") {
        return (temp - 7.5) * 40 / 21;
        }
        if (toScale === "F") {
        return (temp - 7.5) * 24 / 7 + 32;
        }
        if (toScale === "K") {
        return (temp - 7.5) * 40 / 21 + 273.15;
        }
        if (toScale === "R") {
        return (temp - 7.5) * 24 / 7 + 491.67;
        }
        if (toScale === "De") {
        return 60 - temp * 20 / 7;
        }
        if (toScale === "N") {
        return (temp - 7.5) * 22 / 35;
        }
        if (toScale === "Re") {
        return (temp - 7.5) * 32 / 21;
        }

    }

    

}

console.log(convertTemp(-30, "De", "K")); // 32