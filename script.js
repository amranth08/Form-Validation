document.addEventListener("DOMContentLoaded", function () {
    // Form elements
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    // Error message elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Event listeners
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        if (validateForm()) {
            alert("Registration Successful!"); // Show success popup
            form.reset(); // Clear the form after successful registration
        }
    });

    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    password.addEventListener("input", validatePassword);
    confirmPassword.addEventListener("input", validateConfirmPassword);

    // Validation functions
    function validateForm() {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        // If all validations pass, return true
        return isNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid;
    }

    function validateName() {
        if (fullName.value.length < 5) {
            nameError.textContent = "Name must be at least 5 characters.";
            return false;
        } else {
            nameError.textContent = "";
            return true;
        }
    }

    function validateEmail() {
        if (!email.value.includes("@")) {
            emailError.textContent = "Enter a valid email with '@'.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    function validatePhone() {
        if (phone.value === "1234567890" || phone.value.length !== 10) {
            phoneError.textContent = "Enter a valid 10-digit phone number.";
            return false;
        } else {
            phoneError.textContent = "";
            return true;
        }
    }

    function validatePassword() {
        const userName = fullName.value.toLowerCase();
        const userPassword = password.value.toLowerCase();
        if (
            userPassword === "password" ||
            userPassword === userName ||
            password.value.length < 8
        ) {
            passwordError.textContent =
                "Password must be at least 8 characters and not 'password' or your name.";
            return false;
        } else {
            passwordError.textContent = "";
            return true;
        }
    }

    function validateConfirmPassword() {
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            return false;
        } else {
            confirmPasswordError.textContent = "";
            return true;
        }
    }
});
