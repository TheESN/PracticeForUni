const db = require('../db_lab2');

class ApplicationController{
    async createApp(req, res){
        const {name, client_id, service_id} = req.body;
        const newApp = await db.query('INSERT INTO application (name, client_id, service_id) values ($1, $2, $3) RETURNING *', [name, client_id, service_id]);

        res.json(newApp.rows[0]);
    }

    async getApps(req, res){
        const apps = await db.query('SELECT * FROM application');

        res.json(apps.rows);
    }

    async getOneApp(req, res){
        const id = req.params.id;
        const apps = await db.query('SELECT * FROM application WHERE id = $1', [id]);

        res.json(apps.rows);
    }

    async updateApp(req, res){
        const {id, name, client_id, service_id} = req.body;
        const app = await db.query('UPDATE application SET name = $1, client_id = $2, service_id = $3 WHERE id = $4 RETURNING *', [name, client_id, service_id, id]);

        res.json(app.rows[0]);
    }

    async deleteApp(req, res){
        const id = req.params.id;
        const apps = await db.query('DELETE FROM application WHERE id = $1', [id]);

        res.json(apps.rows);
    }
}

module.exports = new ApplicationController()