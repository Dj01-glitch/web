// Example function to add certificates dynamically
function addCertificate(src) {
    const container = document.querySelector('.certificates');
    const img = document.createElement('img');
    img.src = src;
    container.appendChild(img);
}

// Example usage - replace with actual paths to your certificate images
addCertificate('"C:\Users\durjo\Desktop\Riyanka Mar Certificates\CertificateOfCompletion_Mindstuck Mastering the Art of Changing Minds.pdf.pdf"');
addCertificate('C:\Users\durjo\Desktop\Riyanka Mar Certificates\CertificateOfCompletion_Managing Stress.pdf');
// Add more certificates as needed
