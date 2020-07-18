const formBtn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input");
const email = document.querySelectorAll(".input[type='email']");

function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField.value);
}

formBtn.addEventListener('click', function () {
    if(!validateEmail(email)) {
        error.classList.toggle('error');
    }
});

formBtn.addEventListener("click", function() {
    inputs.forEach((x) => {
        if(x.value === '') {
            x.classList.add('error');
        }
    });
});

inputs.forEach(y => y.addEventListener("keypress", function(){
    if(y.value !== '') {
        y.classList.remove('error');
    }
}));