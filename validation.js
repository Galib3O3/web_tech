
function validate() {
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const Cpassword = document.getElementById('Cpassword').value.trim();




  
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    const mobileRegex = /^01[3-9]\d{8}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^.{10,}$/;
    //for registration form
    if (!nameRegex.test(fname)) {
      document.querySelector('.em1').style.display = 'block';
    } else {
      document.querySelector('.em1').style.display = 'none';
    }
  
    if (!nameRegex.test(lname)) {
      document.querySelector('.em2').style.display = 'block';
    } else {
      document.querySelector('.em2').style.display = 'none';
    }
  
    if (!mobileRegex.test(mobile)) {
      document.querySelector('.em3').style.display = 'block';
    } else {
      document.querySelector('.em3').style.display = 'none';
    }
  
    if (!emailRegex.test(email)) {
      document.querySelector('.em4').style.display = 'block';
    } else {
      document.querySelector('.em4').style.display = 'none';
    }
  
    if (!passwordRegex.test(password)) {
      document.querySelector('.em6').style.display = 'block';
    } else {
      document.querySelector('.em6').style.display = 'none';
    }
  
    if (password !== Cpassword) {
      document.querySelector('.em7').style.display = 'block';
    } else {
      document.querySelector('.em7').style.display = 'none';
    }
  }




  function validates() {
    // get email and password input fields
    const email = document.getElementById("email");
    const password = document.getElementById("password");
  
    // regular expressions for email and password
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordRegex = /^.{12,}$/;
  
    // validate email field
    if (!emailRegex.test(email.value)) {
      email.classList.add("invalid");
      document.querySelector(".em4").style.display = "block";
    } else {
      email.classList.remove("invalid");
      document.querySelector(".em4").style.display = "none";
    }
  
    // validate password field
    if (!passwordRegex.test(password.value)) {
      password.classList.add("invalid");
      document.querySelector(".em6").style.display = "block";
    } else {
      password.classList.remove("invalid");
      document.querySelector(".em6").style.display = "none";
    }
  }
  



  
  