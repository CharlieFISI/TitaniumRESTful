"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClienteEntry = exports.addPlanEntry = void 0;
const parseString = (nombreFromRequest) => {
    if (!isString(nombreFromRequest)) {
        throw new Error('Nombre inexistente o incorrecto');
    }
    return nombreFromRequest;
};
const parseInt = (intFromRequest) => {
    if (!isNumber(intFromRequest)) {
        throw new Error('Precio inexistente o incorrecta');
    }
    return intFromRequest;
};
const parseNumber = (numberFromRequest) => {
    if (!isInt(numberFromRequest)) {
        throw new Error('Duracion inexistente o incorrecta');
    }
    return numberFromRequest;
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
/* const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
} */
const addPlanEntry = (object) => {
    const newEntry = {
        Nombre: parseString(object.Nombre),
        Precio: parseNumber(object.Precio),
        Duracion: parseInt(object.Duracion)
    };
    return newEntry;
};
exports.addPlanEntry = addPlanEntry;
const addClienteEntry = (object) => {
    const newEntry = {
        Nombre: parseString(object.Nombre),
        Apellido: parseString(object.Apellido),
        Email: parseString(object.Email),
        DNI: parseString(object.DNI),
        Telefono: parseNumber(object.Telefono)
    };
    return newEntry;
};
exports.addClienteEntry = addClienteEntry;
