import { PlanEntry, PlanEntryWithoutId } from '../types'
import { Request, Response } from 'express'
import { connect } from '../conexion'
import { toPlanEntryWithoutId } from '../utils'

export async function getAllEntries (_req: Request, res: Response): Promise<Response> {
  const conn = await connect()
  const getAll = await conn.query('SELECT * FROM Planes')
  return res.json(getAll[0])
}

export async function addEntry (req: Request, res: Response): Promise<Response> {
  try {
    const newEntry: PlanEntryWithoutId = toPlanEntryWithoutId(req.body)
    const conn = await connect()
    await conn.query('INSERT INTO Planes SET ?', [newEntry])
    return res.json({
      message: 'Entrada de Plan añadida'
    })
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}

export async function getIdEntry (req: Request, res: Response): Promise<Response> {
  const id = req.params.id
  const conn = await connect()
  const getId = await conn.query('SELECT * FROM Planes WHERE PlanId = ?', [id])
  return res.json(getId[0])
}

export async function deleteIdEntry (req: Request, res: Response): Promise<Response> {
  const id = req.params.id
  const conn = await connect()
  await conn.query('DELETE FROM Planes WHERE PlanId = ?', [id])
  return res.json({
    message: 'Entrada de Plan eliminada'
  })
}

export async function updateIdEntry (req: Request, res: Response): Promise<Response> {
  try {
    const id = req.params.id
    const updateEntry: PlanEntry = req.body
    const conn = await connect()
    await conn.query('UPDATE Planes set ? WHERE PlanId = ?', [updateEntry, id])
    return res.json({
      message: 'Entrada de Plan actualizada'
    })
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}
