// Get the modal
var modal = document.getElementById("myModalrugby");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgrugby");
var modalImg = document.getElementById("imgrugby");
var captionText = document.getElementById("captionrugby");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closerugby")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//===========================================================

// Get the modal
var modal = document.getElementById("myModalCricket");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgCricket");
var modalImg = document.getElementById("imgCricket");
var captionText = document.getElementById("captionCricket");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeCricket")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//===========================================================

// Get the modal
var modal = document.getElementById("myModalf1");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgf1");
var modalImg = document.getElementById("imgf1");
var captionText = document.getElementById("captionf1");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closef1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

//===========================================================

// Get the modal
var modal = document.getElementById("myModalswimming");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgswimming");
var modalImg = document.getElementById("imgswimming");
var captionText = document.getElementById("captionswimming");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeswimming")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
        modal.style.display = "none";
    }
