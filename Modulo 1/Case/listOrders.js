const dataJson = require('./data.json');

const item = "item_";
const merchant = "merchant_";
const customer = "customer_";
const cart = "cart_";

//Resolução dos itens 1, 2 e 3 do Case
filteredList(merchant, dataJson);
//filteredList(item, dataJson);
//filteredList(customer, dataJson);
//filteredList(cart, dataJson);

// A função filteredList funciona no arquivo 'data.json';
function filteredList(word, json) {

    let filteredArray = new Array();
    // percorre os objetos dentro do array
    json.forEach( obj => {
        let filteredObj = new Object();
        //percorre os atributos do objeto
        for(let key in obj) {
            if(key.includes(word)) {
                filteredObj[key] = obj[key];
            }
        }
            
        filteredArray.push(filteredObj);
    })

    return console.log(filteredArray);
}