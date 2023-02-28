/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { getAllEntries, addEntry, getIdEntry, deleteIdEntry, updateIdEntry } from '../services/planesServicio'

const router = express.Router()

router.route('/')
  .get(getAllEntries)
  .post(addEntry)

router.route('/:id')
  .get(getIdEntry)
  .delete(deleteIdEntry)
  .put(updateIdEntry)

/*
router.get('/:id', (req, res) => {
  const plan = planesServicio.findById(+req.params.id)

  return (plan != null)
    ? res.send(plan)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newPlanEntry = toNewPlanEntry(req.body)
    const addedPlanEntry = planesServicio.addPlan(newPlanEntry)

    res.json(addedPlanEntry)
  } catch (e: unknown) {
    let message: string
    if (e instanceof Error) {
      message = e.message
    } else {
      message = String(e)
    }

    res.status(400).send(message)
  }
})
*/

export default router
