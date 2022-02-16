// document.querySelectorAll('h1')[0].innerHTML="john Doe";

object.onload = function initializeSDK() {
    window.XmBindId.initialize({
        clientId: '9e96904e.3255a2cc.tid_5a1cbf13.bindid.io',
        apiCompat: window.XmBindId.XmBindIdApiCompatibilityLevel.UseLatest
    }).then(res => {
        alert('SDK Initialized');
    });
}

initializeSDK();


object.onload = function invokeBindId() {
    window.XmBindId.authenticate({
        redirectUri: 'https://akshaysrb30.github.io/cv/',
        scope: [window.XmBindId.XmBindIdScopeType.Phone, window.XmBindId.XmBindIdScopeType.Email],
        verifications: [window.XmBindId.XmRequiredVerifications.Phone, window.XmBindId.XmRequiredVerifications.Email],
    }).then(res => {
        onSuccess(res);
    }, err => {
        onFailure(err);
    })
}

authenticate();
