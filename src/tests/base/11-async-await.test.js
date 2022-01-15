import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';

describe('Pruebas en 11-async-await.js y fetch', () => {
  test('Debe retornar el url de la imagen', async() => {

    jest.setTimeout(10000);
    
    const url = await getImagen();

    expect( typeof url ).toBe( 'string' );
    expect( url.includes('https://')).toBe( true );

    await fetch( url )
      .then( res => {
        expect( res.status ).toBe( 200 );
      })
      .catch( () => {
        throw new Error('No existte imagen');
      })

  })
  
})
