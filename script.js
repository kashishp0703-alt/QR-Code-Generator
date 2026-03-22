const qrContainer = document.getElementById('qrcode');
const textInput = document.getElementById('text-input');
const downloadBtn = document.getElementById('download-btn');

let qrCode;

textInput.addEventListener('input', () => {
    const value = textInput.value.trim();

    // Clear previous QR code
    qrContainer.innerHTML = '';

    if (value === '') return;

    // Generate QR Code
    qrCode = new QRCode(qrContainer, {
        text: value,
        width: 220,
        height: 220,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

// Download QR code as PNG
downloadBtn.addEventListener('click', () => {
    if (!qrContainer.querySelector('img')) {
        alert('Please generate a QR code first!');
        return;
    }

    const img = qrContainer.querySelector('img');
    const a = document.createElement('a');
    a.href = img.src;
    a.download = 'QRCode.png';
    a.click();
});
