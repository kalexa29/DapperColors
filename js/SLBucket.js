function main(){
    for (var i = 180; i < 191; i++) {
        generateDeep(i);
        generateJewel(i);
        generateMuted(i);
        generateBright(i);
        generatePastel(i);
        generateCream(i);
        generateDarkGrey(i);
        generateMediumGrey(i);
        generateLightGrey(i);
    }
}

//Global variables
var satMin = 0;
var satMax = 0;
var lightMin = 0;
var lightMax = 0;
var saturation = 0;
var lightness = 0;
var hsl = "";
var choice = 0;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generateDeep(hue) {
    // Deep colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // two. To choose random integers successfully between the two groups
    // the first step is to pick a random integer, 0 or 1, and then pick
    // another random integer within the saturation/lightness table section

    choice = randomIntFromInterval(0, 1)// 0 or 1
    console.log("Deep choice=" + choice); // FIXME test
    
    switch (choice) {
    case 0:
        // saturation = random # 6 to 100 inclusive
        satMin = 6;
        satMax = 100;

        // lightness = random # 6 to 15 inclusive
        lightMin = 6;
        lightMax = 15;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    case 1:
        // saturation = random # 56 to 85 inclusive
        satMin = 6;
        satMax = 35;

        // lightness = random # 16 to 25 inclusive
        lightMin = 16;
        lightMax = 25;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    }

    // Error checking?
    if (lightness < lightMin || lightness > lightMax || saturation < satMin || saturation > satMax) {
        console.log("Fail sauce");
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateJewel(hue) {
    // Jewel colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // two. To choose random integers successfully between the two groups
    // the first step is to pick a random integer, 0 or 1, and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 1); // 0 or 1
    console.log("Jewel choice=" + choice); // FIXME test

    switch (choice) {

    case 0:
        // saturation = random # 36 to 100 inclusive
        satMin = 36;
        satMax = 100;

        // lightness = random # 16 to 25 inclusive
        lightMin = 16;
        lightMax = 25;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    case 1:
        // saturation = random # 26 to 65 inclusive
        satMin = 26;
        satMax = 65;

        // lightness = random # 26 to 35 inclusive
        lightMin = 26;
        lightMax = 35;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    }

    // Error checking?
    if (lightness < lightMin || lightness > lightMax || saturation < satMin || saturation > satMax) {
        console.log("Fail sauce");
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateMuted(hue) {
    // Muted colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // four. To choose random integers successfully between the four groups
    // the first step is to pick a random integer 0 to 3 and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 3); // 0 to 3
    console.log("Muted choice=" + choice); // FIXME test

    switch (choice) {
    case 0:
        // saturation = random # 6 to 25 inclusive
        satMin = 6;
        satMax = 25;

        // lightness = random # 26 to 35 inclusive
        lightMin = 26;
        lightMax = 35;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 1:
        // saturation = random # 6 to 45 inclusive
        satMin = 6;
        satMax = 45;

        // lightness = random # 36 to 55 inclusive
        lightMin = 36;
        lightMax = 55;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 2:
        // saturation = random # 6 to 35 inclusive
        satMin = 6;
        satMax = 35;

        // lightness = random # 56 to 65 inclusive
        lightMin = 56;
        lightMax = 65;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    case 3:
        // saturation = random # 16 to 35 inclusive
        satMin = 16;
        satMax = 35;

        // lightness = random # 66 to 75 inclusive
        lightMin = 66;
        lightMax = 75;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateBright(hue) {
    // Bright colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // four. To choose random integers successfully between the four groups
    // the first step is to pick a random integer 0 to 3 and then pick
    // another random integer within the saturation/lightness table section

    choice = randomIntFromInterval(0, 3); // 0 to 3
//		console.log("Bright choice=" + choice); // FIXME test

    switch (choice) {
    case 0:
        // saturation = random # 66 to 100 inclusive
        satMin = 66;
        satMax = 100;

        // lightness = random # 26 to 35 inclusive
        lightMin = 26;
        lightMax = 35;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 1:
        // saturation = random # 4 to 100 inclusive
        satMin = 4;
        satMax = 100;

        // lightness = random # 36 to 55 inclusive
        lightMin = 36;
        lightMax = 55;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 2:
        // saturation = random # 56 to 100 inclusive
        satMin = 56;
        satMax = 100;

        // lightness = random # 56 to 65 inclusive
        lightMin = 56;
        lightMax = 65;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    case 3:
        // saturation = random # 76 to 100 inclusive
        satMin = 76;
        satMax = 100;

        // lightness = random # 66 to 75 inclusive
        lightMin = 66;
        lightMax = 75;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generatePastel(hue) {
    // Pastel colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // three. To choose random integers successfully between the three
    // groups the first step is to pick a random integer 0 to 2 and then
    // pick another random integer within the saturation/lightness table
    // section

    choice = randomIntFromInterval(0, 2); // 0 to 2
//		console.log("Pastel choice=" + choice); // FIXME test

    switch (choice) {
    case 0:
        // saturation = random # 36 to 55 inclusive
        satMin = 36;
        satMax = 55;

        // lightness = random # 56 to 65 inclusive
        lightMin = 56;
        lightMax = 65;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 1:
        // saturation = random # 36 to 75 inclusive
        satMin = 16;
        satMax = 55;

        // lightness = random # 66 to 75 inclusive
        lightMin = 66;
        lightMax = 75;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }

    case 2:
        // saturation = random # 56 to 100 inclusive
        satMin = 56;
        satMax = 100;

        // lightness = random # 76 to 85 inclusive
        lightMin = 76;
        lightMax = 85;

        saturation = randomIntFromInterval(satMin, satMax);
        lightness = randomIntFromInterval(lightMin, lightMax);

        // Error checking?
        if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
                && isSaturationWithinConstraints(saturation, satMin, satMax)) {
            break;
        }
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

// FIXME might need to be condensed into pastel?
function generateCream(hue) {
    // saturation = random # 16 to 55 inclusive
    satMin = 16;
    satMax = 55;

    // lightness = random # 76 to 85 inclusive
    lightMin = 76;
    lightMax = 85;

    saturation = randomIntFromInterval(satMin, satMax);
    lightness = randomIntFromInterval(lightMin, lightMax);

    // Error checking?
    if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
            && isSaturationWithinConstraints(saturation, satMin, satMax)) {
    }
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateDarkGrey(hue) {
    // saturation = random # 0 to 5 inclusive
    satMin = 0;
    satMax = 5;

    // lightness = random # 6 to 35 inclusive
    lightMin = 6;
    lightMax = 35;

    saturation = randomIntFromInterval(satMin, satMax);
    lightness = randomIntFromInterval(lightMin, lightMax);

    // Error checking?
    if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
            && isSaturationWithinConstraints(saturation, satMin, satMax)) {
    }
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateMediumGrey(hue) {
    // saturation = random # 0 to 5 inclusive
    satMin = 0;
    satMax = 5;

    // lightness = random # 36 to 65 inclusive
    lightMin = 36;
    lightMax = 65;

    saturation = randomIntFromInterval(satMin, satMax);
    lightness = randomIntFromInterval(lightMin, lightMax);

    // Error checking?
    if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
            && isSaturationWithinConstraints(saturation, satMin, satMax)) {
    }
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function generateLightGrey(hue) {
    // saturation = random # 0 to 15 inclusive
    satMin = 0;
    satMax = 15;

    // lightness = random # 66 to 85 inclusive
    lightMin = 66;
    lightMax = 85;

    saturation = randomIntFromInterval(satMin, satMax);
    lightness = randomIntFromInterval(lightMin, lightMax);

    // Error checking?
    if (isLightnessWithinConstraints(lightness, lightMin, lightMax)
            && isSaturationWithinConstraints(saturation, satMin, satMax)) {
    }
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%);";
    console.log(hsl); // FIXME test
    return hsl;
}

function isLightnessWithinConstraints(lightness, lightMin, lightMax) {
    if (lightness > lightMin || lightness < lightMax) {
        return true;
    }
    console.log("Lightness value is not within the required restraints");
    return false;
}

function isSaturationWithinConstraints(saturation, satMin, satMax) {
    if (saturation > satMin || saturation < satMax) {
        return true;
    }
    console.log("Lightness value is not within the required restraints");
    return false;
}