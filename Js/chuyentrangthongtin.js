const listItemProduct = document.querySelectorAll('.item__shirt')
listItemProduct.forEach(item => {
    let idItem = item.getAttribute('data-product-id')
    item.addEventListener('click', () => {
        if(idItem) {
            window.location.href = `sp-nuochoa${idItem}.html`;
        }
    })
})