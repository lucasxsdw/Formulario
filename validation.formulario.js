function validateForm() {
    let isValid = true;
    const requiredFields = document.querySelectorAll("input[required], textarea[required]");

    requiredFields.forEach(field => {
        const errorSpan = field.nextElementSibling;
        if (field.value.trim() === "") {
            if (!errorSpan || !errorSpan.classList.contains('error-message')) {
                const span = document.createElement('span');
                span.className = 'error-message';
                span.style.color = 'red';
                span.innerText = 'Este campo é obrigatório';
                field.parentNode.insertBefore(span, field.nextSibling);
            }
            isValid = false;
        } else {
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.remove();
            }
        }
    });

    return isValid;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
}

window.onload = function() {
    const form = document.querySelector('form');
    const modal = document.getElementById('confirmation-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');

    form.addEventListener('submit', function(event) {
        clearErrors();
        if (!validateForm()) {
            event.preventDefault();
        } else {
            event.preventDefault(); 
            modal.style.display = 'block';
        }
    });

    confirmYes.addEventListener('click', function() {
        modal.style.display = 'none';
        form.submit();
    });

    confirmNo.addEventListener('click', function() {
        modal.style.display = 'none';
    });
};
