$(document).ready(function(){
    "use strict";
    console.log("testing");
    $( ".form-container" ).css( "border", "3px solid blue" );
    $(".error").css("border", "3px solid red");
    
    $(".skinOptions").css("border", "3px solid orange");
    var input = $( "form .skinOptions input:radio" ).wrap("<span></span>").parent().css({background: "orange"});
    
    $(".hairOptions").css("border", "3px solid green");
    var input = $( "form .hairOptions input:radio" ).wrap("<span></span>").parent().css({background: "green"});
    
    $(".eyeOptions").css("border", "3px solid yellow");
    var input = $( "form .eyeOptions input:radio" ).wrap("<span></span>").parent().css({background: "yellow"});
    
});