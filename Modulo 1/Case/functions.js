module.exports = function filteredList(word, json) {

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