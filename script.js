// function to verify that password and confirmation password match

function check_pass() {
    let password = document.getElementById('password');
    let confirm = document.getElementById('confirm-password');
    let confirmationButton = document.getElementById('form-validation');
    let prompt = document.getElementById('prompt');

    // if passwords match
    if (password.value == confirm.value && password.value !== '') {
        confirmationButton.disabled = false;
        password.className = '';
        confirm.className = '';
        prompt.className = '';

    }
    //if one of password fields is empty.
    else if (confirm.value == '' || password.value == '') {
        confirmationButton.disabled = true;
        password.className = '';
        confirm.className = '';
        prompt.className = '';

    }
    //if passwords don't match
    else {
        confirmationButton.disabled = true;
        console.log('nomatch')
        password.className = 'error';
        confirm.className = 'error';
        prompt.className = 'visible error-message';
        prompt.innerHTML = `Passwords need to match`;
    }
}
