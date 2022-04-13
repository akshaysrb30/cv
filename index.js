// document.querySelectorAll('h1')[0].innerHTML="john Doe";



function initializeSDK() {
    window.XmBindId.initialize({
        clientId: 'f634b341.e782e78f.tid_d166180a.bindid.io',
    }).then(res => {
        alert('SDK Initialized');
    });
}

initializeSDK();




