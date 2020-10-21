import express from 'express';
import cors from 'cors';
import routes from './routes';

export default class Server {
  public port: number = Number(process.env.PORT) || 3000;

  constructor(private server: express.Application = express()) {
    this.server.use(cors());
    this.server.use(express.urlencoded());
    this.server.use(express.json());
    this.server.use('/', routes);
  }

  start(): void {
    this.server.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`);
    });
  }
}
