'use strict';

const Mongoose = require('mongoose');

class Carro extends Mongoose.Schema {

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
        });

        Mongoose.model('Carro', this);
    } // constructor

} // class

new Carro();

module.exports = Carro;