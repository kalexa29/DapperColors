$(document).ready(function(){
    "use strict";
    var validate = function validate(){
        if(isEmailFilled() && isSkinChecked() && isHairChecked() && isEyeChecked()){
            $("input[type=submit]").prop("disabled", false);
        } else {
            $("input[type=submit]").prop("disabled", true);
        }
    };
    $(document).ready(function () {
        validate();
    $('#req').change(validate);
    });
}
);


var isEmailFilled = function isEmailFilled(){
    if(document.getElementsByName('email')){
        console.log("isEmailFilled? = true");
        return true;
    }else{
        console.log("isEmailFilled? = true");
        return false;
    }
}

var isSkinChecked = function isSkinChecked(){
    var sk = document.getElementsByClassName('skinOptions');
    for(var i=0; i < sk.length; i++){
        if(sk[i].type == 'radio' && sk[i].checked){
            console.log("isSkinChecked? = true");
            return true;
        }
    }
    console.log("isSkinChecked? = false");
    return false;
}

var isHairChecked = function isHairChecked(){
    var ha = document.getElementsByClassName('hairOptions');
    for(var i=0; i < ha.length; i++){
        if(ha[i].type == 'radio' && ha[i].checked){
            console.log("isHairChecked? = true");
            return true;
        }
    }
    console.log("isHairChecked? = false");
    return false;
}


var isEyeChecked = function isEyeChecked(){
    var ey = document.getElementsByClassName('eyeOptions');
    for(var i=0; i < ey.length; i++){
        if(ey[i].type == 'radio' && ey[i].checked){
            console.log("isEyeChecked? = true");
            return true;
        }
    }
    console.log("isEyeChecked? = false");
    return false;
}
