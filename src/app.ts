import express, { Application } from 'express'

import indexRouter from './index'
import claseRouter from './routes/clases'
import clienteRouter from './routes/clientes'
import entrenadorRouter from './routes/entrenadores'
import fechaclaseRouter from './routes/fechaclases'
import ingresoRouter from './routes/ingresos'
import planRouter from './routes/planes'
import planingresoRouter from './routes/planesingresos'
import tipoingresoRouter from './routes/tipoingresos'
import usuarioRouter from './routes/usuarios'

export class App {
  private readonly app: Application

  constructor (private readonly port: number | string) {
    this.app = express()
    this.settings()
    this.middlewares()
    this.routes()
  }

  settings (): void {
    this.app.set('port', this.port)
  }

  middlewares (): void {
    this.app.use(express.json())
  }

  routes (): void {
    this.app.use(indexRouter)
    this.app.use('/api/clases', claseRouter)
    this.app.use('/api/clientes', clienteRouter)
    this.app.use('/api/entrenadores', entrenadorRouter)
    this.app.use('/api/fechaclases', fechaclaseRouter)
    this.app.use('/api/ingresos', ingresoRouter)
    this.app.use('/api/planes', planRouter)
    this.app.use('/api/planingresos', planingresoRouter)
    this.app.use('/api/tipoingresos', tipoingresoRouter)
    this.app.use('/api/usuarios', usuarioRouter)
  }

  async listen (): Promise<void> {
    await this.app.listen(this.port)
    console.log(`¡Servidor conectado al puerto ${this.port}!`)
  }
}
