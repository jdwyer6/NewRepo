// JavaScript source code
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}


function fluteNumber() {
    var input = document.getElementById("flute-button").value;
    document.getElementById('flutes').innerHTML = 'Flutes' + ' ' + input;
}

function trumpetNumber() {
    var input = document.getElementById("trumpet-button").value;
    document.getElementById('trumpet').innerHTML = 'Trumpets' + ' ' + input;
}