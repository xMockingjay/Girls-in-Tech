const { Services } = require("../models");

module.exports = class ServiceController {
    //método GET para listar todos Services
    static async listServices(req, res) {
        try {
            const allServices = await Services.findAll();
            return res.status(200).json(allServices);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método GET para listar 1 Service
    static async serviceById(req, res) {
        const { id } = req.params;
        try {
            const oneService = await Services.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneService);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método POST para criar um novo Service
    static async createService(req, res) {
        const newService = req.body;
        try {
            const newCreatedService = await Services.create(newService);
            return res.status(200).json(newCreatedService); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método PUT para atualizar dados de um Service
    static async updateService(req, res) {
        const { id } = req.params;
        const newInformation = req.body;
        try {
            await Services.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });
            const updatedService = await Services.findOne({
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(updatedService);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método DELETE para deletar um Service
    static async deleteService(req, res) {
        const { id } = req.params;
        try {
            await Services.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `Service with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}