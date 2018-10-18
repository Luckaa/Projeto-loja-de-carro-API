'use strict'
const CarroController = require("../controller/CarroController");

class CarroRoute{
    constructor (app){
        app.get("/carros", CarroController.buscarTodos);
        app.post("/carros", CarroController.adicionar);
        app.put("/carros", CarroController.editar);
        app.delete("/carros", CarroController.remover);
    }
}

module.exports = CarroRoute;