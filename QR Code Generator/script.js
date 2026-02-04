const imgBox = document.querySelector("#imgBox");
const qrImage = document.querySelector("#qrImage")


function genreateQR(){
    if(qrText.value.length > 0){
       const QR =  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
    imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error')
        },1000);
    }
    
}
function downloadQR(){
    const a = document.createElement("a");
    a.href = qrImage.src;
    a.download = "qrCode.png";
    a.click();
}   
function shareQR(){
    if (navigator.share) {
        navigator.share({   
            title: 'QR Code',
            text: 'Here is my QR Code',
            url: qrImage.src,   
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        alert('Share not supported on this browser, please copy the link: ' + qrImage.src);
    }
}   
    
