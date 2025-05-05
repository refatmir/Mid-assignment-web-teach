    /* first 4 line copy from chat gpt */
   document.addEventListener("DOMContentLoaded", function () {
       const form = document.querySelector("form");
        const loginButton = document.querySelector('input[type="button"]');

    loginButton.addEventListener("click", function (e) {
        e.preventDefault();

        const name = document.querySelector('input[type="text"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const id = document.querySelector('input[type="password"]').value.trim();
        const department = document.getElementById("department").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const joiningDate = document.querySelector('input[type="date"]').value;
        const jobTypes = document.querySelectorAll('input[name="type"]:checked');

        /* Validation start */
        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }
         /* its copy from online */
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (id === "") {
            alert("Please enter your ID.");
            return;
        }

        if (department === "") {
            alert("Please select a department.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (joiningDate === "") {
            alert("Please select your joining date.");
            return;
        }

        if (jobTypes.length === 0) {
            alert("Please select at least one employee type.");
            return;
        }

        // If all is valid
        alert("Form submitted successfully!");
        form.submit();
    });
});
