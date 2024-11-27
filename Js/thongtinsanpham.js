
// --------------- <!--đóng mở thanh menu trên mobile --> -------------------
// Lấy phần tử menu và nút menu
const menu = document.querySelector('.header__navbar-item--menu');
const menuButton = document.querySelector('.header__btn i');
const buttonClose = document.querySelector('.header__menu-close');
const overlay1 = document.querySelector('.nav__overlay1');
const overlay2 = document.querySelector('.nav__overlay2');
const headerUser = document.querySelector('.icon-user');
const iconUser = document.querySelector('.header__navbar-icon--link---user');
var screenWidth = window.innerWidth;
// Xử lý sự kiện click
function closeMenuHeader() {
    // Kiểm tra nếu menu hiện đang ẩn thì hiển thị và ngược lại
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        buttonClose.style.display = 'block';
        overlay1.style.display = 'block'
    } else {
        menu.style.display = 'none';
        buttonClose.style.display = 'none';
        overlay1.style.display = 'none'

    }

};
function closeUserHeader() {
    if (screenWidth <= 740) {
        if (headerUser.style.display === 'none' || headerUser.style.display === '') {
            headerUser.style.display = 'block';
            overlay2.style.display = 'block'
            menu.style.display = 'none';


        } else {
            headerUser.style.display = 'none';
            overlay2.style.display = 'none'
            menu.style.display = 'none';


        }
    }

}
menuButton.addEventListener('click', closeMenuHeader);
buttonClose.addEventListener('click', closeMenuHeader);
overlay1.addEventListener('click', closeMenuHeader);
overlay2.addEventListener('click', closeUserHeader);
iconUser.addEventListener('click', closeUserHeader);
// --------------- <!--đóng mở thanh menu trên mobile --> -------------------

// ----------------------Hiện menu footer --------------------
const onMenuFooters = document.querySelectorAll('.footer__header-on--menu');
const closeMenuFooters = document.querySelectorAll('.footer__header-close--menu');
const textFooters = document.querySelectorAll('.footer__header-menu--item');
const itemFooters = document.querySelectorAll('.footer__touch-click');
// biến để theo dõi sự kiện click itemFooters
let itemFootersClicked = new Array(itemFooters.length).fill(true);
function clickOnMenuFooter() {
    itemFooters.forEach((itemFooters, index) => {
        itemFooters.addEventListener('click', () => {
            if (itemFootersClicked[index]) {
                onMenuFooters[index].style.display = 'none';
                closeMenuFooters[index].style.display = 'block';
                textFooters[index].style.display = 'block';
                itemFootersClicked[index] = false;
            } else {
                onMenuFooters[index].style.display = 'block';
                closeMenuFooters[index].style.display = 'none';
                textFooters[index].style.display = 'none';
                itemFootersClicked[index] = true;
            }
        })
    })
}

clickOnMenuFooter();
// content__information-item--size---border
//---------------------------- size quần áo ---------------------------
const itemSize = document.querySelectorAll('.content__menu-size')
var valueSizeAddProduct = 'S';
function clickItemSize() {
    itemSize.forEach((item, index) => {
        item.addEventListener('click', () => {
            itemSize.forEach((item) => {
                item.classList.remove('content__information-item--size---border');
            })
            item.classList.add('content__information-item--size---border');
            valueSizeAddProduct = item.querySelector('p').textContent;
        });

    })
}
clickItemSize();

//---------------------- tăng số lượng -----------------------------
// Lấy ra các phần tử DOM cần sử dụng
const countElement = document.querySelector('.content__information-item--numbers');
const increaseButton = document.querySelector('.content__information-item--increase')
const minusButton = document.querySelector('.content__information-item--minus')

// Bắt đầu sự kiện click trên nút tăng
increaseButton.addEventListener("click", () => {
    countElement.value = parseInt(countElement.value) + 1;
});
minusButton.addEventListener('click', () => {
    if (countElement.value > 1)
        countElement.value = parseInt(countElement.value) - 1;
})
//---------------------------Hiện menu thông tin sản phẩm-------------------
const inforTitleItemMenu = document.querySelectorAll('.content__information-item--detail---header')
const inforFooterItemMenu = document.querySelectorAll('.content__information-item--detail---footer')
const inforMinusItem = document.querySelectorAll('.product-information__title--minus')
const inforPlusItem = document.querySelectorAll('.product-information__title--plus')

