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
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield (0, promise_1.createPool)({
            host: 'containers-us-west-127.railway.app',
            user: 'root',
            password: 'yqz3OYH3P8Va5jdFcmNw',
            database: 'gimnasio',
            port: 6435
            /* ssl: {
                rejectUnauthorized: true,
                ca: serverCA
              } */
        });
        return connection;
    });
}
exports.connect = connect;