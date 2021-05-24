
		/* background color changinging */
		
		function clrChange(changeClr){
			document.getElementsByTagName("body")[0].style.backgroundColor=changeClr.value;
		}
		
		/* text color changing */
        function updateTextColour(value) {
            document.body.style.color = '#' + value;
        }
		
        
		
		// Get the modal
var modal = document.getElementById("myModalrugby");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImgrugby");
var modalImg = document.getElementById("imgrugby");
var captionText = document.getElementById("captionrugby");
img.onclick = function(){
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
