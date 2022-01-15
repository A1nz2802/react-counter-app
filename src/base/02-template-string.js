
const nombre   = 'Brawer';
const apellido = 'Nuñez';

const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );