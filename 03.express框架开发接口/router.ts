import { Router, Request, Response } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('OK~');
});
router.get('/data', (req: Request, res: Response) => {
  res.send('OK data~');
});
export default router;
