import { PlanEntryWithoutId, ClienteEntryWithoutId, ClaseEntryWithoutId, IngresoEntryWithoutId, EntrenadorEntryWithoutId, UsuarioEntryWithoutIdAndDate, FechaClaseEntryWithoutId, TipoIngresoEntryWithoutId, PlanesIngresoEntryWithoutId } from './types'

const parseNombre = (stringFromRequest: any): string => {
  if (!isString(stringFromRequest)) {
    throw new Error('Nombre inexistente o incorrecto')
  }
  return stringFromRequest
}

const parsePrecio = (numberFromRequest: any): number => {
  if (!isNumber(numberFromRequest)) {
    throw new Error('Precio inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseDuracion = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Duracion inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseApellido = (stringFromRequest: any): string => {
  if (!isString(stringFromRequest)) {
    throw new Error('Apellido inexistente o incorrecto')
  }
  return stringFromRequest
}

const parseEmail = (stringFromRequest: any): string => {
  if (!isString(stringFromRequest)) {
    throw new Error('Email inexistente o incorrecto')
  }
  return stringFromRequest
}

const parseDNI = (stringFromRequest: any): string => {
  let flag = true
  for (let i = 0; i < stringFromRequest.length; i++) {
    if (!isInt(Number(stringFromRequest[i]))) flag = false
  }
  if (!flag) {
    throw new Error('DNI inexistente o incorrecto')
  }
  return stringFromRequest
}

const parseTelefono = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Telefono inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseIngresoId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('IngresoId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseCantidad = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Cantidad inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseTipoIngreso = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('Tipo de ingreso inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseUsuarioId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('UsuarioId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseClienteId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('ClienteId inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseMontoTotal = (numberFromRequest: any): number => {
  if (!isNumber(numberFromRequest)) {
    throw new Error('Monto total inexistente o incorrecta')
  }
  return numberFromRequest
}

const parseFecha = (dateFromRequest: any): Date => {
  if (!isDate(dateFromRequest)) {
    throw new Error('Fecha inexistente o incorrecta')
  }
  return dateFromRequest
}

const parseClaseId = (numberFromRequest: any): number => {
  if (!isInt(numberFromRequest)) {
    throw new Error('ClaseId inexistente o incorrecta')
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

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}
/*
const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
} */

export const addPlanEntry = (object: any): PlanEntryWithoutId => {
  const newEntry: PlanEntryWithoutId = {
    Nombre: parseNombre(object.Nombre),
    Precio: parsePrecio(object.Precio),
    Duracion: parseDuracion(object.Duracion)
  }
  return newEntry
}

export const addClienteEntry = (object: any): ClienteEntryWithoutId => {
  const newEntry: ClienteEntryWithoutId = {
    Nombre: parseNombre(object.Nombre),
    Apellido: parseApellido(object.Apellido),
    Email: parseEmail(object.Email),
    DNI: parseDNI(object.DNI),
    Telefono: parseTelefono(object.Telefono)
  }
  return newEntry
}

export const addClaseEntry = (object: any): ClaseEntryWithoutId => {
  const newEntry: ClaseEntryWithoutId = {
    IngresoId: parseIngresoId(object.IngresoId),
    Cantidad: parseCantidad(object.Cantidad),
    Precio: parsePrecio(object.Precio)
  }
  return newEntry
}

export const addIngresoEntry = (object: any): IngresoEntryWithoutId => {
  const newEntry: IngresoEntryWithoutId = {
    TipoIngresoId: parseTipoIngreso(object.TipoIngresoId),
    UsuarioId: parseUsuarioId(object.UsuarioId),
    ClienteId: parseClienteId(object.ClienteId),
    MontoTotal: parseMontoTotal(object.MontoTotal),
    Fecha: parseFecha(object.Fecha)
  }
  return newEntry
}

export const addEntrenadorEntry = (object: any): EntrenadorEntryWithoutId => {
  const newEntry: EntrenadorEntryWithoutId = {
    Nombre: parseNombre(object.Nombre),
    Apellido: parseApellido(object.Apellido),
    Email: parseEmail(object.Email),
    DNI: parseDNI(object.DNI),
    Telefono: parseTelefono(object.Telefono)
  }
  return newEntry
}

export const addUsuarioEntry = (object: any): UsuarioEntryWithoutIdAndDate => {
  const newEntry: UsuarioEntryWithoutIdAndDate = {
    Nombre: parseNombre(object.Nombre),
    Apellido: parseApellido(object.Apellido),
    Email: parseEmail(object.Email),
    DNI: parseDNI(object.DNI),
    Telefono: parseTelefono(object.Telefono),
    Contrasenia: parseDNI(object.Contrasenia)
  }
  return newEntry
}

export const addFechaClaseEntry = (object: any): FechaClaseEntryWithoutId => {
  const newEntry: FechaClaseEntryWithoutId = {
    ClaseId: parseClaseId(object.ClaseId),
    Fecha: parseFecha(object.Fecha)
  }
  return newEntry
}

export const addPlanesIngresoEntry = (object: any): PlanesIngresoEntryWithoutId => {
  const newEntry: PlanesIngresoEntryWithoutId = {
    PlanId: parseClaseId(object.ClaseId),
    IngresoId: parseIngresoId(object.IngresoId),
    FechaInicio: parseFecha(object.FechaInicio)
  }
  return newEntry
}

export const addTipoIngresoEntry = (object: any): TipoIngresoEntryWithoutId => {
  const newEntry: TipoIngresoEntryWithoutId = {
    Nombre: parseNombre(object.Nombre)
  }
  return newEntry
}
