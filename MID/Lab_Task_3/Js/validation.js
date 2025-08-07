function handlesubmit()
{
    var full_name = document.getElementById("full_name").value;
    var age = document.getElementById("age").value;
    var phonenumber= document.getElementById("phonenumber").value;
    var eaddress = document.getElementById("eaddress").value;
    var valid = true;

    document.querySelectorAll('.error').forEach(e => e.innerText = "");
    var valid = true;

    /*document.getElementById("fullNameError").innerText="";*/

  if (!full_name) 
  {
    document.getElementById("fullNameError").innerText = "Full Name is required!";
    valid = false;
  }

  if (!age) 
  {
    document.getElementById("ageError").innerText = "Age is required!";
    valid = false;
  }

  if (!phonenumber) 
  {
    document.getElementById("phError").innerText = "Phone Number is required!";
    valid = false;
  }

  if (!eaddress) 
  {
    document.getElementById("eaError").innerText = "Email Address is required!";
    valid = false;
  }

  return valid;
    
}