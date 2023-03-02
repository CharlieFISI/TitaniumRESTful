"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./index"));
const planes_1 = __importDefault(require("./routes/planes"));
const clientes_1 = __importDefault(require("./routes/clientes"));
const clases_1 = __importDefault(require("./routes/clases"));
class App {
    constructor(port) {
        this.port = port;
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(index_1.default);
        this.app.use('/api/planes', planes_1.default);
        this.app.use('/api/clientes', clientes_1.default);
        this.app.use('/api/clases', clases_1.default);
    }
    async listen() {
        await this.app.listen(this.port);
        console.log(`¡Servidor conectado al puerto ${this.port}!`);
    }
}
exports.App = App;
