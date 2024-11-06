function validateForm() {
    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const nameError = $('#name-error');
    const emailError = $('#email-error');
    let isValid = true;

    if (!name) {
        nameError.show();
        isValid = false;
    } else {
        nameError.hide();
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !emailPattern.test(email)) {
        emailError.show();
        isValid = false;
    } else {
        emailError.hide();
    }

    if (isValid) {
        alert('Thank you for subscribing!');
    }
}
