'use strict'
const CarrosController = require("../controller/CarrosController");

class CarrosRoute{
    constructor (app){
        app.get("/carros", CarrosController.buscarTodos);
        app.post("/carros", CarrosController.adicionar);
        app.put("/carros", CarrosController.editar);
        app.delete("/carros", CarrosController.remover);
    }
}

module.exports = CarrosRoute;