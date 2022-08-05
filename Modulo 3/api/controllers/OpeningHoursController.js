const { OpeningHours } = require("../models");

module.exports = class OpeningHoursController {
    //método GET para listar todos Categories
    static async listOpeningHours(req, res) {
        try {
            const allOpeningHours = await OpeningHours.findAll();
            return res.status(200).json(allOpeningHours);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método GET para listar 1 Service
    static async openingHoursById(req, res) {
        const { id } = req.params;
        try {
            const oneOpeningHours = await OpeningHours.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneOpeningHours);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método POST para criar um novo OpeningHours
    static async createOpeningHours(req, res) {
        const newOpeningHours = req.body;
        try {
            const newCreatedOpeningHours = await OpeningHours.create(newOpeningHours);
            return res.status(200).json(newCreatedOpeningHours); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método PUT para atualizar dados de um OpeningHours
    static async updateOpeningHours(req, res) {
        const { id } = req.params;
        const newInformation = req.body;
        try {
            await OpeningHours.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });
            const updatedOpeningHours = await OpeningHours.findOne({
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(updatedOpeningHours);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método DELETE para deletar um Service
    static async deleteOpeningHours(req, res) {
        const { id } = req.params;
        try {
            await OpeningHours.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `OpeningHours with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}