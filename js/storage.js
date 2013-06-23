function defaultKbMap() {
    for(var action in actions) {
        function setDefault(action) {
            chrome.storage.sync.get(action, function(res) {
                if(res[action] == undefined) {
                    var tuple = {};
                    tuple[action] = actions[action];
                    chrome.storage.sync.set(tuple);
                }
            });
        }
        setDefault(action);
    }
}

function loadKbMap() {
    for(var action in actions) {
        function getMap(action) {
            chrome.storage.sync.get(action, function(res) {
                actions[action] = res[action];
            });
        }
        getMap(action);
    }
}

