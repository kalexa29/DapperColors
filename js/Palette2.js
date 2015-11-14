// Color buckets based on hue
// HSL input Strings are formatted to conform to CSS: hsl(120, 100%, 50%);

// lower bound inclusive, upper bound exclusive
// red special 'id' : since it is at the “beginning” and “end”
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
    'redMagenta' : {
        'id' : 330,
        'low' : 315,
        'high' : 345
    }
};

var SLbucketOptions = ['dark', 'tan', 'medium', 'light', 'ivory'];

//eye color palette object
var eyeColorPalette = {
    'eyeColorid' : -1, //eyeColorID = 0 to 7
    option1 : [{
        'colorname' : 'unknown',
        'SLBucket' : 'unknown', //deep, jewel, muted, bright, pastel, cream
        'hue' : 'unknown'
    }]
};

//eye color palette object
var eyeColorPalette = {
    //eyeColorID = 0 to 7
    'Deep-Brown' : {
        'id' : 0, 
        // if eyes are deep-brown then hue options include:
        // -khaki greens, greens, olive green
        // -soft pinks
        // -rich blue hues
        // -gold
        // -purple
        // -camel brown
        'popcolor' : [
            {'colorname' : 'khaki green, greens, olive green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
            {'colorname' : 'green (green cyan muted)', 'SLBucket' : 'muted', 'hue' : 'greenCyan'},
            {'colorname' : 'soft pink (magenta muted)', 'SLBucket' : 'muted', 'hue' : 'magenta'},
            {'colorname' : 'soft pink (magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'magenta'},
            {'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : 'redMagenta'},
            {'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'redMagenta'},
            {'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : 'yellow'},
            {'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'},
            {'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'}
            //{'colorname' : 'camel brown', 'SLBucket' : 'XXX', 'hue' : '"XXX"'}
        ]
    },
    'Honey-Brown' : {
        'id' : 1,
        // if eyes are honey-brown then hue options include:
        // -khaki greens, green
        // -soft pinks
        // -rich blues
        // -gold
        // -honey brown
        // -purple
        'popcolor' : [
			{'colorname' : 'khaki green, greens, olive green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'soft pink (magenta muted)', 'SLBucket' : 'muted', 'hue' : 'magenta'},
			{'colorname' : 'soft pink (magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'magenta'},
			{'colorname' : 'soft pink (redmagenta muted)', 'SLBucket' : 'muted', 'hue' : 'redMagenta'},
			{'colorname' : 'soft pink (redmagenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'redMagenta'},
			{'colorname' : 'rich blue hues (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'},
			{'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : 'yellow'},
			//{'colorname' : 'honey brown', 'SLBucket' : 'XXX("XXX"));
			{'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'}
            ]
    },
    'Hazel' : {
		'id' : 2,
			// if eyes are hazel then hue options include:
			// -orange
			// -burgundy
			// -lavender, pale purple, purple
			// -pink
			// -moss green
        'popcolor' : [
			{'colorname' : 'orange (orange jewel)', 'SLBucket' : 'jewel', 'hue' : 'orange'},
			{'colorname' : 'burgundy (red deep)', 'SLBucket' : 'deep', 'hue' : 'red'},
			{'colorname' : 'lavender, pale purple (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'blueMagenta'},
			{'colorname' : 'purple (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'},
			{'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : 'redMagenta'},
			{'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'redMagenta'},
			{'colorname' : 'moss green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'}
            ]
    },
    'Green' : {
		'id' : 3,
			// if eyes are green then hue options include:
			// -plum, purple, lavender, violet
			// -deep greens, greens
			// -coral, peach
			// -pale yellows, golds
			// -blue-gray, blue
        'popcolor' : [
			{'colorname' : 'plum (blue magenta deep)', 'SLBucket' : 'deep', 'hue' : 'blueMagenta'},
			{'colorname' : 'purple, violet (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'},
			{'colorname' : 'lavender (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'blueMagenta'},
			{'colorname' : 'deep green (green deep)', 'SLBucket' : 'deep', 'hue' : 'green'},
			{'colorname' : 'green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'green (green jewel)', 'SLBucket' : 'jewel', 'hue' : 'green'},
			{'colorname' : 'green (yellow green jewel)', 'SLBucket' : 'jewel', 'hue' : 'yellowGreen'},
			{'colorname' : 'coral (red muted)', 'SLBucket' : 'muted', 'hue' : 'red'},
			{'colorname' : 'peach (orange pastel)', 'SLBucket' : 'pastel', 'hue' : 'orange'},
			{'colorname' : 'pale yellow (yellow pastel)', 'SLBucket' : 'pastel', 'hue' : 'yellow'},
			{'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : 'yellow'},
			{'colorname' : 'blue-grey (blue muted)', 'SLBucket' : 'muted', 'hue' : 'blue'},
			{'colorname' : 'bright blue (bright blue)', 'SLBucket' : 'bright', 'hue' : 'blue'},
			{'colorname' : 'jewel tone blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'}
        ]
    },
    'Deep-Blue' : {    
		'id' : 4,
			// if eyes are deep-blue then hue options include:
			// -all shades of pink
			// -deep blues
			// -lighter greens
			// -gold
			// -peach
        'popcolor' : [
			{'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : 'redMagenta'},
			{'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'redMagenta'},
			{'colorname' : 'deep blue (cyan blue deep)', 'SLBucket' : 'deep', 'hue' : 'cyanBlue'},			
			{'colorname' : 'deep blue (blue deep)', 'SLBucket' : 'deep', 'hue' : 'blue'},
			{'colorname' : 'deep blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'},
			{'colorname' : 'lighter green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'lighter green (yellow-green muted)', 'SLBucket' : 'muted', 'hue' : 'yellowGreen'},
			{'colorname' : 'lighter green (yellow-green pastel)', 'SLBucket' : 'pastel', 'hue' : 'yellowGreen'},
			{'colorname' : 'gold (yellow jewel)', 'SLBucket' : 'jewel', 'hue' : 'yellow'},
			{'colorname' : 'peach (orange pastel)', 'SLBucket' : 'pastel', 'hue' : 'orange'}
        ]
    },
    'Pale-Blue' : {
		'id' : 5,
			// if eyes are pale-blue then hue options include:
			// -all shades of pink
			// -deep blues
			// -Lighter greens
			// -lilac
        'popcolor' : [
			{'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : 'redMagenta'},
			{'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'redMagenta'},
			{'colorname' : 'deep blue (cyan blue deep)', 'SLBucket' : 'deep', 'hue' : 'cyanBlue'},			
			{'colorname' : 'deep blue (blue deep)', 'SLBucket' : 'deep', 'hue' : 'blue'},
			{'colorname' : 'deep blue (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'},
			{'colorname' : 'lighter green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'lighter green (yellow-green muted)', 'SLBucket' : 'muted', 'hue' : 'yellowGreen'},
			{'colorname' : 'lighter green (yellow-green pastel)', 'SLBucket' : 'pastel', 'hue' : 'yellowGreen'},
			{'colorname' : 'lilac (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'blueMagenta'}
        ]
    },
    'Grey' : {
		'id' : 6,
			// if eyes are grey then hue options include:
			// blues
			// greens
        'popcolor' : [
			{'colorname' : 'cyan blue deep', 'SLBucket' : 'deep', 'hue' : 'cyanBlue'},
			{'colorname' : 'cyan blue jewel', 'SLBucket' : 'jewel', 'hue' : 'cyanBlue'},
			{'colorname' : 'cyan blue muted', 'SLBucket' : 'muted', 'hue' : 'cyanBlue'},
			{'colorname' : 'cyan blue pastel', 'SLBucket' : 'pastel', 'hue' : 'cyanBlue'},
			
			{'colorname' : 'blue deep', 'SLBucket' : 'deep', 'hue' : 'blue'},
			{'colorname' : 'blue jewel', 'SLBucket' : 'jewel', 'hue' : 'blue'},
			{'colorname' : 'blue muted', 'SLBucket' : 'muted', 'hue' : 'blue'},
			{'colorname' : 'blue pastel', 'SLBucket' : 'pastel', 'hue' : 'blue'},
			
			{'colorname' : 'yellow green deep', 'SLBucket' : 'deep', 'hue' : 'yellowGreen'},
			{'colorname' : 'yellow green jewel', 'SLBucket' : 'jewel', 'hue' : 'yellowGreen'},
			{'colorname' : 'yellow green muted', 'SLBucket' : 'muted', 'hue' : 'yellowGreen'},
			{'colorname' : 'yellow green pastel', 'SLBucket' : 'pastel', 'hue' : 'yellowGreen'},
			
			{'colorname' : 'green deep', 'SLBucket' : 'deep', 'hue' : 'green'},
			{'colorname' : 'green jewel', 'SLBucket' : 'jewel', 'hue' : 'green'},
			{'colorname' : 'green muted', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'green pastel', 'SLBucket' : 'pastel', 'hue' : 'green'}
        ]
    },
    'Violet' : {
		'id' : 7,
			// if eyes are violet then hue options include:
			// -golden brown
			// -soft green
			// -pink
			// -vibrant marine, periwinkle blues
			// -orchid, lavender, plum, eggplant, purple
        'popcolor' : [
			//{'colorname' : 'golden brown ()', 'SLBucket' : 'XXX(XXX));
			{'colorname' : 'soft green (green muted)', 'SLBucket' : 'muted', 'hue' : 'green'},
			{'colorname' : 'soft green (green cyan muted)', 'SLBucket' : 'muted', 'hue' : 'greenCyan'},
			{'colorname' : 'pink (magenta bright)', 'SLBucket' : 'bright', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta bright)', 'SLBucket' : 'bright', 'hue' : 'redMagenta'},
			{'colorname' : 'pink (magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'magenta'},
			{'colorname' : 'pink (red magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'redMagenta'},
			{'colorname' : 'vibrant marine (blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'blue'},
			{'colorname' : 'periwinkle blue (cyan blue jewel)', 'SLBucket' : 'jewel', 'hue' : 'cyanBlue'},
			{'colorname' : 'periwinkle blue (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'},
			{'colorname' : 'periwinkle blue (cyan jewel deep)', 'SLBucket' : 'deep', 'hue', 'CYAN'},
			{'colorname' : '? (blue magenta deep)', 'SLBucket' : 'deep', 'hue' : 'blueMagenta'},
			{'colorname' : '? (blue magenta jewel)', 'SLBucket' : 'jewel', 'hue' : 'blueMagenta'},
			{'colorname' : '? (blue magenta muted)', 'SLBucket' : 'muted', 'hue' : 'blueMagenta'},
			{'colorname' : '? (blue magenta bright)', 'SLBucket' : 'bright', 'hue' : 'blueMagenta'},
			{'colorname' : '? (blue magenta pastel)', 'SLBucket' : 'pastel', 'hue' : 'blueMagenta'}
        ]
    }
};

function colorOption (colorname, SLBucket, hue) {
    this.colorname = colorname;
    this.SLBucket = SLBucket;
    this.hue = hue;
}