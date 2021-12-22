 
var a = localStorage.getItem('user') == "null" 
if(a && document.referrer !== "login.html") { 
    window.location = "head.html";
}