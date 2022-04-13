// document.querySelectorAll('h1')[0].innerHTML="john Doe";



function initializeSDK() {
    window.XmBindId.initialize({
        clientId: 'f634b341.e782e78f.tid_d166180a.bindid.io',
    }).then(res => {
        console.log('SDK Initialized');
    });
}


function invokeBindId() {
    window.XmBindId.authenticate({
        redirectUri: 'https://akshaysrb30.github.io/cv/',
        otherLoginOptions: {
            title: 'User name and password',
            url: 'https://akshaysrb30.github.io/cv/'
        },
    }).then(res => {
        onSuccess(res);
    }, err => {
        onFailure(err);
    })
}




