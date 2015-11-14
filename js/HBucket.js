// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// Global variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

// ~~~~~~~~~~~~~~~~~ \\
// HBucket variables
// ~~~~~~~~~~~~~~~~~ \\
// lower bound inclusive, upper bound exclusive
// red special case since it is at the “beginning” and “end” of a circle
var HSLrainbow = {
    'red' : {
        'id' : 360,
        'low1' : 0,
        'high1' : 15,
        'low2' : 345,
        'high2' : 361
    },
    'orange' : {
        'id' : 30,
        'low' : 15,
        'high' : 45
    },
    'yellow' : {
        'id' : 60,
        'low' : 45,
        'high' : 75
    },
    'yellowGreen' : {
        'id' : 90,   
        'low' : 75,
        'high' : 105
    },
    'green' : {
        'id' : 120,
        'low' : 105,
        'high' : 135
    },
    'greenCyan' : {
        'id' : 150,
        'low' : 135,
        'high' : 165
    },
    'cyan' : {
        'id' : 180,
        'low' : 165,
        'high' : 195
    },
    'cyanBlue' : {
        'id' : 210,
        'low' : 195,
        'high' : 225
    },
    'blue' : {
        'id' : 240,
        'low' : 225,
        'high' : 255
    },
    'blueMagenta' : {
        'id' : 270,
        'low' : 255,
        'high' : 285
    },
    'magenta' : {
        'id' : 300,
        'low' : 285,
        'high' : 315
    },
    'magentaRed' : {
        'id' : 330,
        'low' : 315,
        'high' : 345
    }
};
var hue;

// ~~~~~~~~~~~~~~~~~~ \\
// SLBucket variables
// ~~~~~~~~~~~~~~~~~~ \\
//Color buckets based on saturation and lightness
var saturation = 0;
var lightness = 0;
var satMin = 0;
var satMax = 0;
var lightMin = 0;
var lightMax = 0;
var hsl = "";

