// JavaScript source code
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
        modal.style.display = "none";
  }
}


let instrumentType = document.getElementById("instrumentType");
let instrumentQuantity = document.getElementById("instrumentQuantity").value;


function fluteNumber() {
    alert(instrumentType);
    document.getElementById('flutes').innerHTML = instrumentType + ' ' + instrumentQuantity;
}

function trumpetNumber() {
    var input = document.getElementById("trumpet-button").value;
    document.getElementById('trumpet').innerHTML = 'Trumpets' + ' ' + input;
}


