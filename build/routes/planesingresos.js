"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const planesingresoServicio_1 = require("../services/planesingresoServicio");
const router = express_1.default.Router();
router.route('/')
    .get(planesingresoServicio_1.getAllEntries)
    .post(planesingresoServicio_1.addEntry);
router.route('/:id')
    .get(planesingresoServicio_1.getIdEntry)
    .delete(planesingresoServicio_1.deleteIdEntry)
    .put(planesingresoServicio_1.updateIdEntry);
exports.default = router;
