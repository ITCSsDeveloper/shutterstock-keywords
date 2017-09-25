// Thank for tutorial :D
// Cr:  https://markb.co.uk/building-a-simple-google-chrome-extension.html

// When the popup HTML has loaded
window.addEventListener('load', function (evt) {
    var btnGetKeyWord = document.getElementById('btnGetKeyWord');
    var lblFeedback = document.getElementById('lblFeedback');
    var txtResult = document.getElementById('txtResult');
    var btnCopy = document.getElementById('btnCopy');
    var btnResize = document.getElementById('btnResize');

    // Get Keyword
    btnGetKeyWord.onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "getTag" }, function (response) {
                if (response == undefined || response.method !== "getTag" || response.data == '') {
                    lblFeedback.innerHTML = 'Not found tag.';
                    lblFeedback.className = "alert alert-danger";
                    return;
                }

                txtResult.innerHTML = response.data;
                lblFeedback.innerHTML = 'Found ' + response.count + ' tags.';
                lblFeedback.className = "alert alert-success";
            });
        });
    };
    // Function Copy
    btnCopy.onclick = function () {
        if (txtResult.innerHTML.indexOf('How to Use') !== -1) {
            lblFeedback.innerHTML = 'Active when keyword is detected.';
            lblFeedback.className = "alert alert-danger";
            return;
        }

        if (lblFeedback.innerHTML.indexOf('Copied') == -1 && lblFeedback.innerHTML.indexOf('Not found tag.') === -1) {
            lblFeedback.innerHTML = lblFeedback.innerHTML + ' Copied!!';
            lblFeedback.className = "alert alert-success";
        }

        txtResult.select();
        document.execCommand('copy');
    };
    // Resize Keyword Container 
    btnResize.onclick = function () {
        chrome.tabs.getSelected(null, function (tab) {
            chrome.tabs.sendRequest(tab.id, { method: "resizeKeywordContainer" }, function (response) {
                if (response == undefined || response.method !== "resizeKeywordContainer" || response.data == '') {
                    lblFeedback.innerHTML = 'Active on www.submit.shutterstock.com';
                    lblFeedback.className = "alert alert-danger";
                    return;
                }

                lblFeedback.innerHTML = 'Resized ' + response.length + '  Containers.';
                lblFeedback.className = "alert alert-success";
            });
        });
    };
    // a link to Github
    document.getElementById('aLinkGithub').onclick = function () {
        var newURL = "https://github.com/ITCSsDevloper/shutterstock-keywords";
        chrome.tabs.create({ url: newURL });
    };
});