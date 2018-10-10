'use strict';

const CarrosModel = require("../model/Carros");
const Mongoose = require("mongoose");
const Carros = Mongoose.model("Carros");



class CarrosController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Carros.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Carros!");
        }
    }
    static async adicionar(req, res) {
        try {
            res.json(await Carros.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Carros ");
        }
    }
    static async editar(req, res) {
        try {
            res.json(await Carros.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Carros");
        }
    }
    static async remover(req, res) {
        try {
            res.json(await Carros.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Carros");
        }
    }


}
module.exports = CarrosController;