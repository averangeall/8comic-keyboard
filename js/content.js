document.onkeyup = function(evt) {
    var link;
    if(evt.keyCode == 37)
        link = document.getElementById('prev');
    else if(evt.keyCode == 39)
        link = document.getElementById('next');
    else
        return;

    link.click();
};
