
describe('Pruebas en el archivo demo.test.js', () => {
  
  test('Esta es mi primera prueba', () => {
  
    //* Patrón AAA en el Unit Testing
  
    //* 1. Inicialización (Arrange)
    const mensaje = 'Hola Mundo';
  
    //* 2. Actuar (Act)
    const mensaje2 = 'Hola Mundo';
    
    //* 3. Confirmar, comprobar y observar el comportamiento (Assert)
  
    expect( mensaje ).toBe( mensaje2 );
  
  });
});



