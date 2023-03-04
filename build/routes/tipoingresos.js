"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const tipoingresoServicio_1 = require("../services/tipoingresoServicio");
const router = express_1.default.Router();
router.route('/')
    .get(tipoingresoServicio_1.getAllEntries)
    .post(tipoingresoServicio_1.addEntry);
router.route('/:id')
    .get(tipoingresoServicio_1.getIdEntry)
    .delete(tipoingresoServicio_1.deleteIdEntry)
    .put(tipoingresoServicio_1.updateIdEntry);
exports.default = router;
