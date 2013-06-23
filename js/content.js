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
    for(var action in actions) {
        if(actions[action].indexOf(evt.keyCode) != -1) {
            clickButton(action);
            return false;
        }
    }
    return true;
};

var img = document.getElementById('TheImg');
if(img.complete)
    adjust();
else
    img.onload = adjust;

defaultKbMap();
loadKbMap();

