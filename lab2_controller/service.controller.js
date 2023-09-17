const db = require('../db_lab2');

class ServiceController{
    async createService(req, res){
        const {name, description, price} = req.body;
        const newService = await db.query('INSERT INTO service (name, description, price) values ($1, $2, $3) RETURNING *', [name, description, price]);

        res.json(newService.rows[0]);

    }

    async getServices(req, res){
        const services = await db.query('SELECT * FROM service');

        res.json(services.rows);
    }

    async getOneService(req, res){
        const id = req.params.id;
        const services = await db.query('SELECT * FROM service WHERE id = $1', [id]);

        res.json(services.rows);
    }

    async updateService(req, res){
        const {id, name, description, price} = req.body;
        const service = await db.query('UPDATE service SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *', [name, description, price, id]);

        res.json(service.rows[0]);
    }

    async deleteService(req, res){
        const id = req.params.id;
        const services = await db.query('DELETE FROM service WHERE id = $1', [id]);

        res.json(services.rows);
    }
}

module.exports = new ServiceController()