 
function isEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    } else {  
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
}
}

function isPassword(passid)
{
var passid_len = passid.value.length;
if (passid_len < 5)
{
alert("Your password must be most then 5");
passid.focus();
return false;
}
return true;
}


function comparePasswords(password, repeate) {
    var a = password.value.localeCompare(repeate.value) 
    if(a) {
        alert("Passwords not compare")
        return false;
    }
    return true;
}

function getValidEmail(email) {   
    var a = localStorage.getItem(email.value) == null
    if(!a) {
        alert("This account was registrated") 
        return false
    } 
    return true
}
function myFunction() { 
    var email = document.registration.email
    var password = document.registration.psw
    var repeate = document.registration.repeat
    if(isEmail(email) && isPassword(password) && comparePasswords(password, repeate) && getValidEmail(email)) {
         localStorage.setItem(email.value, password.value)
         alert("Successfull!")
         return true
        }   
    return false
}