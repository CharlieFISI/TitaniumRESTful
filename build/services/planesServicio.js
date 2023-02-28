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
exports.updateIdEntry = exports.deleteIdEntry = exports.getIdEntry = exports.addEntry = exports.getAllEntries = void 0;
const conexion_1 = require("../conexion");
const utils_1 = require("../utils");
function getAllEntries(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, conexion_1.connect)();
        const getAll = yield conn.query('SELECT * FROM Planes');
        return res.json(getAll[0]);
    });
}
exports.getAllEntries = getAllEntries;
function addEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newEntry = (0, utils_1.toPlanEntryWithoutId)(req.body);
            const conn = yield (0, conexion_1.connect)();
            yield conn.query('INSERT INTO Planes SET ?', [newEntry]);
            return res.json({
                message: 'Entrada de Plan añadida'
            });
        }
        catch (e) {
            let message;
            if (e instanceof Error)
                message = e.message;
            else
                message = String(e);
            return res.status(400).send(message);
        }
    });
}
exports.addEntry = addEntry;
function getIdEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, conexion_1.connect)();
        const getId = yield conn.query('SELECT * FROM Planes WHERE PlanId = ?', [id]);
        return res.json(getId[0]);
    });
}
exports.getIdEntry = getIdEntry;
function deleteIdEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.id;
        const conn = yield (0, conexion_1.connect)();
        yield conn.query('DELETE FROM Planes WHERE PlanId = ?', [id]);
        return res.json({
            message: 'Entrada de Plan eliminada'
        });
    });
}
exports.deleteIdEntry = deleteIdEntry;
function updateIdEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateEntry = req.body;
            const conn = yield (0, conexion_1.connect)();
            yield conn.query('UPDATE Planes set ? WHERE PlanId = ?', [updateEntry, id]);
            return res.json({
                message: 'Entrada de Plan actualizada'
            });
        }
        catch (e) {
            let message;
            if (e instanceof Error)
                message = e.message;
            else
                message = String(e);
            return res.status(400).send(message);
        }
    });
}
exports.updateIdEntry = updateIdEntry;
