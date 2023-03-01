// import { Weather, Visibility } from './enums'

// export type NonSensivityInfoPlanEntry = Pick<PlanEntry, 'id' | 'date' | 'weather' | 'visibility'>

// export type NonSensivityInfoPlanEntry = Omit<PlanEntry, 'comment'>

export interface PlanEntry {
  PlanId: number
  Nombre: string
  Precio: number
  Duracion: number
}

export interface ClienteEntry {
  ClienteId: number
  Nombre: string
  Apellido: string
  Email: string
  DNI: string
  Telefono: number
}

export interface ClaseEntry {
  ClaseId: number
  IngresoId: number
  Cantidad: number
  Precio: number
}

export interface IngresoEntry {
  IngresoId: number
  TipoIngreso: number
  UsuarioId: number
  ClienteId: number
  MontoTotal: number
  Fecha: Date
}

export type PlanEntryWithoutId = Omit<PlanEntry, 'PlanId'>
export type ClienteEntryWithoutId = Omit<ClienteEntry, 'ClienteId'>
export type ClaseEntryWithoutId = Omit<ClaseEntry, 'ClaseId'>
export type IngresoEntryWithoutId = Omit<IngresoEntry, 'ClaseId'>
