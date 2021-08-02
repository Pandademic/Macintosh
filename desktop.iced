var OpenApp;
function Note()->
    document.getElementById("NotepadApp").style.display = "inline-block";
    OpenApp = "NotepadApp";
function Close()->
    document.getElementById(OpenApp).style.display = "none";
function copy()->
    var copyText = document.getElementById("notepad");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 

    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}
