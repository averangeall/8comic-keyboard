var actions = {
    prev: [kbMap['left']],
    next: [kbMap['right']],
    prevvol: [kbMap['page-up']],
    nextvol: [kbMap['page-down']],
};

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

function fillKbMap() {
    for(var action in actions) {
        function setDefault(action) {
            chrome.storage.sync.get(action, function(res) {
                if(res[action] != undefined)
                    actions[action] = res[action];
                else {
                    var tuple = {};
                    tuple[action] = actions[action];
                    chrome.storage.sync.set(tuple);
                }
            });
        }
        setDefault(action);
    }
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

fillKbMap();

