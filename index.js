const email = document.querySelector('.email')
const ctaBtn = document.querySelector('.cta')
const emailError = document.querySelector('.error-message')

ctaBtn.onclick = function () {
    if (email.value === "") {
        email.style.borderColor = "red"
      
        emailError.textContent = 'Your email is empty'
        emailError.style.color = "red"
        return false
    } else if (!(email.value.includes("@"))) {
        email.style.borderColor = "red"
        emailError.textContent = 'Provide a valid email address'
        emailError.style.color = "red"
        return false
    }
      // trying to work on valid email properties...learning on regrex expression 
    email.style.borderColor = "#ccc"
    emailError.textContent = email.value
    emailError.textContent ="You are good to go!!"
    emailError.style.color = "green"
    email.value = ""
}