let itemInforClicked = new Array(inforTitleItemMenu.length).fill(true);
function clickInforItem() {
    inforTitleItemMenu.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (itemInforClicked) {
                inforFooterItemMenu[index].style.display = 'block';
                inforPlusItem[index].style.display = 'none'
                inforMinusItem[index].style.display = 'block'
                itemInforClicked = false;
            } else {
                inforFooterItemMenu[index].style.display = 'none';
                inforPlusItem[index].style.display = 'block'
                inforMinusItem[index].style.display = 'none'
                itemInforClicked = true;
            }
        })
    })
}
clickInforItem();
//-------------------------------sự kiện click boder của ảnh----------------------------
const itemImgBoder = document.querySelectorAll('.content__information-item--secondary__image---item')
const itemImgMain = document.querySelector('.content__information-item-main__photo img')
function itemImgBoderClick() {
    itemImgBoder.forEach((itemBig) => {
        itemBig.addEventListener('click', () => {
            itemImgBoder.forEach((item) => {
                item.classList.remove('content__information-item--secondary__image---boder');
            })
            itemBig.classList.add('content__information-item--secondary__image---boder');
            itemImgMain.src = itemBig.querySelector('img').src
        })
    })
}
itemImgBoderClick()
//tính giảm giá 

const productPriceDiscount = document.querySelector('.content__information-item--price---discount');
const productPriceReal = document.querySelector('.content__information-item--price---real');
const percentDiscountElement = document.querySelector('.content__information-item--price---percentdiscount');

const priceDiscount = parseInt(productPriceDiscount.textContent.replace('₫', '').replace(',', ''), 10);
const priceReal = parseInt(productPriceReal.textContent.replace('₫', '').replace(',', ''), 10);

let checkPriceDiscount ; 
let checkpriceReal;

if(priceDiscount < 99999) {
    checkPriceDiscount = priceDiscount * 1000
} else {
    checkPriceDiscount = priceDiscount;
}

if(priceReal < 99999) {
    checkpriceReal = priceReal * 1000
} else {
    checkpriceReal = priceReal;
}

console.log(checkpriceReal);
console.log(checkPriceDiscount);

const discountPercent = ((checkpriceReal - checkPriceDiscount) / checkpriceReal) * 100;

percentDiscountElement.textContent = `${discountPercent.toFixed(0)}%`;



const productImages = document.querySelectorAll('.content__information-item--secondary__image---item img');
const productImageMain = document.querySelector('.content__information-item-main__photo img');
const productName = document.querySelector('.content__information-item--title');


//------------------------------------Hiện giỏ hàng-------------------
const showCartInfo = document.querySelector('.showCart');
const iconHeaderCart = document.querySelector('.ti-shopping-cart-full');
const buttonMinusCart = document.querySelector('.showCart__info-footer--button button:first-child');
const appElement = document.querySelector('.app');
const screeenBlurred = document.querySelector('.cart-blurred__screen');
function clickShowCart() {
    iconHeaderCart.addEventListener('click', () => {
        if (showCartInfo.style.display === 'block') {
            showCartInfo.style.display = 'none';
            screeenBlurred.style.display = 'none'
        } else {
            showCartInfo.style.display = 'block';
            screeenBlurred.style.display = 'block'
        }
    });
    screeenBlurred.addEventListener('click', () => {
        showCartInfo.style.display = 'none';
        screeenBlurred.style.display = 'none';
    })
    // ẩn giỏ hàng khi tải lại trang
    window.addEventListener('load', () => {
        showCartInfo.style.display = 'none';
    })

}

clickShowCart();
// -------------------- chuyển trang khi click vào xem giỏ hàng------------------
const buttonNavigateToCart = document.querySelector('.showCart-footer button');
function clickbuttonNavigateToCart() {
    buttonNavigateToCart.addEventListener('click', () => {
        window.location.href = `giohang.html`;
    })

}
clickbuttonNavigateToCart();


