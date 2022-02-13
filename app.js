function productNumber(product, isadd) {
    const productNumberText = document.getElementById(product + '-number');
    const prductNumber = productNumberText.value;
    let increaseNumber=0;
    if (isadd == true) {
        increaseNumber = parseInt(prductNumber) + 1;
    } else if (parseInt(prductNumber) > 0) {
        increaseNumber = parseInt(prductNumber) - 1;
    }
    
    productNumberText.value = increaseNumber;
};


document.getElementById('mobile-plus').addEventListener('click', function () {

    productNumber('mobile', true);
});

document.getElementById('mobile-minus').addEventListener('click', function () {


    productNumber("mobile", false);
});

document.getElementById('case-plus').addEventListener('click', function () {

    productNumber("case", true);
});

document.getElementById('case-minus').addEventListener('click', function () {


    productNumber('case', false);
});

