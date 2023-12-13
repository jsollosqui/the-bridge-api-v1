import { expect } from 'chai';
import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Login } from '../../src/requests/apis/loginApi'

let login = new Login();
let data: any;
const user = 'demoQA.2023!';
const userPwd = 'demoQA.2023!';
const invalidPwd = 'invalid';

Given('que accedo a la pantalla de login con usuario {string} y credenciales correctas', async function (userName) {
  data = await login.loginToSite(userName, userPwd);
  expect(data.token).is.not.empty;
});

When('ingreso el usuario {string} y el password {string}', async function (userName, invalidPwd) {
  data = await login.loginToSite(userName, invalidPwd);
  expect(data).is.not.empty;
  expect(data.status).to.be('User authorization failed.');
});

Then('se debe mostrar un mensaje de error que dice {string}', async function (msj) {
  data = await login.loginToSite(user, invalidPwd);
  expect(data).is.not.empty;
  expect(data.status).to.be(msj);
});