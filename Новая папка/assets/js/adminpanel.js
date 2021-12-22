
if(localStorage.getItem("user") !== 'admin@mail.ru') {
    alert("you are not admin")
    window.location = "index.html";
}


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
function isAdmin(email) {
    if(localStorage.getItem('user') == email.value) {
        return true
    } else {
        return false
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


function getValidEmail(email) {   
    var a = localStorage.getItem(email.value) == null
    if(!a) {
        alert("This account was registrated") 
        return false
    } 
    return true
}
 
function createUser(number) {
    if(number == 1) {
    var email = document.registration.email
    var password = document.registration.psw 
    if(isEmail(email) && isPassword(password) && getValidEmail(email)) {
         localStorage.setItem(email.value, password.value)
         alert("Successfull!")
         return true
        }   
    return false
    } else if(number == 2) {
        updateUser()
    } else if(number == 3){
        deleteUser()
    } else if(number == 4){
        disableUser()
    } else {
        enableUser()
    }
}
function updateUser() {
    var email = document.updateUser.email
    var password = document.updateUser.psw
    if(localStorage.getItem(email.value) != null) {
        localStorage[email.value] = password.value
        alert("Success!")
        return true
    } else {
        alert("Account not registered")
    }
    return false    
}
 


function deleteUser() {
    var email = document.deleteUser.email
    if(localStorage.getItem(email.value) != null) {
        localStorage.removeItem(email.value)
        alert("Success!")
    } else {
        alert("User not found")
    }
}

function disableUser() {
    var email = document.disableUser.email
    var a = "disabled:"
    if(localStorage.getItem(email.value) != null) {
        localStorage.setItem('user', null)
        alert("Success!")
    } else {
        alert("User not found")
    }
}


function enableUser() {
    var email = document.enableUser.email
    var a = "disabled:"
    if(localStorage.getItem(email.value) != null) {
        localStorage.setItem(a.concat(email.value), null)
        alert("Success!")
    } else {
        alert("User not found")
    }
}