console.log('loaded message listener');

chrome.runtime.onMessage.addListener(function(message) {
    console.log(message);
    chrome.tabs.query({
        url: [
            "https://www.google.com/imghp*",
            "https://www.google.com/search?site=imghp*",
            "http://image.baidu.com/*",
            "https://image.baidu.com/*",
        ]
    }, function(tabs){
        console.log(tabs);
        for (var i = 0; i < tabs.length; i++) {
            // chrome.tabs.sendMessage(tabs[i].id, message);
        }

        if (message == 'enable-input') {
            // open WP page
            chrome.tabs.create({url: 'https://staging.firewallcafe.com/library'});
        }
    });
});