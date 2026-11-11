function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const grade = document.getElementById('grade').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('form-message');

    if (!name || !grade || !phone) {
        message.textContent = 'Заполни все поля';
        message.classList.add('error');
        return;
    }

    message.classList.remove('error');
    message.textContent = 'Спасибо, ' + name + '! Заявка принята, мы напишем в ВКонтакте.';
    document.getElementById('signup-form').reset();
}
