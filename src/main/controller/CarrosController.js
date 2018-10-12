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

            console.log("Editando id: " + req.body._id);
            res.json(await Produto.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Carro");
        }
    }
    static async remover(req, res) {
        try {
            console.log("Removendo id: " + req.body._id);
            res.json(await Produto.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Carro");
        }
    }



}
module.exports = CarrosController;