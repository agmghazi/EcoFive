
function togglePassword(buttonId, inputId) {

    var togglePassword = document.querySelector(buttonId);
    var password = document.querySelector(inputId);


    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
 
}
