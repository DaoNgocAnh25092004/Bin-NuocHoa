const btnLogin = document.querySelector('.btn--login');
const txtUserName = document.getElementById('username');
const txtPassWord = document.getElementById('password');
const errUserName = document.querySelector('.err-username');
const errPassWord = document.querySelector('.err-password');
const confirmPassword = document.getElementById('confirm-password');
const errConfirmPassWord = document.querySelector('.err-confirm-password');
const txtPhone = document.getElementById('dienthoai');
const errPhone = document.querySelector('.err-dienthoai');
const txtEmail = document.getElementById('email');
        const errEmail = document.querySelector('.err-email');

txtUserName.addEventListener('blur', () => {
    if (txtUserName.value.trim() === '') {
        errUserName.innerHTML = 'Username không được bỏ trống!'
    } else if (!/^[A-Z][a-zA-Z]+( [A-Z][a-zA-Z]+)+$/.test(txtUserName.value)) {
        errUserName.innerHTML = 'Tối thiểu là 2 từ, ký tự đầu của mỗi từ là chữ hoa!'
    } else {
        errUserName.innerHTML = ''
    }
})
txtPassWord.addEventListener('blur', () => {
    if (txtPassWord.value.trim() === '') {
        errPassWord.innerHTML = 'Password không được bỏ trống!'
    } else if (!/^[a-zA-Z0-9]{5,10}$/.test(txtPassWord.value)) {
        errPassWord.innerHTML = ''
            .innerHTML = 'Ít nhất 5 từ và nhiều nhất 10 từ gồm kí tự hoặc có số'
    } else {
        errPassWord.innerHTML = ''
    }
})

confirmPassword.addEventListener('blur', () => {
    if (confirmPassword.value.trim() === '') {
        errConfirmPassWord.innerHTML = 'Confirm Password không được bỏ trống!'
    } else if (confirmPassword.value !== txtPassWord.value) {
        errConfirmPassWord.innerHTML = 'Chưa nhập đúng password'
    } else {
        errConfirmPassWord.innerHTML = ''
    }
})

txtPhone.addEventListener('blur', () => {
    if (txtPhone.value.trim() === '') {
        errPhone.innerHTML = 'Số điện thoại không được bỏ trống!'
    } else if (!/^(09|08|02)\d{8}$/.test(txtPhone.value)) {
        errPhone.innerHTML = 'Phải là số, bắt đầu bằng 09 hoặc 08 hoặc 02, chiều dài 10 số'
    } else {
        errPhone.innerHTML = ''
    }
})

txtEmail.addEventListener('blur', () => {
    if (txtEmail.value.trim() === '') {
        errEmail.innerHTML = 'Email không được bỏ trống!'
    } else if (!/\w+@iuh\.edu\.com/.test(txtEmail.value)) {
        errEmail.innerHTML = 'Email phải đúng định dạng studentname@iuh.edu.com'
    } else {
        errEmail.innerHTML = ''
    }
})

btnLogin.addEventListener('click', () => {
    let isValid = true; 

    // Validate username
    if (txtUserName.value.trim() === '') {
        errUserName.innerHTML = 'Username không được bỏ trống!';
        isValid = false;
    }

    // Validate password
    if (txtPassWord.value.trim() === '') {
        errPassWord.innerHTML = 'Password không được bỏ trống!';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword.value.trim() === '') {
        errConfirmPassWord.innerHTML = 'Confirm Password không được bỏ trống!';
        isValid = false;
    }

    // Validate phone
    if (txtPhone.value.trim() === '') {
        errPhone.innerHTML = 'Số điện thoại không được bỏ trống!';
        isValid = false;
    }

    // Validate email
    if (txtEmail.value.trim() === '') {
        errEmail.innerHTML = 'Email không được bỏ trống!';
        isValid = false;
    }

    // Save to local storage if form is valid
    if (isValid) {
        // Assuming all fields are valid, save to local storage
        localStorage.setItem('username', txtUserName.value.trim());
        localStorage.setItem('password', txtPassWord.value.trim());
        // Add other fields as needed
        alert('Đăng kí thành công!')
        window.location.href = 'login.html'

    }
});

