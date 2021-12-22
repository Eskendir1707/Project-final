 



function validate() {
    var email = document.registration.email
    var password = document.registration.psw
    
    if(localStorage.getItem(email.value) == password.value && localStorage.getItem('user') != false) {
        alert("Success!")
        localStorage.setItem('user', email.value)
        return true
    } else {
        alert("Incorrect password or login or your account disabled")
        return false
    }
    
}