// Thank for tutorial :D
// Cr:  https://markb.co.uk/building-a-simple-google-chrome-extension.html

// When the popup HTML has loaded
window.addEventListener('load', function (evt) {
    var lblFeedback = document.getElementById('lblFeedback');
    var txtResult = document.getElementById('txtResult');
    var btnCopy = document.getElementById('btnCopy');
    var btnSave = document.getElementById('btnSave');
    var tableFav = document.getElementById('tableFav');

    // Get Keyword
    document.getElementById('btnGetKeyWord').onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "getTag" }, function (response) {

                if (response == undefined || response.method !== "getTag" || response.data == '') {
                    lblFeedback.innerHTML = 'Not found tag.';
                    lblFeedback.style.color = "red";
                    return;
                }

                txtResult.innerHTML = response.data;
                lblFeedback.innerHTML = 'Found ' + response.count + ' tags.';
                lblFeedback.style.color = "green";
            });
        });
    };

    // Function Copy
    btnCopy.onclick = function () {
        if (txtResult.innerHTML.indexOf('How to Use') !== -1) {
            lblFeedback.innerHTML = 'Not found tag.';
            lblFeedback.style.color = "red";
            return;
        }

        if (lblFeedback.innerHTML.indexOf('Copied') == -1 && lblFeedback.innerHTML.indexOf('Not found tag.') === -1) {
            lblFeedback.innerHTML += ' Copied!!';
            lblFeedback.style.color = "green";
        }

        txtResult.select();
        document.execCommand('copy');
    };

    // a link to Github
    document.getElementById('aLinkGithub').onclick = function () {
        var newURL = "https://github.com/ITCSsDevloper/shutterstock-keywords";
        chrome.tabs.create({ url: newURL });
    };
});