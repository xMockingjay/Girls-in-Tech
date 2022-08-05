const { Addresses } = require("../models");

module.exports = class AddressesController {
    //método GET para listar todos Addresses
    static async listAddresses(req, res) {
        try {
            const allAddresses = await Addresses.findAll();
            return res.status(200).json(allAddresses);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método GET para listar 1 Address
    static async addressById(req, res) {
        const { id } = req.params;
        try {
            const oneAddress = await Addresses.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneAddress);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método POST para criar um novo Address
    static async createAddress(req, res) {
        const newAddress= req.body;
        try {
            const newCreatedAddress = await Addresses.create(newAddress);
            return res.status(200).json(newCreatedAddress); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método PUT para atualizar dados de um Address
    static async updateAddress(req, res) {
        const { id } = req.params;
        const newInformation = req.body;
        try {
            await Addresses.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });
            const updatedAddress = await Addresses.findOne({
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(updatedAddress);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método DELETE para deletar um Address
    static async deleteAddress(req, res) {
        const { id } = req.params;
        try {
            await Addresses.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `Address with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}