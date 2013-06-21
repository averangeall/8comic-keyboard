const LEFT = 37;
const RIGHT = 39;
const PAGE_UP = 33;
const PAGE_DOWN = 34;

function clickButton(buttonId) {
    document.getElementById(buttonId).click();
}

function removeTwoCh() {
    var oldUrl = window.location.toString();
    var newUrl = oldUrl.replace(/&ch=.+/, '');
    if(oldUrl != newUrl)
        window.location = newUrl;
}

document.onkeydown = function(evt) {
    if(evt.keyCode == LEFT)
        clickButton('prev');
    else if(evt.keyCode == RIGHT)
        clickButton('next');
    else if(evt.keyCode == PAGE_UP)
        clickButton('prevvol');
    else if(evt.keyCode == PAGE_DOWN)
        clickButton('nextvol');
    else
        return true;
    return false;
};

setInterval(function() {
    clickButton('zf');
}, 100);

setInterval(function() {
    removeTwoCh();
}, 1000);
