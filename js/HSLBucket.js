var flag = 'true';
function debug(words){
    if(flag === 'true'){
        console.log(words);
    }
}

function main() {
//    var hsl = "hsl(123, 456%, 789%)";
//    getHue(hsl);
//    getSaturation(hsl);
//    getLightness(hsl);
//    debug(generateOrange());
}

function getNumPopColorCirc(v){
    for (var popcolor in v){
        if(v.hasOwnProperty(popcolor)){
            return v.popcolor.length;
        }
    }
}

function setCircle(circclass, newcolor){
//    flag = 'false';
    var c = "." + circclass;
    debug(c);
    var n = "'" + newcolor + "'";
    debug(n);
    var background = $(c).css('background');
    debug(background);
    $(c).css({"background": newcolor});
    var background = $(c).css('background');
    debug(background);
}

function popColorPaletteTesting(){
    for(var i = 0; i < 8; i++){
        debug(popColorPalette(i));
    }
}

function popColorPalette(eyeColorID){
    flag = 'false';
    //possibly use the eyeColorPalette object from Palette2.js
    //eyeColorID = 0 to 7
    switch (eyeColorID) {
    case 0:
        var deepBrown = {
            'eyeColorName' : 'Deep-Brown',
            'id' : 0,
            // if eyes are deep-brown then hue options include:
            // -khaki greens, greens, olive green
            // -soft pinks
            // -rich blue hues
            // -gold
            // -purple
            // -camel brown
            'popcolor' : [
                {'colorname' : 'khaki green, greens, olive green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(),'hsl' : generateMuted(hue)},
                {'colorname' : 'green (green cyan muted)', 'SLBucket' : 'muted', 'hue' : generateGreenCyan(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (magenta muted)', 'SLBucket' : 'muted', 'hue' : generateMagenta(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : generateMagentaRed(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateMagentaRed(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)}
                //{'colorname' : 'camel brown', 'SLBucket' : 'XXX', 'hue' : '"XXX"'}
            ]
        };
        return deepBrown;
    case 1:
        var honeyBrown = {
            'eyeColorName' : 'Honey-Brown',
            'id' : 1,
            // if eyes are honey-brown then hue options include:
            // -khaki greens, green
            // -soft pinks
            // -rich blues
            // -gold
            // -honey brown
            // -purple
            'popcolor' : [
                {'colorname' : 'khaki green, greens, olive green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (magenta muted)', 'SLBucket' : 'muted', 'hue' : generateMagenta(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : generateMagentaRed(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateMagentaRed(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                //{'colorname' : 'honey brown', 'SLBucket' : 'XXX("XXX"));
                {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)}
            ]
        };
        return honeyBrown;
    case 2:
        var hazel = {
            'eyeColorName' : 'Hazel',
            'id' : 2,
            // if eyes are hazel then hue options include:
            // -orange
            // -burgundy
            // -lavender, pale purple, purple
            // -pink
            // -moss green
            'popcolor' : [
                {'colorname' : 'orange (orange jewel)', 'SLBucket' : 'jewel', 'hue' : generateOrange(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'burgundy (red deep)', 'SLBucket' : 'deep', 'hue' : generateRed(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'lavender, pale purple (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateBlueMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magneta red bright)', 'SLBucket' : 'bright', 'hue' : generateMagentaRed(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (magneta red jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagentaRed(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'moss green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)}
            ]
        };
        return hazel;
    case 3:
        var green = {
            'eyeColorName' : 'Green',
            'id' : 3,
                // if eyes are green then hue options include:
                // -plum, purple, lavender, violet
                // -deep greens, greens
                // -coral, peach
                // -pale yellows, golds
                // -blue-gray, blue
            'popcolor' : [
                {'colorname' : 'plum (blue magenta deep)', 'SLBucket' : 'deep', 'hue' : generateBlueMagenta(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'purple, violet (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'lavender (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateBlueMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'deep green (green deep)', 'SLBucket' : 'deep', 'hue' : generateGreen(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'green (green jewel)', 'SLBucket' : 'jewel', 'hue' : generateGreen(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'green (yellow green jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellowGreen(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'coral (red muted)', 'SLBucket' : 'muted', 'hue' : generateRed(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'peach (orange pastel)', 'SLBucket' : 'pastel', 'hue' : generateOrange(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'pale yellow (yellow pastel)', 'SLBucket' : 'pastel', 'hue' : generateYellow(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'blue-grey (blue muted)', 'SLBucket' : 'muted', 'hue' : generateBlue(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'bright blue (bright blue)', 'SLBucket' : 'bright', 'hue' : generateBlue(), 'hsl' : generateBright(hue)},
                {'colorname' : 'jewel tone blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)}
            ]
        };
        return green;
    case 4:
        var deepBlue = {
            'eyeColorName' : 'Deep-Blue',
            'id' : 4,
                // if eyes are deep-blue then hue options include:
                // -all shades of pink
                // -deep blues
                // -lighter greens
                // -gold
                // -peach
            'popcolor' : [
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magneta red bright)', 'SLBucket' : 'bright', 'hue' : generateMagentaRed(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (magneta red jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagentaRed(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'deep blue (cyan blue deep)', 'SLBucket' : 'deep', 'hue' : generateCyanBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'deep blue (blue deep)', 'SLBucket' : 'deep', 'hue' : generateBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'deep blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'lighter green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'lighter green (yellow-green muted)', 'SLBucket' : 'muted', 'hue' : generateYellowGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'lighter green (yellow-green pastel)', 'SLBucket' : 'pastel', 'hue' : generateYellowGreen(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'peach (orange pastel)', 'SLBucket' : 'pastel', 'hue' : 'orange', 'hsl' : generatePastel(hue)}
            ]
        };
        return deepBlue
    case 5:
        var paleBlue = {
            'eyeColorName' : 'Pale-Blue',
            'id' : 5,
                // if eyes are pale-blue then hue options include:
                // -all shades of pink
                // -deep blues
                // -Lighter greens
                // -lilac
            'popcolor' : [
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magneta red bright)', 'SLBucket' : 'bright', 'hue' : generateMagentaRed(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (magneta red jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagentaRed(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'deep blue (cyan blue deep)', 'SLBucket' : 'deep', 'hue' : generateCyanBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'deep blue (blue deep)', 'SLBucket' : 'deep', 'hue' : generateBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'deep blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'lighter green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'lighter green (yellow-green muted)', 'SLBucket' : 'muted', 'hue' : generateYellowGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'lighter green (yellow-green pastel)', 'SLBucket' : 'pastel', 'hue' : generateYellowGreen(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'lilac (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateBlueMagenta(), 'hsl' : generatePastel(hue)}
            ]
        };
        return paleBlue;
    case 6: 
        var grey = {
            'eyeColorName' : 'Grey',
            'id' : 6,
                // if eyes are grey then hue options include:
                // blues
                // greens
            'popcolor' : [
                {'colorname' : 'cyan blue deep', 'SLBucket' : 'deep', 'hue' : generateCyanBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'cyan blue jewel', 'SLBucket' : 'jewel', 'hue' : generateCyanBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'cyan blue muted', 'SLBucket' : 'muted', 'hue' : generateCyanBlue(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'cyan blue pastel', 'SLBucket' : 'pastel', 'hue' : generateCyanBlue(), 'hsl' : generatePastel(hue)},

                {'colorname' : 'blue deep', 'SLBucket' : 'deep', 'hue' : generateBlue(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'blue jewel', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'blue muted', 'SLBucket' : 'muted', 'hue' : generateBlue(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'blue pastel', 'SLBucket' : 'pastel', 'hue' : generateBlue(), 'hsl' : generatePastel(hue)},

                {'colorname' : 'yellow green deep', 'SLBucket' : 'deep', 'hue' : generateYellowGreen(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'yellow green jewel', 'SLBucket' : 'jewel', 'hue' : generateYellowGreen(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'yellow green muted', 'SLBucket' : 'muted', 'hue' : generateYellowGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'yellow green pastel', 'SLBucket' : 'pastel', 'hue' : generateYellowGreen(), 'hsl' : generatePastel(hue)},

                {'colorname' : 'green deep', 'SLBucket' : 'deep', 'hue' : generateGreen(), 'hsl' : generateDeep(hue)},
                {'colorname' : 'green jewel', 'SLBucket' : 'jewel', 'hue' : generateGreen(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'green muted', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'green pastel', 'SLBucket' : 'pastel', 'hue' : generateGreen(), 'hsl' : generatePastel(hue)}
            ]
        };
        return grey;
    case 7:
        var violet = {
            'eyeColorName' : 'Violet',
            'id' : 7,
                // if eyes are violet then hue options include:
                // -golden brown
                // -soft green
                // -pink
                // -vibrant marine, periwinkle blues
                // -orchid, lavender, plum, eggplant, purple
            'popcolor' : [
                //{'colorname' : 'golden brown ()', 'SLBucket' : 'XXX(XXX));
                {'colorname' : 'soft green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft green (green cyan muted)', 'SLBucket' : 'muted', 'hue' : generateGreenCyan(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magneta red bright)', 'SLBucket' : 'bright', 'hue' : generateMagentaRed(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (magneta red jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagentaRed(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'vibrant marine (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'periwinkle blue (cyan blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateCyanBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'periwinkle blue (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'periwinkle blue (cyan jewel deep)', 'SLBucket' : 'deep', 'hue': generateCyan(), 'hsl' : generateDeep(hue)},
                {'colorname' : '? (blue magenta deep)', 'SLBucket' : 'deep', 'hue' : generateBlueMagenta(), 'hsl' : generateDeep(hue)},
                {'colorname' : '? (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : '? (blue magenta muted)', 'SLBucket' : 'muted', 'hue' : generateBlueMagenta(), 'hsl' : generateMuted(hue)},
                {'colorname' : '? (blue magenta bright)', 'SLBucket' : 'bright', 'hue' : generateBlueMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : '? (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateBlueMagenta(), 'hsl' : generatePastel(hue)}
            ]
        };
        return violet;
    default:
        return 'Invalid eye color';
    }
}

function generateSkinTonePaletteTesting(skinToneID){
//    flag = 'false';
    // deep, jewel, bright, muted, pastel, cream
    var dpalette = generateDeepPalette();
    var jpalette = generateJewelPalette();
    var bpalette = generateBrightPalette();
    var mpalette = generateMutedPalette();
    var ppalette = generatePastelPalette();
    var cpalette = generateCreamPalette();
    
    debug("Deep: " + dpalette.toString());
    debug("Jewel: " + jpalette.toString());
    debug("Bright: " + bpalette.toString());
    debug("Muted: " + mpalette.toString());
    debug("Pastel: " + ppalette.toString());
    debug("Cream: " + cpalette.toString());
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// Global variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\

// ~~~~~~~~~~~~~~~~~ \\
// HBucket variables
// ~~~~~~~~~~~~~~~~~ \\
// lower bound inclusive, upper bound exclusive
// red special case since it is at the “beginning” and “end” of a circle
var Hrainbow = {
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
var SLbucketOptions = ['dark', 'tan', 'medium', 'light', 'ivory'];


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
// HBucket Functions
// Color buckets based on hue
// HSL input Strings are formatted to conform to CSS: hsl(120, 100%, 50%);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ \\
function HBucketTesting(){
    flag = 'false';
    var hsl = "hsl(123, 456%, 789%)";
    debug("getHueBucket: " + getHueBucket(hsl));
    debug("getHue: " + getHue(hsl));
    debug("valid hue: " + validHue(hsl));
    var sat = getSaturation(hsl);
    debug("get saturation: " + sat);
    var light = getLightness(hsl)
    debug("get lightness: " + light);
    debug("is saturation valid? (false): " + validSaturationLight(sat));
    debug("is lightness valid? (false): " + validSaturationLight(light));
    debug("is hsl white? (false): " + isWhite(hsl));
    debug("is hsl black? (false): " + isBlack(hsl));
}

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
        if ((hue >= Hrainbow.red.low1 && hue < Hrainbow.red.high1) || (hue >= redlow2 && hue < redhigh2)) {
            return bucketID = 360;
        }
        if (hue >= Hrainbow.orange.low && hue < Hrainbow.orange.high) {
            return bucketID = 30;
        }
        if (hue >= Hrainbow.yellow.low && hue < Hrainbow.yellow.high) {
            return bucketID = 60;
        }
        if (hue >= Hrainbow.yellowGreen.low && hue < Hrainbow.yellowGreen.high) {
            return bucketID = 90;
        }
        if (hue >= Hrainbow.green.low && hue < Hrainbow.green.high) {
            return bucketID = 120;
        }
        if (hue >= Hrainbow.greenCyan.low && hue < Hrainbow.greenCyan.high) {
            return bucketID = 150;
        }
        if (hue >= Hrainbow.cyan.low && hue < Hrainbow.cyan.high) {
            return bucketID = 180;
        }
        if (hue >= Hrainbow.cyanBlue.low && hue < Hrainbow.cyanBlue.high) {
            return bucketID = 210;
        }
        if (hue >= Hrainbow.blue.low && hue < Hrainbow.blue.high) {
            return bucketID = 240;
        }
        if (hue >= Hrainbow.blueMagenta.low && hue < Hrainbow.blueMagenta.high) {
            return bucketID = 270;
        }
        if (hue >= Hrainbow.magenta.low && hue < Hrainbow.magenta.high) {
            return bucketID = 300;
        }
        if (hue >= Hrainbow.magentaRed.low && hue < Hrainbow.magentaRed.high) {
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
    choice = randomIntFromInterval(0, 1);
    switch (choice) {
    case 0:
        hue = randomIntFromInterval(Hrainbow.red.low1, Hrainbow.red.high1);
        
    case 1:
        hue = randomIntFromInterval(Hrainbow.red.low2, Hrainbow.red.high2);
    }
    return hue;
}

function generateOrange() {
    return hue = randomIntFromInterval(Hrainbow.orange.low, Hrainbow.orange.high);
}

function generateYellow() {
    return hue = randomIntFromInterval(Hrainbow.yellow.low, Hrainbow.yellow.high);
}

function generateYellowGreen() {
    return hue = randomIntFromInterval(Hrainbow.yellowGreen.low, Hrainbow.yellowGreen.high);
}

function generateGreen() {
    return hue = randomIntFromInterval(Hrainbow.green.low, Hrainbow.green.high);
}

function generateGreenCyan() {
    return hue = randomIntFromInterval(Hrainbow.greenCyan.low, Hrainbow.greenCyan.high);
}

function generateCyan() {
    return hue = randomIntFromInterval(Hrainbow.cyan.low, Hrainbow.cyan.high);
}

function generateCyanBlue() {
    return hue = randomIntFromInterval(Hrainbow.cyanBlue.low, Hrainbow.cyanBlue.high);
}

function generateBlue() {
    return hue = randomIntFromInterval(Hrainbow.blue.low, Hrainbow.blue.high);
}

function generateBlueMagenta() {
    return hue = randomIntFromInterval(Hrainbow.blueMagenta.low, Hrainbow.blueMagenta.high);
}

function generateMagenta() {
    return hue = randomIntFromInterval(Hrainbow.magenta.low, Hrainbow.magenta.high);
}

function generateMagentaRed() {
    return hue = randomIntFromInterval(Hrainbow.magentaRed.low, Hrainbow.magentaRed.high);
}

// ~~~~~~~~~~~~~~~~ \\
// Helper functions
// ~~~~~~~~~~~~~~~~ \\

/**
 * Get the hue from a HSL value string
 * 
 * @param hsl
 * @return
 */
function getHue(hsl) {
    flag = 'false';
    var comma = hsl.indexOf(",");
    var hue = hsl.substring(4, comma);
    debug("Hue=" + hue); 
    return hue;
}

/**
 * Check that a hue is valid (Must be 0 to 360 inclusive)
 * 
 * @param hue
 * @return
 */
function validHue(hue) {
    flag = 'false';
    if (hue < 0 || hue > 360) {
        debug("Hue is invalid"); // test
        return false;
    }
    debug("Hue is valid"); // test
    return true;
}

/**
 * Get the saturation from a HSL value
 * 
 * @param hsl
 * @return
 */
function getSaturation(hsl) {
    flag = 'false';
    var comma1 = hsl.indexOf(",");
    var comma2 = hsl.lastIndexOf(",");
    var saturation = hsl.substring(comma1 + 2, comma2 - 1);
    debug("Saturation=" + saturation); // test
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
    flag = 'false';
    if (v < 0 || v > 100) {
        debug("Valid value"); // test
        return false;
    }
    debug("Invalid value"); // test
    return true;
}

/**
 * Get the lightness from a HSL value
 * 
 * @param hsl
 * @return
 */
function getLightness(hsl) {
    flag = 'false';
    var comma = hsl.lastIndexOf(",");
    var lightness = hsl.substring(comma + 2, hsl.length - 2);
    debug("Lightness=" + lightness); // test
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
    flag = 'false';
    if (getLightness(hsl) >= 86) {
        debug("Value is white"); // test
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
    flag = 'false';
    if (getLightness(hsl) <= 5) {
        debug("Value is black"); // test
        return true;
    }
    return false;
}

// ~~~~~~~~~~~~~~~~~~ \\
// SLBucket Functions
// ~~~~~~~~~~~~~~~~~~ \\

/**
 * Gets saturation/lightness bucket based on skin tone ID
 * 
 * @param skinToneID
 * @return saturation/lightness bucket name
 */
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
 * Sets palette circles to a specific saturation/lightness bucket based on skin tone name
 * 
 * @param skinToneID
 */
function setCirclePaletteBySkinTone(skinToneName){
//	dark, medium, tan, light, ivory
    debug('skinToneName='+skinToneName);
    skinToneName = skinToneName.toLowerCase();
    debug('skinToneName='+skinToneName);
    switch (skinToneName) {
        case 'dark': //dark
            debug('dark skin tone gets bright colors');
            setBrightPaletteCircles();
            break;
        case 'medium': //medium
            debug('medium skin tone gets deep colors');
            setDeepPaletteCircles();
            break;
        case 'tan': //tan
            debug('tan skin tone gets muted colors');
            setMutedPaletteCircles();
            break;
        case 'light': //light
            debug('light skin tone gets jewel colors');
            setJewelPaletteCircles();
            break;
        case 'ivory': //ivory
            debug('ivory skin tone gets pastel colors');
            setPastelPaletteCircles();
            break;
        default:
            return "Skin tone " + skinToneName + " is invalid";
    }
}

/**
 * Generates a single deep color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generateDeep(hue) {
    flag = 'false';
    // Deep colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // two. To choose random integers successfully between the two groups
    // the first step is to pick a random integer, 0 or 1, and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 1)// 0 or 1
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
        debug("Fail sauce"); 
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of deep colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generateDeepPalette(){
    flag = 'false';
    var vRed = generateDeep(generateRed()); //red
    var vOrange = generateDeep(generateOrange()); //orange
    var vYellow = generateDeep(generateYellow()); //yellow
    var vYellowGreen = generateDeep(generateYellowGreen()); //yellowGreen
    var vGreen = generateDeep(generateGreen()); //green
    var vGreenCyan = generateDeep(generateGreenCyan()); //greenCyan
    var vCyan = generateDeep(generateCyan()); //cyan
    var vCyanBlue = generateDeep(generateCyanBlue()); //cyanBlue
    var vBlue = generateDeep(generateBlue()); //blue
    var vBlueMagenta = generateDeep(generateBlueMagenta()); //blueMagenta
    var vMagenta = generateDeep(generateMagenta()); //magenta
    var vMagentaRed = generateDeep(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of deep colors
 */
function setDeepPaletteCircles(){
    setCircle('red', generateDeep(generateRed())); //red
    setCircle('orange', generateDeep(generateOrange())); //orange
    setCircle('yellow', generateDeep(generateYellow())); //yellow
    setCircle('yellowGreen', generateDeep(generateYellowGreen())); //yellowGreen
    setCircle('green', generateDeep(generateGreen())); //green
    setCircle('greenCyan', generateDeep(generateGreenCyan())); //greenCyan
    setCircle('cyan', generateDeep(generateCyan())); //cyan
    setCircle('cyanBlue', generateDeep(generateCyanBlue())); //cyanBlue
    setCircle('blue', generateDeep(generateBlue())); //blue
    setCircle('blueMagenta', generateDeep(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generateDeep(generateMagenta())); //magenta
    setCircle('magentaRed', generateDeep(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single jewel color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generateJewel(hue) {
    flag = 'false';
    // Jewel colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // two. To choose random integers successfully between the two groups
    // the first step is to pick a random integer, 0 or 1, and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 1); // 0 or 1
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
        debug("Fail sauce");
    }

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of jewel colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generateJewelPalette(){
    flag = 'false';
    var vRed = generateJewel(generateRed()); //red
    var vOrange = generateJewel(generateOrange()); //orange
    var vYellow = generateJewel(generateYellow()); //yellow
    var vYellowGreen = generateJewel(generateYellowGreen()); //yellowGreen
    var vGreen = generateJewel(generateGreen()); //green
    var vGreenCyan = generateJewel(generateGreenCyan()); //greenCyan
    var vCyan = generateJewel(generateCyan()); //cyan
    var vCyanBlue = generateJewel(generateCyanBlue()); //cyanBlue
    var vBlue = generateJewel(generateBlue()); //blue
    var vBlueMagenta = generateJewel(generateBlueMagenta()); //blueMagenta
    var vMagenta = generateJewel(generateMagenta()); //magenta
    var vMagentaRed = generateJewel(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of jewel colors
 */
function setJewelPaletteCircles(){
    setCircle('red', generateJewel(generateRed())); //red
    setCircle('orange', generateJewel(generateOrange())); //orange
    setCircle('yellow', generateJewel(generateYellow())); //yellow
    setCircle('yellowGreen', generateJewel(generateYellowGreen())); //yellowGreen
    setCircle('green', generateJewel(generateGreen())); //green
    setCircle('greenCyan', generateJewel(generateGreenCyan())); //greenCyan
    setCircle('cyan', generateJewel(generateCyan())); //cyan
    setCircle('cyanBlue', generateJewel(generateCyanBlue())); //cyanBlue
    setCircle('blue', generateJewel(generateBlue())); //blue
    setCircle('blueMagenta', generateJewel(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generateJewel(generateMagenta())); //magenta
    setCircle('magentaRed', generateJewel(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single bright color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generateBright(hue) {
    flag = 'false';
    // Bright colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // four. To choose random integers successfully between the four groups
    // the first step is to pick a random integer 0 to 3 and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 3); // 0 to 3
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

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of bright colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generateBrightPalette(){
    var vRed = generateBright(generateRed()); //red
    var vOrange = generateBright(generateOrange()); //orange
    var vYellow = generateBright(generateYellow()); //yellow
    var vYellowGreen = generateBright(generateYellowGreen()); //yellowGreen
    var vGreen = generateBright(generateGreen()); //green
    var vGreenCyan = generateBright(generateGreenCyan()); //greenCyan
    var vCyan = generateBright(generateCyan()); //cyan
    var vCyanBlue = generateBright(generateCyanBlue()); //cyanBlue
    var vBlue = generateBright(generateBlue()); //blue
    var vBlueMagenta = generateBright(generateBlueMagenta()); //blueMagenta
    var vMagenta = generateBright(generateMagenta()); //magenta
    var vMagentaRed = generateBright(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of Bright colors
 */
function setBrightPaletteCircles(){
    setCircle('red', generateBright(generateRed())); //red
    setCircle('orange', generateBright(generateOrange())); //orange
    setCircle('yellow', generateBright(generateYellow())); //yellow
    setCircle('yellowGreen', generateBright(generateYellowGreen())); //yellowGreen
    setCircle('green', generateBright(generateGreen())); //green
    setCircle('greenCyan', generateBright(generateGreenCyan())); //greenCyan
    setCircle('cyan', generateBright(generateCyan())); //cyan
    setCircle('cyanBlue', generateBright(generateCyanBlue())); //cyanBlue
    setCircle('blue', generateBright(generateBlue())); //blue
    setCircle('blueMagenta', generateBright(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generateBright(generateMagenta())); //magenta
    setCircle('magentaRed', generateBright(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single muted color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generateMuted(hue) {
    flag = 'false';
    // Muted colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // four. To choose random integers successfully between the four groups
    // the first step is to pick a random integer 0 to 3 and then pick
    // another random integer within the saturation/lightness table section
    choice = randomIntFromInterval(0, 3); // 0 to 3
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

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of muted colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generateMutedPalette(){
    flag = 'false';
    var vRed = generateMuted(generateRed()); //red
    var vOrange = generateMuted(generateOrange()); //orange
    var vYellow = generateMuted(generateYellow()); //yellow
    var vYellowGreen = generateMuted(generateYellowGreen()); //yellowGreen
    var vGreen = generateMuted(generateGreen()); //green
    var vGreenCyan = generateMuted(generateGreenCyan()); //greenCyan
    var vCyan = generateMuted(generateCyan()); //cyan
    var vCyanBlue = generateMuted(generateCyanBlue()); //cyanBlue
    var vBlue = generateMuted(generateBlue()); //blue
    var vBlueMagenta = generateMuted(generateBlueMagenta()); //blueMagenta
    var vMagenta = generateMuted(generateMagenta()); //magenta
    var vMagentaRed = generateMuted(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of Muted colors
 */
function setMutedPaletteCircles(){
    setCircle('red', generateMuted(generateRed())); //red
    setCircle('orange', generateMuted(generateOrange())); //orange
    setCircle('yellow', generateMuted(generateYellow())); //yellow
    setCircle('yellowGreen', generateMuted(generateYellowGreen())); //yellowGreen
    setCircle('green', generateMuted(generateGreen())); //green
    setCircle('greenCyan', generateMuted(generateGreenCyan())); //greenCyan
    setCircle('cyan', generateMuted(generateCyan())); //cyan
    setCircle('cyanBlue', generateMuted(generateCyanBlue())); //cyanBlue
    setCircle('blue', generateMuted(generateBlue())); //blue
    setCircle('blueMagenta', generateMuted(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generateMuted(generateMagenta())); //magenta
    setCircle('magentaRed', generateMuted(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single pastel color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
function generatePastel(hue) {
    flag = 'false';
    // Pastel colors do not appear on the saturation/lightness table in a
    // uniform column or row so the sections of the table were split in
    // three. To choose random integers successfully between the three
    // groups the first step is to pick a random integer 0 to 2 and then
    // pick another random integer within the saturation/lightness table
    // section
    choice = randomIntFromInterval(0, 2); // 0 to 2
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

    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of pastel colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generatePastelPalette(){
    var vRed = generatePastel(generateRed()); //red
    var vOrange = generatePastel(generateOrange()); //orange
    var vYellow = generatePastel(generateYellow()); //yellow
    var vYellowGreen = generatePastel(generateYellowGreen()); //yellowGreen
    var vGreen = generatePastel(generateGreen()); //green
    var vGreenCyan = generatePastel(generateGreenCyan()); //greenCyan
    var vCyan = generatePastel(generateCyan()); //cyan
    var vCyanBlue = generatePastel(generateCyanBlue()); //cyanBlue
    var vBlue = generatePastel(generateBlue()); //blue
    var vBlueMagenta = generatePastel(generateBlueMagenta()); //blueMagenta
    var vMagenta = generatePastel(generateMagenta()); //magenta
    var vMagentaRed = generatePastel(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of Pastel colors
 */
function setPastelPaletteCircles(){
    setCircle('red', generatePastel(generateRed())); //red
    setCircle('orange', generatePastel(generateOrange())); //orange
    setCircle('yellow', generatePastel(generateYellow())); //yellow
    setCircle('yellowGreen', generatePastel(generateYellowGreen())); //yellowGreen
    setCircle('green', generatePastel(generateGreen())); //green
    setCircle('greenCyan', generatePastel(generateGreenCyan())); //greenCyan
    setCircle('cyan', generatePastel(generateCyan())); //cyan
    setCircle('cyanBlue', generatePastel(generateCyanBlue())); //cyanBlue
    setCircle('blue', generatePastel(generateBlue())); //blue
    setCircle('blueMagenta', generatePastel(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generatePastel(generateMagenta())); //magenta
    setCircle('magentaRed', generatePastel(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single cream color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
// FIXME might need to be condensed into pastel?
function generateCream(hue) {
    flag = 'false';
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
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a rainbow of cream colors
 * 
 * @return Array of colors: red, orange, yellow, yellowGreen, green, greenCyan, cyan, cyanBlue, blue, blueMagenta, magenta, magentaRed
 */
function generateCreamPalette(){
    flag = 'false';
    var vRed = generateCream(generateRed()); //red
    var vOrange = generateCream(generateOrange()); //orange
    var vYellow = generateCream(generateYellow()); //yellow
    var vYellowGreen = generateCream(generateYellowGreen()); //yellowGreen
    var vGreen = generateCream(generateGreen()); //green
    var vGreenCyan = generateCream(generateGreenCyan()); //greenCyan
    var vCyan = generateCream(generateCyan()); //cyan
    var vCyanBlue = generateCream(generateCyanBlue()); //cyanBlue
    var vBlue = generateCream(generateBlue()); //blue
    var vBlueMagenta = generateCream(generateBlueMagenta()); //blueMagenta
    var vMagenta = generateCream(generateMagenta()); //magenta
    var vMagentaRed = generateCream(generateMagentaRed()); //magentaRed
    
    debug('Red=' + vRed + ' | Orange=' + vOrange + ' | Yellow=' + vYellow + ' | yellowGreen' + vYellowGreen 
                + ' | Green=' + vGreen + ' | GreenCyan=' + vGreenCyan + ' | Cyan=' + vCyan + ' | CyanBlue=' + vCyanBlue 
                + ' | Blue=' + vBlue + ' | BlueMagenta=' + vBlueMagenta + ' | Magenta=' + vMagenta 
                + ' | MagentaRed=' + vMagentaRed); 
    return [vRed, vOrange, vYellow, vYellowGreen, vGreen, vGreenCyan, vCyan, vCyanBlue, vBlue, vBlueMagenta, vMagenta, vMagentaRed];
}

/**
 * Sets each circle of the returned palette with a rainbow of Cream colors
 */
function setCreamPaletteCircles(){
    setCircle('red', generateCream(generateRed())); //red
    setCircle('orange', generateCream(generateOrange())); //orange
    setCircle('yellow', generateCream(generateYellow())); //yellow
    setCircle('yellowGreen', generateCream(generateYellowGreen())); //yellowGreen
    setCircle('green', generateCream(generateGreen())); //green
    setCircle('greenCyan', generateCream(generateGreenCyan())); //greenCyan
    setCircle('cyan', generateCream(generateCyan())); //cyan
    setCircle('cyanBlue', generateCream(generateCyanBlue())); //cyanBlue
    setCircle('blue', generateCream(generateBlue())); //blue
    setCircle('blueMagenta', generateCream(generateBlueMagenta())); //blueMagenta
    setCircle('magenta', generateCream(generateMagenta())); //magenta
    setCircle('magentaRed', generateCream(generateMagentaRed())); //magentaRed
}

/**
 * Generates a single dark grey color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
// FIXME unused?
function generateDarkGrey(hue) {
    flag = 'false';
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
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a single medium grey color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
// FIXME unused?
function generateMediumGrey(hue) {
    flag = 'false';
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
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Generates a single light grey color based on hue
 * 
 * @param hue
 * @return Formatted to conform to HSL value for CSS = hsl(120, 100%, 50%);
 */
// FIXME unused?
function generateLightGrey(hue) {
    flag = 'false';
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
    hsl = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
    debug(hsl); // test
    return hsl;
}

/**
 * Checks that lightness value is within the required restraints
 * 
 * @param lightness, lightMin, lightMax
 * @return
 */
// FIXME might be unnecessary
function isLightnessWithinConstraints(lightness, lightMin, lightMax) {
    flag = 'false';
    if (lightness > lightMin || lightness < lightMax) {
        return true;
    }
    debug("Lightness value is not within the required restraints"); 
    return false;
}

/**
 * Checks that saturation value is within the required restraints
 * 
 * @param saturation, satMin, satMax
 * @return
 */
// FIXME might be unnecessary
function isSaturationWithinConstraints(saturation, satMin, satMax) {
    flag = 'false';
    if (saturation > satMin || saturation < satMax) {
        return true;
    }
    debug("Lightness value is not within the required restraints"); 
    return false;
}