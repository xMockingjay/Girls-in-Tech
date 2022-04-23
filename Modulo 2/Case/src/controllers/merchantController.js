//Arquivo para testar as rotas
//import merchantsData from "../data/data.js";

let newMerchantsData = new Array();

class MerchantController {
    
    //Lista todos Merchants
    static readMerchants = (req, res) => {
        res.status(200).json(newMerchantsData);
    }

    //Busca Merchant por Id
    static readMerchantById = (req, res) => {
        const index = searchMerchant(req.params.id);
        res.status(200).json(merchantsData[index]);
    }
      
    //Cria novo Merchant
    static createMerchant = (req,res) => {
        newMerchantsData.push(req.body);
        res.status(201).send('Merchant cadastrado com sucesso!');
    }

    //Atualização de Merchant
    static updateMerchant = (req, res) => {
        const index = searchMerchant(req.params.id);
        newMerchantsData[index] = req.body;
        res.status(200).send(`Merchant atualizado com sucesso!`);
    }

    static controllCategorie = (req, res) => {
        const index = searchMerchant(req.params.id);
        newMerchantsData[index].categories = req.body.categories;
        res.status(200).send('Categorias atualizadas com sucesso!');
    }

    //Controle de status do Merchant
    static controllStatus = (req, res) => {
        const index = searchMerchant(req.params.id);
        newMerchantsData[index].status = req.body.status;
        res.status(200).send('Status atualizado com sucesso!');
    }

    //Deleta Merchant por Id
    static deleteMerchant = (req, res) => {
        let index = searchMerchant(req.params.id);
        newMerchantsData.splice(index, 1);
        res.send(`Merchant ${index} removido com sucesso!`);
    }

    //Envio de mensagem
    static sendMessage = (req, res) => {
        let index = searchMerchant(req.params.id);
        newMerchantsData[index].message = `Message: ${req.body.message}. Enviada em ${getDate()}`;
        res.status(200).send('Mensagem enviada com sucesso!');
    }

}

function searchMerchant(id) {
    return newMerchantsData.findIndex(merchant => merchant.id == id);
}

function getDate() {
    let date = new Date();

    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let message = `Date: ${day}/${month}/${year} - Hour: ${hour}:${min}:${sec}`;

    return message;
}

export default MerchantController;