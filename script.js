// Thank for tutorial :D
// Cr:  https://markb.co.uk/building-a-simple-google-chrome-extension.html

// When the popup HTML has loaded
window.addEventListener('load', function (evt) {
    // Get Keyword
    document.getElementById('btnGetKeyWord').onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "getText" }, function (response) {

                if (response == undefined || response.method !== "getText" || response.data == '') {
                    document.getElementById('lblFeedback').innerHTML = 'Not found tag.';
                    document.getElementById('lblFeedback').style.color = "red";
                    return;
                }

                document.getElementById('txtResult').innerHTML = response.data;
                document.getElementById('lblFeedback').innerHTML = 'Found '+ response.count +' tags.';
                document.getElementById('lblFeedback').style.color = "green";
            });
        });
    };

    // Copy 
    document.getElementById('btnCopy').onclick = function () {
        document.getElementById('txtResult').select();
        document.execCommand('copy');

        if (document.getElementById('lblFeedback').innerHTML.indexOf('Copied') == -1) {
            document.getElementById('lblFeedback').innerHTML += ' Copied!!';
            document.getElementById('lblFeedback').style.color = "green";
        }
    };

    // a link to Github
    document.getElementById('aLinkGithub').onclick = function () {
        var newURL = "https://github.com/ITCSsDevloper/shutterstock-keywords";
        chrome.tabs.create({ url: newURL });
    };
});
