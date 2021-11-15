function validate(){

  let email = document.getElementById("email");
  let password = document.getElementById("password");


    let regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(regemail.test(email.value)){
        error.innerHTML = "Valid email";
        error.style.color = "green";
        if(regpwd.test(password.value)){
            error1.innerHTML = "Valid password Format";
            error1.style.color="green";
        }
        else{
            error1.innerHTML = "Invalid Password format";
            error1.style.color = "red";
            return false;
        }
    }
    else{
        error.innerHTML = "invalid!! Please enter a valid email";
        error.style.color = "red";
        return false;
    }
    
}
