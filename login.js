// function validate(){

//   let email = document.getElementById("email");
//   let password = document.getElementById("password");


//     let regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
//     let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//     if(regemail.test(email.value)){
//         error.innerHTML = "Valid email";
//         error.style.color = "green";
//     }
//     else{
//         error.innerHTML = "invalid!! Please enter a valid email";
//         error.style.color = "red";
//         return false;
//     }
    
// }

function validate()

{

    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let error=document.getElementById("error");
    let error1=document.getElementById("error1");
    if(email.value=="" || password.value=="")
    {   
      if(email.value=="")
      {
      error.innerText="Provide email";
      error.style.color="red"
      }
     
     if(password.value=="")
      {
        error1.innerText="type your password";
        error1.style.color="red";
      }
        return false;
    }
  
  else
  {

    
     let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
     let p;
     let regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
     let q;
    
      if(regpwd.test(password.value))
      { 
       p=true;          
     }
     else
     {
       error1.innerText="password not valid";
     }
       
       if(regemail.test(email.value))
       {
          q= true;    
       }
     else
       { 
      error.innerText="provide valid email id";        
      } 

      if(p==true && q==true)
      return true;
      else
      return false;
 }      

}

