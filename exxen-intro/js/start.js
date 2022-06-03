function start() {
    document.getElementById("container").style.animation = "zoomIn 10s forwards cubic-bezier(0.77, 0, 0.175, 1.25)";
    setTimeout(showText, 10000);
}

function showText(){
    document.getElementById("greeting").style.display = "flex";
    document.getElementById("github").style.display = "flex";
    document.getElementById("goback").style.display = "flex";
}

