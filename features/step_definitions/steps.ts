import { expect } from 'chai';
import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Login } from '../../src/requests/apis/loginApi'

let login = new Login();
let token = "";

Given('que accedo con las credenciales del usuario {string} y con las credenciales correctas', async function (userName) {
  token = await login.loginToSite(userName);
  expect(token).is.not.empty
});


When('ingreso el usuario {string} y el password {string} y confirmo', async function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('se debe mostrar un mensaje de error que dice {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});