export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores(tipoDeInput)){
        validadores(tipoDeInput)(input);
    }

    if(input.validdity.valid){
      input.parentElement.ClassList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML + " ";

    }else{
        input.parentElement.ClassList.add("input-container--invalid");
        input.parentElement.querySelector("input.message.error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }

};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede esta vacío",
    },
    email: {
        valueMissing: "El campo correo no puede esta vacío",
        typeMismatch: "El correo no es válido",
    },
    password: {
       valueMissing: "El campo contraseña no puede esta vacío",
       patternMismatch: "Debe contener al menos 1 letra mayúscula, un número y un caracter especial.",
    },
    nacimiento: {
        valueMissing: "Este campo no puede esta vacío",
        customError: "Debes tener al menos 18 años de edad",
    },
    numero: {
      valueMissing: "Este campo no puede estar vacío",
      patternMismatch: "El formato requerido es XXXXXXXXXX 10 números",
    }, 
    direccion: { 
        valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La dirección debe contener entre 10 a 40 caracteres",
    },
    ciudad: { 
        valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "La ciudad debe contener entre 10 a 40 caracteres",
    },
    estado: { 
        valueMissing: "Este campo no puede estar vacío",
    patternMismatch: "El estado debe contener entre 10 a 40 caracteres",
    },
};

const validadores = {
   nacimiento: input => validarNacimiento(input),
};

function mostarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach((error ) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje
};

 function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if (mayorDeEdad(fechaCliente)){
        mensaje = 'Debes de tener 18 años';
    };

    input.setCustomValidity(mensaje);
 };

 function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate())
    return diferenciaFechas < fechaActual;
 }