// document.querySelectorAll('h1')[0].innerHTML="john Doe";

document.getElementById("test").onload = function initializeSDK() {
    window.XmBindId.initialize({
        clientId: '9e96904e.3255a2cc.tid_5a1cbf13.bindid.io',
        apiCompat: window.XmBindId.XmBindIdApiCompatibilityLevel.UseLatest
    }).then(res => {
        alert('SDK Initialized');
    });
}

initializeSDK();



