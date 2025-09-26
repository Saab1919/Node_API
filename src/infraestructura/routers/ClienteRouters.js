import { Router } from 'express';
import ClienteController from '../controllers/ClienteController.js';

const router = Router();

router.post('/', ClienteController.create);
router.get('/', ClienteController.getAll);
router.get('/:id', ClienteController.getById);
router.put('/:id', ClienteController.update);
router.delete('/:id', ClienteController.delete);

export default router;
