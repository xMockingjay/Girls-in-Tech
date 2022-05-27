//Arquivo para testar as rotas
//import merchantsData from "../data/data.js";

let newMerchantsData = new Array();

class MerchantController {
    
    //Lista todos Merchants
    static readMerchants = (req, res) => {
        res.status(200).json(newMerchantsData);
    }
    /**
     * Tanto os parametros recebido pela rota e as query-string são strings.
     * Se para a busca do restaurante você recebe um valor string como parametro e no "banco de dados" for string então ta tudo certo.
     * Mas para garantir que o valor seja sempre o mesmos é importante fazer o Casting, como na função a baixo
     * acredito que o id do merchant é um numero, logo ai receber do params uma string o resultado não será o esperado. Vamos garantir isso, veja as mudanças
     */
    //Busca Merchant por Id
    static readMerchantById = (req, res) => {
        const { id } = req.params;
        const index = searchMerchant(Number(id));
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
        newMerchantsData[index].message = `Message: ${req.body.message}. Enviada em ${getDateFormatted()}`;
        res.status(200).send('Mensagem enviada com sucesso!');
    }

}

function searchMerchant(id) {
    return newMerchantsData.findIndex(merchant => merchant.id == id);
}

function getDate() {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const message = `Date: ${day}/${month}/${year} - Hour: ${hour}:${min}:${sec}`;

    return message;
}

// olha que legal
const DateHourSeparate = (dateToIsoString) => dateToIsoString.split('T');
const formatHours = (dateToIsoString) => {
  const [ _, hours] = DateHourSeparate(dateToIsoString);
  return hours
};
const formatDate = (dateToIsoString) => {
  const [ date ] = DateHourSeparate(dateToIsoString);
  const splitDate = date.split('-');
  const reverseDate = splitDate.reverse();
  const joinDate = reverseDate.join('-');
  return joinDate;
};
const getDateFormatted = () => {
    const date = new Date().toISOString();
    const onlyDate = formatDate(date);
    const onlyHours = formatHours(date);
    const formatted = `Date: ${onlyDate} - Hours ${onlyHours}`;
    return formatted;
}
export default MerchantController;