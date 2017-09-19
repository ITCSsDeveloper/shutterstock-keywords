chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "getText") {
            var tempTags = '';
            var x = document.getElementsByClassName("btn-search-pill");
            var i;
            for (i = 0; i < x.length; i++) {
                tempTags = tempTags + x[i].innerHTML + ', ';
            }
            tempTags = tempTags.substring(0, tempTags.length - 2);

            sendResponse({ data: tempTags, count: x.length, method: "getText" }); //same as innerText
        }
    }
);