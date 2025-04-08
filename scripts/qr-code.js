let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


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
}


function resetPage () {
  location.reload();
}