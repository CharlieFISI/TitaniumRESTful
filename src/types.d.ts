// import { Weather, Visibility } from './enums'

export interface PlanEntry {
  PlanId: number
  Nombre: string
  Precio: number
  Duracion: number
}

// export type NonSensivityInfoPlanEntry = Pick<PlanEntry, 'id' | 'date' | 'weather' | 'visibility'>

// export type NonSensivityInfoPlanEntry = Omit<PlanEntry, 'comment'>

export type PlanEntryWithoutId = Omit<PlanEntry, 'PlanId'>
