//spread operator
const classA= ['John','Jane','Mark']
const classB= ['Francisco','Javier','Emilia']

const allClass =[...classA, ...classB];
console.log('TODAS LAS CLASES =>', allClass);


//Propiedades dinámicas - POCO UTILIZADAS
const dynamic ='javascript';
const value= 'nivel avanzado';

const developer ={
    [dynamic]: value,
}
console.log('developer=>', developer);


