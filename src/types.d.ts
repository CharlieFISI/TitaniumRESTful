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

export type PlanEntryWithoutId = Omit<PlanEntry, 'PlanId'>
export type ClienteEntryWithoutId = Omit<ClienteEntry, 'ClienteId'>
