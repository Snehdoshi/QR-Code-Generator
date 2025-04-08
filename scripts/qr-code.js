let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

qrText.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateQR();
  }
});


 function generateQR () {
 const userInput = qrText.value.trim();
  if (userInput === "") {
    alert("Please enter some text to generate QR code.");
    return;
  }
 
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(userInput)}&t=${Date.now()}`;

  qrImage.src = qrUrl;
  imgBox.classList.add('show-img');

  document.getElementById("resetbutton").style.display = "inline-block";
  document.getElementById("downloadbutton").style.display = "inline-block";
}


function resetPage () {
  location.reload();
}

function downloadQR() {
  const image = new Image();
  image.crossOrigin = "anonymous"; 

  image.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    canvas.toBlob(function (blob) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  image.src = qrImage.src;
}
