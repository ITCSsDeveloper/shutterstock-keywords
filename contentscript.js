chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        if (request.method == "getTag") {
            var tempTags = '';
            var x = document.getElementsByClassName("btn-search-pill");
            var i;
            for (i = 0; i < x.length; i++) {
                tempTags = tempTags + x[i].innerHTML + ', ';
            }
            tempTags = tempTags.substring(0, tempTags.length - 2);

            sendResponse({ data: tempTags, count: x.length, method: "getTag" }); //same as innerText
        }
        else if (request.method == "getDesc") {
            var desc = document.getElementsByClassName("product-desc")[0].innerHTML;
            sendResponse({ data: desc, method: "getDesc" }); //same as innerText
        }
    }
);