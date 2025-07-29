function upDate(previewPic) {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.width = previewPic.naturalWidth + 'px'; 
  imageDiv.style.height = previewPic.naturalHeight + 'px';
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

