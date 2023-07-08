// document.getElementById("htmlCode").value="<div>\n\n</div>";
// document.getElementById("cssCode").value="<style>\n\n</style>";
// document.getElementById("jsCode").value="<script>\n\n</script>";



// Retrieve saved code from localStorage if available
document.getElementById("htmlCode").value = localStorage.getItem("savedHTMLCode") || "<div>\n\n</div>";
document.getElementById("cssCode").value = localStorage.getItem("savedCSSCode") || "<style>\n\n</style>";
document.getElementById("jsCode").value = localStorage.getItem("savedJSCode") || "<script>\n\n</script>";

// Function to save code to localStorage
function saveCodeToLocalStorage() {
  localStorage.setItem("savedHTMLCode", document.getElementById("htmlCode").value);
  localStorage.setItem("savedCSSCode", document.getElementById("cssCode").value);
  localStorage.setItem("savedJSCode", document.getElementById("jsCode").value);
}

// Add event listeners to code inputs
document.getElementById("htmlCode").addEventListener("input", saveCodeToLocalStorage);
document.getElementById("cssCode").addEventListener("input", saveCodeToLocalStorage);
document.getElementById("jsCode").addEventListener("input", saveCodeToLocalStorage);

// Rest of the code...


function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
// Retrieve saved code from localStorage if available
