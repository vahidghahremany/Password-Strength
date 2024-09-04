const con_1 = document.getElementById('length');
const con_2 = document.getElementById('length10');
const con_3 = document.getElementById('uppercase'); 
const con_4 = document.getElementById('number');
const con_5 = document.getElementById('special');


function checkPasswordStrength() {
    const password = document.getElementById("password").value;

    con_1.classList.remove('valid');
    con_2.classList.remove('valid');
    con_3.classList.remove('valid');
    con_4.classList.remove('valid');
    con_5.classList.remove('valid');

    if (password.length >= 6) {
        con_1.classList.add('valid');
    }

    if (password.length >= 10) {
        con_2.classList.add('valid');
    }

    if (/[A-Z]/.test(password)) {
        con_3.classList.add('valid');
    }

    if (/[0-9]/.test(password)) {
        con_4.classList.add('valid');
    }

    if (/[!@#$%^&*+-]/.test(password)) {
        con_5.classList.add('valid');
    }
}