const { Addresses, Merchants, Services } = require("../models");

module.exports = class MerchantController {
    //método GET para listar todos Merchants
    static async listMerchants(req, res) {
        try {
            const allMerchants = await Merchants.findAll(
                {
                    include: [
                        {
                            model: Services,
                            as: 'services',
                            through: { attributes: [] }
                        }
                    ]
                }
            );
            return res.status(200).json(allMerchants);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método GET para listar 1 merchant
    static async merchantById(req, res) {
        const { id } = req.params;
        try {
            const oneMerchant = await Merchants.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneMerchant);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método POST para criar um novo Merchant
    static async createMerchant(req, res) {
        const newMerchant = req.body;
        try {
            const newCreatedMerchant = await Merchants.create(newMerchant);
            return res.status(200).json(newCreatedMerchant); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método PUT para atualizar dados de um Merchant
    static async updateMerchant(req, res) {
        const { id } = req.params;
        const { services, ...newInformation } = req.body;
        try {
            await Merchants.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });
            const updatedMerchant = await Merchants.findOne({
                where: {
                    id:Number(id)
                } 
            });

            if ( services && services.length > 0 ) {
                updatedMerchant.setServices(services);
            }
            
            return res.status(200).json(updatedMerchant);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método DELETE para deletar um merchant
    static async deleteMerchant(req, res) {
        const { id } = req.params;
        try {
            await Merchants.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `Merchant with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}