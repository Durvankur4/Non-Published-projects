let inputField = document.querySelectorAll('.input-field')
let errorMessage = document.querySelectorAll('.error-message')
let errorSvg = document.querySelectorAll('.error-svg')
let signUpForm = document.querySelector('.sign-up-form')

errorMessage.forEach(error => {
    error.classList.add('hidden')
})
errorSvg.forEach(svg => {
    svg.classList.add('hidden')
})


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    inputField.forEach(input => {
        if (!inputField.values) {
            errorMessage.forEach(error => {
                error.classList.remove('hidden')
            })
            errorSvg.forEach(svg => {
                svg.classList.remove('hidden')
            })
        }

    })







})



