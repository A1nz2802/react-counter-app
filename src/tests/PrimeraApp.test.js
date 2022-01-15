import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

//* https://www.npmjs.com/package/enzyme-to-json


describe('Pruebas en <PrimeraApp />', () => {
  /* 
  test('Debe de mostrar Hola, soy un saludo', () => {
    
    const saludo = 'Hola, soy un saludo';
    
    const { getByText } = render( <PrimeraApp saludo={ saludo } />);
    
    expect( getByText( saludo )).toBeInTheDocument();
    
  })
  */
 
 // Pruebas con enzyme
 test('Debe de mostrar <PrimeraApp /> correctamente', () => {
   
    //* Tocar la tecla U para actualizar el snapshot
    const saludo = 'Hola, soy un saludo'

    const wrapper = shallow( <PrimeraApp saludo={ saludo }/> );

    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitulo enviado por props ', () => {

    const saludo = 'Hola, soy un saludo';
    const subTitulo = 'Soy un subtitulo';

    const wrapper = shallow( 
      <PrimeraApp 
        saludo={ saludo }
        subtitulo={ subTitulo }
      /> 
    );

    const textoParrafo = wrapper.find('p').text();

    expect( textoParrafo ).toBe( subTitulo );


  })
  
  
})
