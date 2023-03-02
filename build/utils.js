"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUsuarioEntry = exports.addEntrenadorEntry = exports.addIngresoEntry = exports.addClaseEntry = exports.addClienteEntry = exports.addPlanEntry = void 0;
const parseNombre = (stringFromRequest) => {
    if (!isString(stringFromRequest)) {
        throw new Error('Nombre inexistente o incorrecto');
    }
    return stringFromRequest;
};
const parsePrecio = (numberFromRequest) => {
    if (!isNumber(numberFromRequest)) {
        throw new Error('Precio inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseDuracion = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Duracion inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseApellido = (stringFromRequest) => {
    if (!isString(stringFromRequest)) {
        throw new Error('Apellido inexistente o incorrecto');
    }
    return stringFromRequest;
};
const parseEmail = (stringFromRequest) => {
    if (!isString(stringFromRequest)) {
        throw new Error('Email inexistente o incorrecto');
    }
    return stringFromRequest;
};
const parseDNI = (stringFromRequest) => {
    if (!isString(stringFromRequest)) {
        throw new Error('DNI inexistente o incorrecto');
    }
    return stringFromRequest;
};
const parseTelefono = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Telefono inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseIngresoId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('IngresoId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseCantidad = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Cantidad inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseTipoIngreso = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Tipo de ingreso inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseUsuarioId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('UsuarioId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseClienteId = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('ClienteId inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseMontoTotal = (numberFromRequest) => {
    if (!isNumber(numberFromRequest)) {
        throw new Error('Monto total inexistente o incorrecta');
    }
    return numberFromRequest;
};
const parseFecha = (dateFromRequest) => {
    if (!isDate(dateFromRequest)) {
        throw new Error('Fecha inexistente o incorrecta');
    }
    return dateFromRequest;
};
/* const parseDuracion = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Weather inexistente o incorrecto')
  }
  return weatherFromRequest
}

const parseVisibility = (VisibilityFromRequest: any): Visibility => {
  if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
    throw new Error('Visibility inexistente o incorrecto')
  }
  return VisibilityFromRequest
} */
const isString = (string) => {
    return typeof string === 'string';
};
const isNumber = (precio) => {
    return (typeof precio === 'number' && !isNaN(precio));
};
const isInt = (int) => {
    return ((typeof int === 'number' && !isNaN(int)) && Number.isInteger(int));
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
/*
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
} */
const addPlanEntry = (object) => {
    const newEntry = {
        Nombre: parseNombre(object.Nombre),
        Precio: parsePrecio(object.Precio),
        Duracion: parseDuracion(object.Duracion)
    };
    return newEntry;
};
exports.addPlanEntry = addPlanEntry;
const addClienteEntry = (object) => {
    const newEntry = {
        Nombre: parseNombre(object.Nombre),
        Apellido: parseApellido(object.Apellido),
        Email: parseEmail(object.Email),
        DNI: parseDNI(object.DNI),
        Telefono: parseTelefono(object.Telefono)
    };
    return newEntry;
};
exports.addClienteEntry = addClienteEntry;
const addClaseEntry = (object) => {
    const newEntry = {
        IngresoId: parseIngresoId(object.IngresoId),
        Cantidad: parseCantidad(object.Cantidad),
        Precio: parsePrecio(object.Precio)
    };
    return newEntry;
};
exports.addClaseEntry = addClaseEntry;
const addIngresoEntry = (object) => {
    const newEntry = {
        TipoIngresoId: parseTipoIngreso(object.TipoIngresoId),
        UsuarioId: parseUsuarioId(object.UsuarioId),
        ClienteId: parseClienteId(object.ClienteId),
        MontoTotal: parseMontoTotal(object.MontoTotal),
        Fecha: parseFecha(object.Fecha)
    };
    return newEntry;
};
exports.addIngresoEntry = addIngresoEntry;
const addEntrenadorEntry = (object) => {
    const newEntry = {
        Nombre: parseNombre(object.Nombre),
        Apellido: parseApellido(object.Apellido),
        Email: parseEmail(object.Email),
        DNI: parseDNI(object.DNI),
        Telefono: parseTelefono(object.Telefono)
    };
    return newEntry;
};
exports.addEntrenadorEntry = addEntrenadorEntry;
const addUsuarioEntry = (object) => {
    const newEntry = {
        Nombre: parseNombre(object.Nombre),
        Apellido: parseApellido(object.Apellido),
        Email: parseEmail(object.Email),
        DNI: parseDNI(object.DNI),
        Telefono: parseTelefono(object.Telefono),
        Contrasenia: parseDNI(object.Contrasenia)
    };
    return newEntry;
};
exports.addUsuarioEntry = addUsuarioEntry;
