document.onkeyup = function(evt) {
    var direction;
    if(evt.keyCode == 37)
        direction = 'left';
    else if(evt.keyCode == 39)
        direction = 'right';
    else
        return;
};
