const openEyeIcon = document.querySelector(".open-eye");
const closeEyeIcon = document.querySelector(".close-eye");
const inputPassword = document.getElementById("password");

openEyeIcon.addEventListener('click', function(){   
    inputPassword.type = "text";
    openEyeIcon.style.display = "none";
    closeEyeIcon.style.display = "block";
})

closeEyeIcon.addEventListener('click', function(){   
    inputPassword.type = "password";
    openEyeIcon.style.display = "block";
    closeEyeIcon.style.display = "none";
})