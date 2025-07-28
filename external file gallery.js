function upDate(previewPic) {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  var imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('img/budatin castle.jpg')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

window.onload = function() {
  var images = document.getElementsByClassName("preview");
  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
};