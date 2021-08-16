const email = document.querySelector('.email')
const ctaBtn = document.querySelector('.cta')
const emailError = document.querySelector('.error-message')

ctaBtn.onclick = function () {
    if (email.value === "") {
        email.style.borderColor = "red"
        emailError.textContent = 'Email is required'
        emailError.style.color = "red"
        return false
    } else if (!(email.value.includes("@"))) {
        email.style.borderColor = "red"
        emailError.textContent = 'Provide a valid email'
        emailError.style.color = "red"
        return false
    }
    email.style.borderColor = "#ccc"
    emailError.textContent = email.value
    emailError.textContent ="You are good to go!!"
    emailError.style.color = "green"
    email.value = ""
}
