"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./index"));
const clases_1 = __importDefault(require("./routes/clases"));
const clientes_1 = __importDefault(require("./routes/clientes"));
const entrenadores_1 = __importDefault(require("./routes/entrenadores"));
const fechaclases_1 = __importDefault(require("./routes/fechaclases"));
const ingresos_1 = __importDefault(require("./routes/ingresos"));
const planes_1 = __importDefault(require("./routes/planes"));
const planesingresos_1 = __importDefault(require("./routes/planesingresos"));
const tipoingresos_1 = __importDefault(require("./routes/tipoingresos"));
const usuarios_1 = __importDefault(require("./routes/usuarios"));
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
        this.app.use('/api/clases', clases_1.default);
        this.app.use('/api/clientes', clientes_1.default);
        this.app.use('/api/entrenadores', entrenadores_1.default);
        this.app.use('/api/fechaclases', fechaclases_1.default);
        this.app.use('/api/ingresos', ingresos_1.default);
        this.app.use('/api/planes', planes_1.default);
        this.app.use('/api/planingresos', planesingresos_1.default);
        this.app.use('/api/tipoingresos', tipoingresos_1.default);
        this.app.use('/api/usuarios', usuarios_1.default);
    }
    async listen() {
        await this.app.listen(this.port);
        console.log(`¡Servidor conectado al puerto ${this.port}!`);
    }
}
exports.App = App;
