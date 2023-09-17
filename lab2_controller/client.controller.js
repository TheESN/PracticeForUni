const db = require('../db_lab2');

class ClientController{

    async createClient(req, res){
        const {name, surname} = req.body;
        const newClient = await db.query('INSERT INTO client (name, surname) values ($1, $2) RETURNING *', [name, surname]);

        res.json(newClient.rows[0]);
    }

    async getClients(req, res){
        const clients = await db.query('SELECT * FROM client');

        res.json(clients.rows);
    }

    async getOneClient(req, res){
        const id = req.params.id;
        const clients = await db.query('SELECT * FROM client WHERE id = $1', [id]);

        res.json(clients.rows);
    }

    async updateClient(req, res){
        const {id, name, surname} = req.body;
        const user = await db.query('UPDATE client SET name = $1, surname = $2 WHERE id = $3 RETURNING *', [name, surname, id]);

        res.json(clients.rows[0]);
    }

    async deleteClient(req, res){
        const id = req.params.id;
        const clients = await db.query('DELETE FROM client WHERE id = $1', [id]);

        res.json(clients.rows);
    }

}

module.exports = new ClientController()