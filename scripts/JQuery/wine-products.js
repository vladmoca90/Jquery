$(function () {
    let products = [];
    let list = $('#productsList');
    let product = $('.product');

    const createProductsList = products => {
        if(!products) {
            throw new Error('The products parameter must be populated');
        }

        let productsList = $('.products-container').find('.product');

        for(let i = 0; i < productsList.length; i++) {
            let productsObj = new Object();

            productsObj.name = product.eq(i).attr('data-product-name'),
            productsObj.id = product.eq(i).attr('data-product-id'),
            products.push(productsObj);
        }
    }

    createProductsList(products);

    const addProductsToList = products => {
        if(products.length == 0) {
            throw new Error('The products list must be given');
        }

        list.find('option').eq(0).val(0);

        for(let i = 0; i < products.length; i++) {
            let option = $('<option></option>');

            list.append(option);
            option.attr('value', products[i].id);
            option.val(products[i].id);
            option.html(products[i].name);
        }
    }

    addProductsToList(products);

    list.change(function () {
        let selected = $(this).find(':selected');
        let selectedOption = selected.val();

        product.hide();

        let matchedValue = '.product[data-product-id=' + selectedOption + ']';

        if(selectedOption == 0) {
            product.show();
        }
        if(selectedOption !== 0) {
            $(matchedValue).show();
        }
    });
});