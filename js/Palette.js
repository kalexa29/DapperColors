var flag = 'true';
function debug(words){
    if(flag === 'true'){
        console.log(words);
    }
}

//These functions update the images that are shown of a face based on the inputs from the form
function setHair(hcolor){
    //prep input for css class specification
    hcolor = hcolor.toLowerCase();
    debug("hcolor=" + hcolor); //test
    var imgclass = hcolor.concat("HairFiller");
    debug("imgclass=" + imgclass); //test
    $("img.hairLayer").addClass(imgclass);
    debug(document.getElementsByClassName("hairLayer")); //test
}

function setSkin(scolor){
    //prep input for css class specification
    scolor = scolor.toLowerCase();
    debug("scolor=" + scolor); //test
    var imgclass = scolor.concat("SkinFiller");
    debug("imgclass=" + imgclass); //test
    $("img.skinLayer").addClass(imgclass);
    debug(document.getElementsByClassName("skinLayer")); //test
}

function setEye(ecolor){
    //prep input for css class specification
    ecolor = ecolor.toLowerCase();
    debug("ecolor=" + ecolor); //test
    var imgclass = ecolor.concat("EyeFiller");
    debug("imgclass=" + imgclass); //test
    $("img.eyeLayer").addClass(imgclass);
    debug(document.getElementsByClassName("eyeLayer")); //test
}

//function setCircle(circclass, newcolor){
////    flag = 'false';
//    var c = "." + circclass;
//    debug(c);
//    var n = "'" + newcolor + "'";
//    debug(n);
//    var background = $(c).css('background');
//    debug(background);
//    $(c).css({"background": newcolor});
//    var background = $(c).css('background');
//    debug(background);
//}