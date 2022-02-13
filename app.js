

function productPrice(product, productNumber, price){
    const productPriceText = document.getElementById(product +'-price');
    const productPrice = productPriceText.innerText;
    const newPrice =  price * productNumber;
    productPriceText.innerText = newPrice;
}

function productNumber(product, isadd, price) {
    const productNumberText = document.getElementById(product + '-number');
    const prductNumber = productNumberText.value;
    let increaseNumber=0;
    if (isadd == true) {
        increaseNumber = parseInt(prductNumber) + 1;
    } else if (parseInt(prductNumber) > 0) {
        increaseNumber = parseInt(prductNumber) - 1;
    }
    productNumberText.value = increaseNumber;
    // product price update it-self 
    productPrice(product,increaseNumber,price);
    // total product price and tax update 
    totalPrice ();

};


document.getElementById('mobile-plus').addEventListener('click', function () {

    productNumber('mobile', true, 1219);
});

document.getElementById('mobile-minus').addEventListener('click', function () {


    productNumber("mobile", false, 1219);
});

document.getElementById('case-plus').addEventListener('click', function () {

    productNumber("case", true, 59);
});

document.getElementById('case-minus').addEventListener('click', function () {


    productNumber('case', false, 59);
});

