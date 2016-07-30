chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "content_script.js"});
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab.url);
        var info = 'url='+request.url+'&title='+request.title+'&source='+request.source+'&date='+request.date+'&description='+request.description+'&keywords='+request.keywords+'&imageurl='+request.imageurl;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://bellalharbi.com/forbell/humph.php", true);
        xhr.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                console.log(xhr.responseText);
            }
        };
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(info);
        sendResponse({status: "received"});
    });
