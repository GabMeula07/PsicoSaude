let count = 1;


if(document.getElementById("radio1").checked === true){
  setInterval(nextImage, 3500);
}

function nextImage() {
  count++;
  if (count > 4) count = 1;
  document.getElementById("radio" + count).checked = true;
}
