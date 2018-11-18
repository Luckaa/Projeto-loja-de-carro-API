'use strict';

const CarroModel = require("../model/Carro");
const Mongoose = require("mongoose");
const Carro = Mongoose.model("Carro");



class CarroController {

    static async buscarTodos(req, res) {
        try {
            res.json(await Carro.find({}));
        } catch (error) {
            res.status(400).send("Erro ao buscar Carros!");
        }
    }
    static async adicionar(req, res) {
        try {
            // console.log(req.body);
            // res.status(200).send({
            //     body: req.body
            // })
            res.json(await Carro.create(req.body));
        } catch (error) {
            res.status(400).send("Erro ao adicionar Carros ");
        }
    }
    static async editar(req, res) {
        try {

            console.log("Editando id: " + req.body._id);
            res.json(await Carro.findByIdAndUpdate(req.body._id, req.body));
        } catch (error) {
            res.status(400).send("Erro ao atualizar Carro");
        }
    }
    static async remover(req, res) {
        console.log(req.body.modelo)
        try {
            console.log("Removendo id: " + req.body._id);
            res.json(await Carro.findByIdAndRemove(req.body._id));
        } catch (error) {
            res.status(400).send("Erro ao remover Carro");
        }
    }



}
module.exports = CarroController;