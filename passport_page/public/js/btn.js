const registerButton =  document.getElementById('register-btn');
const loadingDiv = document.getElementById('loading');

registerButton.addEventListener('click', disableBtn);

function disableBtn() {
    registerButton.classList.add('hide');
    loadingDiv.classList.remove('hide');

    setTimeout(() => {
        registerButton.classList.remove('hide');
        loadingDiv.classList.add('hide');
    }, 2000)
}
