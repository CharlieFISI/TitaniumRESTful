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
const express_1 = require("express");
const app_1 = require("./app");
const router = (0, express_1.Router)();
const port = 3000;
router.get('/', (_req, res) => res.json('Bienvenido a mi API'));
router.get('/ping', (_req, res) => {
    console.log('Alguien ha hecho ping ' + new Date().toLocaleDateString());
    res.send('pong');
});
exports.default = router;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = new app_1.App(port);
        yield app.listen();
    });
}
void main();
