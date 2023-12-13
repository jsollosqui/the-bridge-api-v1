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
let token = "";
(0, cucumber_1.Given)('que accedo con las credenciales del usuario {string} y con las credenciales correctas', function (userName) {
    return __awaiter(this, void 0, void 0, function* () {
        token = yield login.loginToSite(userName);
        (0, chai_1.expect)(token).is.not.empty;
    });
});
(0, cucumber_1.When)('ingreso el usuario {string} y el password {string} y confirmo', function (string, string2) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
(0, cucumber_1.Then)('se debe mostrar un mensaje de error que dice {string}', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
});
