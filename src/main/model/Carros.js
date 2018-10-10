'use strict';

const Mongoose = require('mongoose');

class Carros extends Mongoose.Schema {

    constructor() {

        super({
            foto:{
                type: String
            },
            modelo: {
                type: String
            },

            ano: {
                type: String
            },

            kilometragem: {
                type: String
            },

            combustivel: {
                type: String
            },

            cor: {
                type: String
            },
            conservacao: {
                type: String
            },
            
            obs: {
                type: String
            },
       
        });

        Mongoose.model('Carros', this);
    } // constructor

} // class

new Carros();

module.exports = Carros;