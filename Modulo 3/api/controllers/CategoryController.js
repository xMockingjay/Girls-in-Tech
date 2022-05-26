const { Categories } = require("../models");

module.exports = class CategoryController {
    //método GET para listar todos Categories
    static async listCategories(req, res) {
        try {
            const allCategories = await Categories.findAll();
            return res.status(200).json(allCategories);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método GET para listar 1 Category
    static async categoryById(req, res) {
        const { id } = req.params;
        try {
            const oneCategory = await Categories.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneCategory);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método POST para criar um novo Category
    static async createCategory(req, res) {
        const newCategory = req.body;
        try {
            const newCreatedCategory = await Categories.create(newCategory);
            return res.status(200).json(newCreatedCategory); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método PUT para atualizar dados de um Category
    static async updateCategory(req, res) {
        const { id } = req.params;
        const newInformation = req.body;
        try {
            await Categories.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });
            const updatedCategory = await Categories.findOne({
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(updatedCategory);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //método DELETE para deletar um Category
    static async deleteCategory(req, res) {
        const { id } = req.params;
        try {
            await Categories.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `Category with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}