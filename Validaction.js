document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.sign-up form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform validation checks
        const firstName = document.getElementById('Fname').value.trim();
        const lastName = document.getElementById('Lname').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobail').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('Confirn password').value.trim();

        if (!firstName || !lastName || !email || !mobile || !password || !confirmPassword) {
            alert('All fields are required!');
            return;
        }

        // You can add more validation checks here
        document.querySelector('.img__btn').addEventListener('click', function () {
            document.querySelector('.cont').classList.toggle('s--signup');
        });

        // If all validation passes, submit the form
        this.submit();
    });
});
