import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en 09-promesas.js', () => {

  // Usar done para probar funciones asíncronas.
  test('getHeroeByIdAsync debe de retornar un Héroe async', ( done ) => {
    
    const id = 1;

    getHeroeByIdAsync( id )
      .then( heroe => {
        expect( heroe ).toBe( heroes[0] );
        done();
      });
  });

  test('Debe de obtener un error si el héroe por ID no existe', ( done ) => {
    
    const id = 10;
    getHeroeByIdAsync( id )
      .catch( err => {
        expect( err ).toBe('No se pudo encontrar el héroe');
        done();
      });

  });
  
})
