const newJson = require('./newData.json');

// As seguintes funções foram criadas de acordo com o arquivo 'newData.json'
//Resolução do item 4 do Case
//Percorre todo json realizando as operações solicitadas
newJson.forEach(obj => {
    let quantity = obj.item.quantity;
    let unitPrice = obj.item.unitPrice;
    let discount = obj.item.discount;
    let subTotal = obj.cart.subtotal;
    let total = obj.cart.total;
    let firstValue = obj.payments.payment[0].value;
    let secondValue = obj.payments.payment[1].value;
    let changeOne = obj.payments.payment[0].changeFor;
    let changeTwo = obj.payments.payment[1].changeFor;
    let totalCash = obj.payments.charges.totalInCash;
    
    obj.cart.total = cartTotal(subTotal, discount);
    obj.item.totalPrice = totalPrice(quantity, unitPrice);
    obj.cart.subtotal = cartSubTotal(quantity, unitPrice);
    obj.payments.payment[0].value = firstPaymentMethod(total);
    obj.payments.payment[0].changeFor = firstChangeFor(obj.payments.payment[0].method, firstValue);
    obj.payments.payment[1].value = secondPaymentMethod(total);
    obj.payments.payment[1].changeFor = secondChangeFor(obj.payments.payment[1].method, secondValue);
    obj.payments.charges.subTotal = subTotal;
    obj.payments.charges.total = total;
    obj.payments.charges.totalDiscounts = discount;
    obj.payments.charges.totalInCash = totalInCash(obj.payments.payment[0], obj.payments.payment[1]);
    obj.payments.charges.change = change(changeOne, changeTwo, totalCash);

    //Console para ver se as funções estão retornando os valores corretamente
    console.log(obj);
})

function totalPrice(quantity, price) {
    return quantity * price;
}

function cartSubTotal(quantity, price) {
    return quantity * price;
}

function cartTotal(subTotal, discount) {
    return subTotal - discount;
}

function firstPaymentMethod(total) {
    return Number((total * 0.33).toFixed(4));
}

function secondPaymentMethod(total) {
    return Number((total * 0.67).toFixed(4));
}

function firstChangeFor(methodPath, value) {
    if(methodPath === 'CASH') {
        return Number((value + (value * 0.07) ).toFixed(4));
    } else {
        return 0;
    }
}

function secondChangeFor(methodPath, value) {
    if(methodPath === 'CASH') {
        return Number((value + (value * 0.11) ).toFixed(4));
    } else {
        return 0;
    }
}

//Soma os primeiros métodos CASH
function totalInCashOne(pathOne) {
    if( pathOne.method === 'CASH' ) {
        return pathOne.value;
    } else {
        return 0;
    }
}

//Soma os segundos métodos CASH
function totalInCashTwo(pathTwo) {
    if (pathTwo.method === 'CASH') {
        return pathTwo.value;
    } else {
        return 0;
    }
}

//Somatório dos métodos CASH
function totalInCash(one, two) {
    return (parseFloat(totalInCashOne(one)) + parseFloat(totalInCashTwo(two)));
}

function change(one, two, total) {
    return Number(((one + two) - total).toFixed(4));

}

