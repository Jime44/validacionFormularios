import { valida } from "./validaciones";

const inputs = document.querySelectorAll('input');

inputs.forEach( input =>{
    input.addEventListener('blur', (inut) => {
        valida(input.target);
    });
});