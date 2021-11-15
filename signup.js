function validate(){
   
   let email = document.getElementById("email");
   let number = document.getElementById("phone");
   let password = document.getElementById("password");



   let regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
   let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
   let regnumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   
   
   if(regemail.test(email.value)){
       error.innerHTML = "Valid email format";
       error.style.color = "green";
       
       
    var lengthy = password.value.length;
       if(regnumber.test(number.value)){
           error1.innerHTML="Valid Number format";
           error1.style.color="green";
         if(regpwd.test(password.value)){
           if(lengthy<8){
               error2.innerHTML = "Password strength: Poor";
               error2.style.color = "red";
               return true;
           }
           else if(lengthy<8){
               error2.innerHTML = "Password strength: Medium";
               error2.style.color = "orange";
               return true;
           }
           else{
               error2.innerHTML = "Password strength: Strong";
               error2.style.color = "green";
               return true;
           }
       }
       else{
           error2.innerHTML = "Invalid Password format";
           error2.style.color = "red";
           return false;
       }
   }
   else{
       error1.innerHTML="Invalid!! enter a valid number";
       error1.style.color="red";
       return false;
   }
   }
   else{
       error.innerHTML = "Invalid!! please enter a valid email";
       error.style.color = "red";
       return false;
   }
   
}