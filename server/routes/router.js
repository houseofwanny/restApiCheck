const express = require ('express');
const route = express.Router()

const services = require('../services/render');
const controller = require ('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes);

/**
 * @description Add User
 * @method GET /add-user
 */

route.get('/add-user',services.add_user);

/**
 * @description Update User
 * @method GET /update-user
 */

route.get('/update-user',services.update_user)


//API
route.post('/api/test', controller.create);
route.get('/api/test', controller.find);
route.put('/api/test/:id', controller.update);
route.delete('/api/test/:id', controller.delete);



module.exports=route