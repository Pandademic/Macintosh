var OpenApp;
function Note() {
    document.getElementById("NotepadApp").style.display = "inline-block";
    OpenApp = "NotepadApp";
}
function Close() {
    document.getElementById(OpenApp).style.display = "none";
}
function copy() {
    /* Get the text field */
    var copyText = document.getElementById("notepad");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    /* Copy the text inside the text field */
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
function clear() {
    console.log("AN ERROR FOR THE SAKE OF ERRORING");
    document.getElementById("notepad").value = " ";
}
