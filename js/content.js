const LEFT = 37;
const RIGHT = 39;
const PAGE_UP = 33;
const PAGE_DOWN = 34;

function clickButton(buttonId) {
    document.getElementById(buttonId).click();
}

function removeTwoCh() {
    var oldUrl = window.location.toString();
    var newUrl = oldUrl.replace(/&ch=[1-9-]+/, '');
    if(oldUrl != newUrl) {
        window.location = newUrl;
    }
}

function slideToFit() {
    document.getElementById('TheImg').scrollIntoView();
}

function adjust() {
    clickButton('zf');
    removeTwoCh();
    slideToFit();
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

var img = document.getElementById('TheImg');
if(img.complete)
    adjust();
else
    img.onload = adjust;

