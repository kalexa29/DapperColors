function eyeColorPaletteTesting(eyeColorID){
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
                {'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : generateRedMagenta(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateRedMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)}
                //{'colorname' : 'camel brown', 'SLBucket' : 'XXX', 'hue' : '"XXX"'}
            ]
        };
        return deepBrown;
    case 1:
        var honeyBrown = {
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
                {'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : generateRedMagenta(), 'hsl' : generateMuted(hue)},
                {'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : generateRedMagenta(), 'hsl' : generatePastel(hue)},
                {'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlue(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : generateYellow(), 'hsl' : generateJewel(hue)},
                //{'colorname' : 'honey brown', 'SLBucket' : 'XXX("XXX"));
                {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateBlueMagenta(), 'hsl' : generateJewel(hue)}
            ]
        };
            return honeyBrown;
    case 2:
        var hazel = {
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
                {'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : generateRedMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateRedMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'moss green (green muted)', 'SLBucket' : 'muted', 'hue' : generateGreen(), 'hsl' : generateMuted(hue)}
            ]
        };
            return hazel;
    case 3:
        var green = {
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
            'id' : 4,
                // if eyes are deep-blue then hue options include:
                // -all shades of pink
                // -deep blues
                // -lighter greens
                // -gold
                // -peach
            'popcolor' : [
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : generateRedMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateRedMagenta(), 'hsl' : generateJewel(hue)},
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
            return deepBlue;
    case 5:
        var paleBlue = {
            'id' : 5,
                // if eyes are pale-blue then hue options include:
                // -all shades of pink
                // -deep blues
                // -Lighter greens
                // -lilac
            'popcolor' : [
                {'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : generateMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : generateRedMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateRedMagenta(), 'hsl' : generateJewel(hue)},
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
                {'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : generateRedMagenta(), 'hsl' : generateBright(hue)},
                {'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateMagenta(), 'hsl' : generateJewel(hue)},
                {'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : generateRedMagenta(), 'hsl' : generateJewel(hue)},
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