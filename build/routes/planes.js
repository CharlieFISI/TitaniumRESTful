"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const planesServicio_1 = require("../services/planesServicio");
const router = express_1.default.Router();
router.route('/')
    .get(planesServicio_1.getAllEntries)
    .post(planesServicio_1.addEntry);
router.route('/:id')
    .get(planesServicio_1.getIdEntry)
    .delete(planesServicio_1.deleteIdEntry)
    .put(planesServicio_1.updateIdEntry);
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
exports.default = router;
