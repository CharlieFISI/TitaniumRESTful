import { FechaClaseEntry, FechaClaseEntryWithoutId } from '../types'
import { Request, Response } from 'express'
import { connect } from '../conexion'
import { addFechaClaseEntry } from '../utils'
import { RowDataPacket } from 'mysql2/promise'

export async function getAllEntries (_req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect()
    const getAll = await conn.query('SELECT * FROM FechaClases')
    return res.json(getAll[0])
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}

export async function addEntry (req: Request, res: Response): Promise<Response> {
  try {
    const newEntry: FechaClaseEntryWithoutId = addFechaClaseEntry(req.body)
    const conn = await connect()
    // const dateUnique = await conn.query('SELECT * FROM FechaClases WHERE ClaseId = ?', [newEntry.Fecha]) as RowDataPacket[]
    // if (dateUnique[0].length !== 0) {
    //  return res.status(404).json({ message: 'Existe un registro con la misma fecha asignadada ' })
    // } else {
    await conn.query('INSERT INTO FechaClases SET ?', [newEntry])
    return res.json({
      message: 'Entrada de Fecha de la clase añadida'
    })
    // }
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}

export async function getIdEntry (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const conn = await connect()
    const getId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]) as RowDataPacket[]
    if (getId[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      return res.json(getId[0])
    }
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}

export async function deleteIdEntry (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const conn = await connect()
    const deleteId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]) as RowDataPacket[]
    await conn.query('DELETE FROM FechaClases WHERE FechaClaseId = ?', [id])
    if (deleteId[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      return res.json({
        message: 'Entrada de Fecha de la clase eliminada'
      })
    }
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}

export async function updateIdEntry (req: Request, res: Response): Promise<Response> {
  try {
    const { id } = req.params
    const updateEntry: FechaClaseEntry = req.body
    const conn = await connect()
    const updateId = await conn.query('SELECT * FROM FechaClases WHERE FechaClaseId = ?', [id]) as RowDataPacket[]
    await conn.query('UPDATE FechaClases set ? WHERE FechaClaseId = ?', [updateEntry, id])
    if (updateId[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      return res.json({
        message: 'Entrada de Fecha de la clase actualizada'
      })
    }
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}