function main() {
    var hsl = "hsl(123, 456%, 789%)";
    getHue(hsl);
    getSaturation(hsl);
    getLightness(hsl);
    console.log(generateOrange());
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// HBucket Functions
// Color buckets based on hue
// HSL input Strings are formatted to conform to CSS: hsl(120, 100%, 50%);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
/**
 * Gets color bucket from an HSL value
 * 
 * @param hsl
 * @return
 */
function getHueBucket(hsl) {
    return hueBucketRules(getHue(hsl));
}

/**
 * Dictates rules used to fill hue color buckets
 * 
 * @param hue
 * @return
 */
function hueBucketRules(hue) {
    var bucketID = -1;
    if (validHue(hue)) {
        if ((hue >= HSLrainbow.red.low1 && hue < HSLrainbow.red.high1) || (hue >= redlow2 && hue < redhigh2)) {
            return bucketID = 360;
        }
        if (hue >= HSLrainbow.orange.low && hue < HSLrainbow.orange.high) {
            return bucketID = 30;
        }
        if (hue >= HSLrainbow.yellow.low && hue < HSLrainbow.yellow.high) {
            return bucketID = 60;
        }
        if (hue >= HSLrainbow.yellowGreen.low && hue < HSLrainbow.yellowGreen.high) {
            return bucketID = 90;
        }
        if (hue >= HSLrainbow.green.low && hue < HSLrainbow.green.high) {
            return bucketID = 120;
        }
        if (hue >= HSLrainbow.greenCyan.low && hue < HSLrainbow.greenCyan.high) {
            return bucketID = 150;
        }
        if (hue >= HSLrainbow.cyan.low && hue < HSLrainbow.cyan.high) {
            return bucketID = 180;
        }
        if (hue >= HSLrainbow.cyanBlue.low && hue < HSLrainbow.cyanBlue.high) {
            return bucketID = 210;
        }
        if (hue >= HSLrainbow.blue.low && hue < HSLrainbow.blue.high) {
            return bucketID = 240;
        }
        if (hue >= HSLrainbow.blueMagenta.low && hue < HSLrainbow.blueMagenta.high) {
            return bucketID = 270;
        }
        if (hue >= HSLrainbow.magenta.low && hue < HSLrainbow.magenta.high) {
            return bucketID = 300;
        }
        if (hue >= HSLrainbow.magentaRed.low && hue < HSLrainbow.magentaRed.high) {
            return bucketID = 330;
        }
    } else {
        // do nothing
    }
    return bucketID;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// Functions to generate colors based on hue bucket parameters
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
function generateRed() {
    var choice = randy.nextInt(2);
    switch (choice) {
    case 0:
        hue = randomIntFromInterval(HSLrainbow.red.low1, HSLrainbow.red.high1);
        
    case 1:
        hue = randomIntFromInterval(HSLrainbow.red.low2, HSLrainbow.red.high2);
    }
    return hue;
}

function generateOrange() {
    return hue = randomIntFromInterval(HSLrainbow.orange.low, HSLrainbow.orange.high);
}

function generateYellow() {
    return hue = randomIntFromInterval(HSLrainbow.yellow.low, HSLrainbow.yellow.high);
}

function generateYellowGreen() {
    return hue = randomIntFromInterval(HSLrainbow.yellowGreen.low, HSLrainbow.yellowGreen.high);
}

function generateGreen() {
    return hue = randomIntFromInterval(HSLrainbow.green.low, HSLrainbow.green.high);
}

function generateGreenCyan() {
    return hue = randomIntFromInterval(HSLrainbow.greenCyan.low, HSLrainbow.greenCyan.high);
}

function generateCyan() {
    return hue = randomIntFromInterval(HSLrainbow.cyan.low, HSLrainbow.cyan.high);
}

function generateCyanBlue() {
    return hue = randomIntFromInterval(HSLrainbow.cyanBlue.low, HSLrainbow.cyanBlue.high);
}

function generateBlue() {
    return hue = randomIntFromInterval(HSLrainbow.blue.low, HSLrainbow.blue.high);
}

function generateBlueMagenta() {
    return hue = randomIntFromInterval(HSLrainbow.blueMagenta.low, HSLrainbow.blueMagenta.high);
}

function generateMagenta() {
    return hue = randomIntFromInterval(HSLrainbow.magenta.low, HSLrainbow.magenta.high);
}

function generateMagentaRed() {
    return hue = randomIntFromInterval(HSLrainbow.magentaRed.low, HSLrainbow.magentaRed.high);
}

// ~~~~~~~~~~~~~~~~ \\
// Helper functions
// ~~~~~~~~~~~~~~~~ \\

/**
 * Get the hue from a HSL value
 * 
 * @param hsl
 * @return
 */
function getHue(hsl) {
    var comma = hsl.indexOf(",");
    var hue = hsl.substring(4, comma);
    console.log("Hue=" + hue);
    return hue;
}

/**
 * Check that a hue is valid (Must be 0 to 360 inclusive)
 * 
 * @param hue
 * @return
 */
function validHue(hue) {
    if (hue < 0 || hue > 360) {
        console.log("Hue is invalid"); // FIXME test
        return false;
    }
    console.log("Hue is valid"); // FIXME test
    return true;
}

/**
 * Get the saturation from a HSL value
 * 
 * @param hsl
 * @return
 */
function getSaturation(hsl) {
    var comma1 = hsl.indexOf(",");
    var comma2 = hsl.lastIndexOf(",");
    var saturation = hsl.substring(comma1 + 2, comma2 - 1);
    console.log("Saturation=" + saturation); // FIXME test
    return saturation;
}

/**
 * Check that a saturation value or light value is valid (Must be 0 to 100
 * inclusive)
 * 
 * @param v
 * @return
 */
function validSaturationLight(v) {
    if (v < 0 || v > 100) {
        console.log("Valid value"); // FIXME test
        return false;
    }
    console.log("Invalid value"); // FIXME test
    return true;
}

/**
 * Get the lightness from a HSL value
 * 
 * @param hsl
 * @return
 */
function getLightness(hsl) {
    var comma = hsl.lastIndexOf(",");
    var lightness = hsl.substring(comma + 2, hsl.length - 2);
    console.log("Lightness=" + lightness); // FIXME test
    return lightness;
}

/**
 * Checks to see if a HSL value is white (Lightness is the determining
 * factor)
 * 
 * @param hsl
 * @return
 */
function isWhite(hsl) {
    if (getLightness(hsl) >= 86) {
        console.log("Value is white"); // FIXME test
        return true;
    }
    return false;
}

/**
 * Checks to see if a HSL value is black (Lightness is the determining
 * factor)
 * 
 * @param hsl
 * @return
 */
function isBlack(hsl) {
    if (getLightness(hsl) <= 5) {
        console.log("Value is black"); // FIXME test
        return true;
    }
    return false;
}

//SLBucket Functions

function getSLBucket(skinToneID){
//	dark, medium, tan, light, ivory
    switch (skinToneID) {
        case 0: //dark
            return "bright";
        case 1: //medium
            return "deep";
        case 2: //tan
            return "muted";
        case 3: //light
            return "jewel";
        case 4: //ivory
            return "pastel";
        default:
            return "Invalid skin tone ID " + skinToneID;
    }
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

function generateDeepPalette(){
    //delete!??!
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
