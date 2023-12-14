import { expect } from 'chai';
import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { Login } from '../../src/requests/apis/loginApi'
import { Books } from '../../src/requests/apis/booksApi'

let login = new Login();
let book = new Books();
let data: any;

Given('que accedo a la pantalla de login con usuario {string} y contraseña {string}', async function (userName, userPwd) {
  data = await login.loginToSite(userName, userPwd);
  expect(data.token).is.not.empty;
});

When('ingreso el usuario {string} y el password {string}', async function (userName, invalidPwd) {
  data = await login.loginToSite(userName, invalidPwd);
  expect(data).is.not.empty;
});

Then('se debe mostrar un mensaje de error que dice {string}', async function (msj) {
  expect(data.result).to.be.equals(msj);
});

Given('que quiero realizar la busqueda de los libros del autor {string}', async function (aut) {
  data = await book.listBooks(aut);
  expect(data).is.not.empty;
});

Then('la busqueda debe contener el libro {string}', async function (libro) {
    data.forEach((elemento:any) => {
    if (elemento.title == libro ){
      const aut ='Addy Osmani';
      expect(elemento.author).to.equal(aut);
    }
  });
  expect(data).is.not.empty;
});