import express from 'express';
import { format } from 'morgan';
import auth from "../middleware/auth.js";

import {
    getUser,
    getUserFriends,
    addRemoveFriends,
} from '../controllers/userFriends.js'
const router = express.Router();

router.get('/:id',getUser)
router.get('/:id/friends',auth,getUserFriends)
router.patch('/:id/:friendId',auth,addRemoveFriends)


export default router