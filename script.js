// Thank for tutorial :D
// Cr:  https://markb.co.uk/building-a-simple-google-chrome-extension.html

// When the popup HTML has loaded
window.addEventListener('load', function (evt) {
    // Get Keyword
    document.getElementById('btnGetKeyWord').onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "getText" }, function (response) {
                
                if (response === undefined) {
                    alert('Please Goto www.shutterstock.com');
                    return;
                }

                if (response.method !== "getText") {
                    alert('Not found method.');
                    return;
                }

                if (response.data == '');
                {
                    alert('Not found tag.');
                    return;
                }

                document.getElementById('txtResult').innerHTML = response.data;
            });
        });
    };

    // Copy 
    document.getElementById('btnCopy').onclick = function () {
        document.getElementById('txtResult').select();
        document.execCommand('copy');
        alert('Copied !!');
    };

    // a link to Github
    document.getElementById('aLinkGithub').onclick = function () {
        var newURL = "https://github.com/ITCSsDevloper/shutterstock-keywords";
        chrome.tabs.create({ url: newURL });
    };
});