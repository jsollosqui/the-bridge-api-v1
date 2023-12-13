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
const chai_1 = require("chai");
const cucumber_1 = require("@cucumber/cucumber");
const loginApi_1 = require("../../src/requests/apis/loginApi");
let login = new loginApi_1.Login();
let data;
const user = 'demoQA.2023!';
const userPwd = 'demoQA.2023!';
const invalidPwd = 'invalid';
(0, cucumber_1.Given)('que accedo a la pantalla de login con usuario {string} y credenciales correctas', function (userName) {
    return __awaiter(this, void 0, void 0, function* () {
        data = yield login.loginToSite(userName, userPwd);
        (0, chai_1.expect)(data.token).is.not.empty;
    });
});
(0, cucumber_1.When)('ingreso el usuario {string} y el password {string}', function (userName, invalidPwd) {
    return __awaiter(this, void 0, void 0, function* () {
        data = yield login.loginToSite(userName, invalidPwd);
        (0, chai_1.expect)(data).is.not.empty;
        (0, chai_1.expect)(data.status).to.be('User authorization failed.');
    });
});
(0, cucumber_1.Then)('se debe mostrar un mensaje de error que dice {string}', function (msj) {
    return __awaiter(this, void 0, void 0, function* () {
        data = yield login.loginToSite(user, invalidPwd);
        (0, chai_1.expect)(data).is.not.empty;
        (0, chai_1.expect)(data.status).to.be(msj);
    });
});
