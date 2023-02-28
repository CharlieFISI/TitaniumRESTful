import { PlanEntryWithoutId, ClienteEntryWithoutId } from './types'

const parseString = (nombreFromRequest: any): string => {
  if (!isString(nombreFromRequest)) {
    throw new Error('Nombre inexistente o incorrecto')
  }
  return nombreFromRequest
}

const parseInt = (intFromRequest: any): number => {
  if (!isNumber(intFromRequest)) {
    throw new Error('Precio inexistente o incorrecta')
  }
  return intFromRequest
}

const parseNumber = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Duracion inexistente o incorrecta')
  }
  return numberFromRequest
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

export const addPlanEntry = (object: any): PlanEntryWithoutId => {
  const newEntry: PlanEntryWithoutId = {
    Nombre: parseString(object.Nombre),
    Precio: parseNumber(object.Precio),
    Duracion: parseInt(object.Duracion)
  }
  return newEntry
}

export const addClienteEntry = (object: any): ClienteEntryWithoutId => {
  const newEntry: ClienteEntryWithoutId = {
    Nombre: parseString(object.Nombre),
    Apellido: parseString(object.Apellido),
    Email: parseString(object.Email),
    DNI: parseString(object.DNI),
    Telefono: parseNumber(object.Telefono)
  }
  return newEntry
}
