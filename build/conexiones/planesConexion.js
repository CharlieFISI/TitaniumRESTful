"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntries = void 0;
const pool = new promise_1.Pool({
    host: 'containers-us-west-127.railway.app',
    user: 'root',
    password: 'yqz3OYH3P8Va5jdFcmNw',
    database: 'gimnasio'
});
const getEntries = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool.query('SELECT * FROM Planes');
    const entries = rows.map((row) => ({
        PlanId: row.PlanId,
        Nombre: row.Nombre,
        Precio: row.Precio,
        Duracion: row.Duracion
    }));
    return entries;
});
exports.getEntries = getEntries;
