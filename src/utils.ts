import { PlanEntryWithoutId } from './types'

const parseNombre = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error('Nombre inexistente o incorrecto')
  }
  return nombreFromRequest
}

const parsePrecio = (precioFromRequest: any): number => {
  if (!isNumber(precioFromRequest)) {
    throw new Error('Precio inexistente o incorrecta')
  }
  return precioFromRequest
}

const parseDuracion = (duracionFromRequest: any): number => {
  if (!isInt(duracionFromRequest)) {
    throw new Error('Duracion inexistente o incorrecta')
  }
  return duracionFromRequest
}

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

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isNumber = (precio: number): boolean => {
  return (typeof precio === 'number' && !isNaN(precio))
}

const isInt = (int: number): boolean => {
  return ((typeof int === 'number' && !isNaN(int)) && Number.isInteger(int))
}

/* const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
} */

export const toPlanEntryWithoutId = (object: any): PlanEntryWithoutId => {
  const newEntry: PlanEntryWithoutId = {
    Nombre: parseNombre(object.Nombre),
    Precio: parsePrecio(object.Precio),
    Duracion: parseDuracion(object.Duracion)
  }
  return newEntry
}
