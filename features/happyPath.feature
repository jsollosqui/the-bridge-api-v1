# language: es
Característica: Esto es un ejemplo de logueo e interaccion basica con la interfaz demoQA

  @casoSimple
  Escenario: Ingreso con usuario correcto
    Dado que accedo a la pantalla de login con usuario 'demoQA.2023!' y credenciales correctas
    Cuando ingreso el usuario 'Pedro' y el password 'incorrecto'
    Entonces se debe mostrar un mensaje de error que dice 'User authorization failed.'
  
  Escenario: Buscar libro
    Dado que quiero realizar la busqueda de los libros del autor 'Addy Osmani'
    Entonces la busqueda debe contener el libro 'Learning JavaScript Design Patterns'