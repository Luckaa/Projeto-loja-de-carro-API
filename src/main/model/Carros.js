'use strict';

const Mongoose = require('mongoose');

class Carros extends Mongoose.Schema {

    constructor() {

        super({

            modelo: {
                type: String
            },

            marca: {
                type: String
            },

            combustivel: {
                type: String
            },

            ano: {
                type: String
            },

            preço: {
                type: String
            },
            foto: {
                type: String
            },
            
            cor: {
                type: String
            },
            telefonePContato: {
                type: String
            },

            emailPropostas: {
                type: String
            },
        });

        Mongoose.model('Carros', this);
    } // constructor

} // class

new Carros();

module.exports = Carros;