//----------------------------lấy thông tin của sản phẩm thêm vào giỏ hàng-------------------------
const inforProductAddCart = document.querySelector('.content__information-item--buy---add');
const nameProductAddCart = document.querySelector('.content__information-item--title');
const priceProductAddCart = document.querySelector('.content__information-item--price---real');
const imageProductAddCart = document.querySelector('.content__information-item-main__photo img');
const quantityProductAddCart = document.querySelector('.content__information-item--numbers');

// Khai báo biến toàn cục để lưu trữ giỏ hàng
var gioHang = [];
function clickButtonAddCart() {
    clickItemSize();
    inforProductAddCart.addEventListener('click', () => {
        const productName = nameProductAddCart.textContent;
        const productSizeAdd = valueSizeAddProduct;
        const productIndex = gioHang.findIndex((product) => product.ten === productName && product.sizeSanPham === productSizeAdd);

        if (productIndex !== -1) {
            // Sản phẩm đã tồn tại trong giỏ hàng với cùng tên và size, cộng thêm số lượng vào số lượng hiện có
            gioHang[productIndex].soLuongSanPham += parseInt(quantityProductAddCart.value);
        } else {
            let infoProduct = {
                ten: productName,
                gia: priceProductAddCart.textContent,
                hinhAnh: imageProductAddCart.src,
                soLuongSanPham: parseInt(quantityProductAddCart.value),
                sizeSanPham: valueSizeAddProduct
            };
            gioHang.push(infoProduct);
        }

        // Hiển thị giỏ hàng
        showCartInfo.style.display = 'block';
        screeenBlurred.style.display = 'block';
        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('gioHang', JSON.stringify(gioHang));
        showMyCart();
        showCartProductNone();

        // update lại số lượng sản phẩm bên mobile
        updateProductCount();

    })

}

clickButtonAddCart();

function showMyCart() {
    var ttgh = "";
    var totalQuantity = 0;
    for (let i = 0; i < gioHang.length; i++) {
        ttgh += `
        <div class="showCart__info">
            <div class="showCart__info-img">
                <img src="${gioHang[i].hinhAnh}" alt="">
            </div>
            <div class="showCart__infomation">
                <div class="showCart__info-header">
                    <p>${gioHang[i].ten}</p>
                    <i class="ti-close ti-close__cart"></i>
                    
                </div>
                <div class="showCart__info-size">
                    <p>SIZE: ${gioHang[i].sizeSanPham}</p>
                    
                </div>
                <div class="showCart__info-footer">
                    <div class="showCart__info-footer--button">
                        <button class="decrease-quantity">-</button>
                        <input type="text" value="${gioHang[i].soLuongSanPham}" class="product-quantity">
                        <button class="increase-quantity">+</button>
                    </div>
                    <div class="showCart__info-footer--price">
                        <p>${gioHang[i].gia}</p>
                    </div>
                </div>
                
            </div>
        </div>
        `;
        totalQuantity += 1;
    }
    document.getElementById('mycart').innerHTML = ttgh;
    document.querySelector('.header__navbar-icon--link---quantity_cart').textContent = totalQuantity;

    const decreaseButtons = document.querySelectorAll('.decrease-quantity');
    const increaseButtons = document.querySelectorAll('.increase-quantity');
    const productQuantityInputs = document.querySelectorAll('.product-quantity');

    let totalPrice = 0;

    for (let i = 0; i < gioHang.length; i++) {
        const priceProductOfCart = parseFloat(gioHang[i].gia.replace('₫', '').replace(/,/g, ''), 10);

        console.log(priceProductOfCart);
        totalPrice += priceProductOfCart * parseInt(gioHang[i].soLuongSanPham);
        updateTotalPriceDisplay();
    }

    for (let i = 0; i < gioHang.length; i++) {
        const productPrice = parseFloat(gioHang[i].gia.replace('₫', '').replace(/,/g, ''), 10);
        const decreaseButton = decreaseButtons[i];
        const increaseButton = increaseButtons[i];

        decreaseButton.addEventListener('click', () => {
            if (gioHang[i].soLuongSanPham > 1) {
                totalPrice -= productPrice;
                updateTotalPriceDisplay();
            }
        });

        increaseButton.addEventListener('click', () => {
            totalPrice += productPrice;
            updateTotalPriceDisplay();
        });
    }

    function updateTotalPriceDisplay() {
        const formattedTotalPrice = totalPrice.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
            useGrouping: true
        });
        const formattedTotalPriceWithComma = formattedTotalPrice.replace(/\./g, ',').replace(/\s/g, '');
        document.querySelector('.showCart-footer--into__money p').textContent = formattedTotalPriceWithComma;
    }


    // Thêm trình xử lý sự kiện vào nút +/- để thay đổi số lượng
    for (let i = 0; i < gioHang.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            if (gioHang[i].soLuongSanPham > 1) {
                gioHang[i].soLuongSanPham--;
                productQuantityInputs[i].value = gioHang[i].soLuongSanPham;
                updateLocalStorage();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            gioHang[i].soLuongSanPham++;
            productQuantityInputs[i].value = gioHang[i].soLuongSanPham;
            updateLocalStorage();
        });
    }

    // Thêm sự kiện nghe để xóa sản phẩm
    const removeButtons = document.querySelectorAll('.ti-close__cart');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            gioHang.splice(index, 1); // Xóa sản phẩm khỏi mảng
            showMyCart(); // Cập nhật hiển thị giỏ hàng
            updateLocalStorage();
            showCartProductNone();
            // update lại số lượng sản phẩm bên mobile
            updateProductCount();
        });

    });

    if (gioHang.length === 0) {
        updateTotalPriceDisplay();
    }

}

