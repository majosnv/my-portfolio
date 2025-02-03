if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){    
    setInterval(loop, 300);
}

var x = 0;
var titleText = [ 
    "|", "p", "pa", "pan", "pane", "panen", "panenk", "panenko",
    "panenko.", "panenko.s", "panenko.sk", "panenko.sk |",
    "panenko.sk ", "panenko.sk |", "panenko.sk ", "panenko.sk |",
    "panenko.sk", "panenko.s", "panenko.", "panenko", "panenk",
    "panen", "pane", "pan", "pa", "p"
];

function loop(){
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
} 