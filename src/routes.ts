import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Hola, Mundo',
  });
});

router.post('/mensajes', (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: req.body,
  });
});

export default router;
