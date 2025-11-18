import { Router } from 'express'
import * as userController from '../controllers/user.controller.js'

const router = Router()

router.post('/users',userController.createUser)
router.get('/users',userController.getAllUsers)
router.get('/users/:id',userController.getUserById)
router.delete('/users/:id',userController.deleteUserById)
router.patch('/users/:id',userController.updateUserById)

export default router
