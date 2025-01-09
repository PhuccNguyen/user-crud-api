import express from 'express';

import { Deteleuser, CreateUser, Getuser, Updateuser, updateUsers, Getall } from '../controllers/User.js';

const router = express.Router();

router.post('/', CreateUser);
router.delete('/:id', Deteleuser);
router.get('/:id', Getuser);
router.get('/', Getall);
router.put('/:id', updateUsers); 
router.patch('/:id', Updateuser); 



export default router;
