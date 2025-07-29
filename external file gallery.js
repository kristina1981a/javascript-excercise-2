function upDate(previewPic) {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;

  // Set the width and height of the imageDiv to match the previewPic
  imageDiv.style.width = previewPic.naturalWidth + 'px'; // Use naturalWidth for original image width
  imageDiv.style.height = previewPic.naturalHeight + 'px'; // Use naturalHeight for original image height
}

function unDo() {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.style.width = '575px'; 
  imageDiv.style.height = '650px';
}

window.onload = function() {
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
};

