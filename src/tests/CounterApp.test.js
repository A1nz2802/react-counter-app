import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';
import '@testing-library/jest-dom';

describe('Pruebas en el <CounterApp />', () => {

  // Las pruebas se ejecutan una después de otra, si modificas el componente
  // en una prueba anterior, ese cambio en el componente se mantendrá persistente en
  // la siguiente prueba.

  let wrapper = shallow( <CounterApp /> );
  // beforeEach ejecuta algo cada vez que inicie una prueba
  beforeEach( () => {
    // Reiniciando el wrapper cada vez que inicie una prueba.
    wrapper = shallow( <CounterApp /> );

  });

  test('Debe de mostrar <CounterApp /> correctamente', () => {
    
    expect( wrapper ).toMatchSnapshot();

  });

  test('Debe de mostrar el valor por defecto de 100', () => {
    
    const wrapper = shallow( <CounterApp value={ 100 } /> );
    // trim() para ignorar los espacios en blanco del elemento html
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('100');

    
  });

  test('Debe de incrementar con el botón +1', () => {
    
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('11');

  });

  test('Debe de decrementar con el botón -1', () => {
    
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect( counterText ).toBe('9');

  });

  test('Debe de colocar el valor por defecto con el btn reset', () => {
    
    const wrapper = shallow( <CounterApp value={ 105 } /> );

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');

    const counterText = wrapper.find('h2').text().trim();

    expect( counterText ).toBe( '105' );

  })
  
  
});
