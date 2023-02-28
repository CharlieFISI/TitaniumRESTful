"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPlanEntryWithoutId = void 0;
const parseNombre = (nombreFromRequest) => {
    if (!isString(nombreFromRequest)) {
        throw new Error('Nombre inexistente o incorrecto');
    }
    return nombreFromRequest;
};
const parsePrecio = (precioFromRequest) => {
    if (!isNumber(precioFromRequest)) {
        throw new Error('Precio inexistente o incorrecta');
    }
    return precioFromRequest;
};
const parseDuracion = (duracionFromRequest) => {
    if (!isInt(duracionFromRequest)) {
        throw new Error('Duracion inexistente o incorrecta');
    }
    return duracionFromRequest;
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
const toPlanEntryWithoutId = (object) => {
    const newEntry = {
        Nombre: parseNombre(object.Nombre),
        Precio: parsePrecio(object.Precio),
        Duracion: parseDuracion(object.Duracion)
    };
    return newEntry;
};
exports.toPlanEntryWithoutId = toPlanEntryWithoutId;
