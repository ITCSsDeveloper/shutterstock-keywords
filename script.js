// Thank for tutorial :D
// Cr:  https://markb.co.uk/building-a-simple-google-chrome-extension.html

// When the popup HTML has loaded
window.addEventListener('load', function (evt) {


    // Get Keyword
    document.getElementById('btnGetKeyWord').onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "getText" }, function (response) {
                if (response.method == "getText") {
                    document.getElementById('txtResult').innerHTML = response.data;
                }
                else {
                    document.getElementById('txtResult').innerHTML = 'Not found tags.';
                }
            });
        });
    };

    // Copy 
    document.getElementById('btnCopy').onclick = function () { 
        document.getElementById('txtResult').select();
        document.execCommand('copy');
        alert('Copied !!');
    };
});


// Unuse code.
// function GetKeyWord() {
//     chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
//         function (tabs) {
//             var xx = tabs[0].url;
//             if (xx.indexOf("www.shutterstock.com") !== -1) {
//                 var tempTags = '';
//                 var x = document.getElementsByClassName("btn-search-pill");
//                 var i;
//                 for (i = 0; i < x.length; i++) {
//                     tempTags = tempTags + x[i].innerHTML + ', ';
//                 }
//                 alert(x.length);
//                 document.getElementById('txtResult').innerHTML = tempTags;
//             }
//             else {
//                document.getElementById('txtResult').innerHTML = 'Please Goto www.shutterstock.com';
//             }
//         }
//     );
// }

