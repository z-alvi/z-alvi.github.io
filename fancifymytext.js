function alertBox(){
    alert("Hello World!");
}

function makeTextBigger(){
    document.getElementById("textbox").style.fontSize = "24pt";
}

function fancyText(){
    alert("fancified!");
    document.getElementById("textbox").style.fontFamily = "cursive";
    document.getElementById("textbox").style.fontWeight = "bold";
    document.getElementById("textbox").style.color = "blue";
    document.getElementById("textbox").style.textDecoration = "underline";
}

function boringText(){
    alert("un-fancified!");
    document.getElementById("textbox").style.fontFamily = "normal";
    document.getElementById("textbox").style.fontWeight = "normal";
    document.getElementById("textbox").style.color = "black";
    document.getElementById("textbox").style.textDecoration = "none";
}

function toUpper(){
    document.getElementById("textbox").style.textTransform = "uppercase";
    let str = document.getElementById("textbox").value
    var parts = str.split(".");  
    str = parts.join("_moo");      
    document.getElementById("textbox").value = str
}