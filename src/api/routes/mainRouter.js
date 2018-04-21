import { Router } from 'express';
import bodyParser from 'body-parser';

const router = Router();


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/', (req, res) => {
  res.send('HelloWorld');
});

export default router;
