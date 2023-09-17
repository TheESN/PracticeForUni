const Router = require('express');
const router = new Router();
const applicationController = require('../lab2_controller/application.controller');

router.post('/application', applicationController.createApp);
router.get('/application', applicationController.getApps);
router.get('/application/:id', applicationController.getOneApp);
router.put('/application', applicationController.updateApp);
router.delete('/application/:id', applicationController.deleteApp);


module.exports = router;