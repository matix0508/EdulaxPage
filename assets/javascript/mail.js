const btn = document.getElementById('mail_button');

window.onload = function() {
    document.getElementById('mail_button')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'default_service';
            const templateID = 'template_aozr8po';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.value = 'Send Email';
                    alert('Sent!');
                }, (err) => {
                    btn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
        });
}