# language: es
Característica: Esto es una demo de logueo a la pantalla principal, acá podemos escribir toda la historia

  @casoSimple
  Escenario: Ingreso usuario incorrecto
    Dado que accedo con las credenciales del usuario 'demoQA.2023!' y con las credenciales correctas
    Cuando ingreso el usuario 'Pedro' y el password 'incorrecto' y confirmo
    Entonces se debe mostrar un mensaje de error que dice 'Invalid username or password!'
  