
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
      error.innerText="Provide valid email";
      error.style.color="red"
      alert("Provide a valid email")
      }
     
     if(password.value=="")
      {
        error1.innerText="Type your password";
        error1.style.color="red";
        alert("Password invalid")
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
       error1.innerText="Password not valid";
     }
       
       if(regemail.test(email.value))
       {
          q= true;    
       }
     else
       { 
      error.innerText="Provide valid email id";        
      } 

      if(p==true && q==true)
      return true;
      else
      return false;
      alert("Provide a valid email")
  }      

}

