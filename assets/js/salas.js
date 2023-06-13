let count = 1;

function nextImage() {
  count++;
  if (count > 5) count = 1;

  
  document.getElementById("radio" + count).checked = true;
}
