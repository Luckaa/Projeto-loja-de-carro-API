'use strict'
const Express = require("express")
const Mongoose = require("mongoose")
const bodyParser = require("body-parser")
const Cors = require("cors")
const Config = require("../config.json");

const CarrosRoute = require("./route/CarrosRoute");

class App {

    constructor() {

        this.app;

    }
    init() {

        this.app = Express();
        this.app.use(bodyParser.json());
        this.app.use(Cors());

        Mongoose.connect(`mongodb://${Config.development.db.user}:${Config.development.db.password}@${Config.development.db.url}/${Config.development.db.name}`, {
            useNewUrlParser: true
        }).then(e =>{console.log("conectou ao banco")});

        // Instanciando as rotas
        new CarrosRoute(this.app);
       
        this.app.get("/", (req, res, next) => {
            res.json({
                System: "Loja de Carros - API",
                Version: "1.0.0",
                Message: "Seja bem-vindo ao Sistema de Gerenciamento da Loja de Carros"
            })
        });

        this.app.listen(`${Config.apiPort}`, () => {
            console.log(`API rodando em http://localhost:${Config.apiPort}`);
        })

    }

}
new App().init();