function updateLocalStorage() {
    localStorage.setItem('gioHang', JSON.stringify(gioHang));
}

showMyCart();


// khởi tạo giỏ hàng khi tải lại trang
var storedCart = localStorage.getItem('gioHang');
if (storedCart) {
    gioHang = JSON.parse(storedCart);
    showMyCart();
}


//---------------------- khi không có sản phẩm nào  ----------------------------
const cartProductNone = document.querySelector('.showCart-none');
function showCartProductNone() {
    if (gioHang.length === 0) {
        cartProductNone.style.display = 'block';


    } else if (gioHang.length > 0) {
        cartProductNone.style.display = 'none';
    }
}
showCartProductNone();

// -------------------------- magrintop show cart -----------------------------

if (window.location.href.includes('sp-nuochoa')) {
    showCartInfo.style.marginTop = '-45px'
}
//------------------------- ẩn thanh toán khi click cart ----------------------
const showMenuButtonAddProduct = document.querySelector('.content__information-item--buy__show');
const iconItemMenu = document.querySelector('.header__btn i');
const overlayItemMenu = document.querySelector('.nav__overlay1');
const overlayItemMenuIconUser = document.querySelector('.nav__overlay2');
const iconCloseMenu = document.querySelector('.header__menu-close i');
const iconUserHeader = document.querySelector('.header__navbar-icon--link---user i')
if (window.innerWidth <= 740) {
    iconHeaderCart.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    screeenBlurred.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    // ẩn khi bật menu item
    iconItemMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    overlayItemMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    iconCloseMenu.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
    // icon user 
    iconUserHeader.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'none';
    })
    overlayItemMenuIconUser.addEventListener('click', () => {
        showMenuButtonAddProduct.style.display = 'block';
    })
}
// --------------------------------Số lượng sản phẩm ---------------------------

const quantityProductCartFullPage = document.querySelector('.showCart-header h2 span');
// Hàm để cập nhật số lượng sản phẩm trong giỏ hàng
function updateProductCount() {
    quantityProductCartFullPage.textContent = gioHang.length;
}
updateProductCount();
//--------------------------------- đóng cart on mobile -----------------------
const closeCartOnMobile = document.querySelector('.showCart-header_close')
const menuinforProductAddCart = document.querySelector('.content__information-item--buy')
// hàm ẩn cart on mobile
function clickCloseCartOnMobile() {
    closeCartOnMobile.addEventListener('click', () => {
        showCartInfo.style.display = 'none';
        screeenBlurred.style.display = 'none';
        showMenuButtonAddProduct.style.display = 'block';
    })
}
clickCloseCartOnMobile();