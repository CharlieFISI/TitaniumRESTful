import { ClaseEntry, ClaseEntryWithoutId } from '../types'
import { Request, Response } from 'express'
import { connect } from '../conexion'
import { addClaseEntry } from '../utils'
import { RowDataPacket } from 'mysql2/promise'

export async function getAllEntries (_req: Request, res: Response): Promise<Response> {
  try {
    const conn = await connect()
    const getAll = await conn.query('SELECT * FROM Clases')
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
    const newEntry: ClaseEntryWithoutId = addClaseEntry(req.body)
    const conn = await connect()
    const ingresoExist = await conn.query('SELECT * FROM Ingresos WHERE IngresoId = ?', [newEntry.IngresoId]) as RowDataPacket[]
    if (ingresoExist[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      await conn.query('INSERT INTO Clases SET ?', [newEntry])
      return res.json({
        message: 'Entrada de Clase añadida'
      })
    }
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
    const getId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]) as RowDataPacket[]
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
    const deleteId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]) as RowDataPacket[]
    await conn.query('DELETE FROM Clases WHERE ClaseId = ?', [id])
    if (deleteId[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      return res.json({
        message: 'Entrada de Clase eliminada'
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
    const updateEntry: ClaseEntry = req.body
    const conn = await connect()
    const ingresoExist = await conn.query('SELECT * FROM Ingresos WHERE IngresoId = ?', [updateEntry.IngresoId]) as RowDataPacket[]
    if (ingresoExist[0].length === 0) {
      return res.status(404).json({ message: 'El registro con el id especificado no existe' })
    } else {
      const updateId = await conn.query('SELECT * FROM Clases WHERE ClaseId = ?', [id]) as RowDataPacket[]
      await conn.query('UPDATE Clases set ? WHERE ClaseId = ?', [updateEntry, id])
      if (updateId[0].length === 0) {
        return res.status(404).json({ message: 'El registro con el id especificado no existe' })
      } else {
        return res.json({
          message: 'Entrada de Clase actualizada'
        })
      }
    }
  } catch (e) {
    let message
    if (e instanceof Error) message = e.message
    else message = String(e)
    return res.status(400).send(message)
  }
}