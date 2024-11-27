document.addEventListener('DOMContentLoaded', function() {
    const userHeader = document.querySelector('.header__navbar-icon .icon-user');
    const iconLogOut = document.querySelector('.log--out');
    const storedUsername = localStorage.getItem('username');
    const checkLogOut = localStorage.getItem('checkLogOut');

    console.log(checkLogOut); // Kiểm tra xem giá trị checkLogOut có đúng là false khi người dùng logout không

    if (checkLogOut === 'true') {
        // Hiển thị tên người dùng và nút logout
        userHeader.innerHTML = `Hi, ${storedUsername}`;
        iconLogOut.classList.remove('hide');
    } else {
        // Hiển thị liên kết đăng nhập và đăng ký
        userHeader.innerHTML = `
            <a href="../Html/login.html" class="header__navbar-icon--user user-1">Đăng Nhập</a>
            <span class="header__navbar-icon--separator">/</span>
            <a href="../Html/signup.html" class="header__navbar-icon--user">Đăng Ký</a>
        `;
    }

    iconLogOut.addEventListener('click', () => {
        // Xóa tên người dùng và ẩn nút logout
        userHeader.innerHTML = '';
        iconLogOut.classList.add('hide');

        // Hiển thị liên kết đăng nhập và đăng ký
        userHeader.innerHTML = `
            <a href="../Html/login.html" class="header__navbar-icon--user user-1">Đăng Nhập</a>
            <span class="header__navbar-icon--separator">/</span>
            <a href="../Html/signup.html" class="header__navbar-icon--user">Đăng Ký</a>
        `;

        // Đánh dấu người dùng đã đăng xuất trong localStorage
        localStorage.setItem('checkLogOut', 'false');
    });
});
