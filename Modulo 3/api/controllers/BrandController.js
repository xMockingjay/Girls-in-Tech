const { Brands, Categories, Merchants } = require("../models");

module.exports = class BrandController {
    static async listBrands(req, res) {
        try {
            const allBrands = await Brands.findAll(
                {
                    include: [
                        {
                            model: Categories,
                            as: 'categories',
                            through: { attributes: [] }
                        },
                        {
                            model: Merchants,
                            where: {
                                isBrand: true
                            }
                        }
                    ]
                }
                );
            return res.status(200).json(allBrands);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async brandById(req, res) {
        const { id } = req.params;
        try {
            const oneBrand = await Brands.findOne({ 
                where: {
                    id:Number(id)
                } 
            });
            return res.status(200).json(oneBrand);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createBrand(req, res) {
        const { categories, ...newBrand } = req.body;
        try {
            const newCreatedBrand = await Brands.create(newBrand);

            if ( categories && categories.length > 0 ) {
                newCreatedBrand.setCategories(categories);
            }
            return res.status(200).json(newCreatedBrand); 
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateBrand(req, res) {
        const { id } = req.params;
        const { categories, ...newInformation } = req.body;
        try {
            await Brands.update(newInformation, { 
                where: {
                id: Number(id)
                }
            });

            const updatedBrand = await Brands.findOne({
                where: {
                    id:Number(id)
                } 
            });

            if ( categories && categories.length > 0 ) {
                updatedBrand.setCategories(categories);
            }
            return res.status(200).json(updatedBrand);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteBrand(req, res) {
        const { id } = req.params;
        try {
            await Brands.destroy( { 
                where: { 
                    id: Number(id)
                }
            });
            return res.status(200).json({
                message: `Brand with id ${id} successfully deleted!`
            })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}