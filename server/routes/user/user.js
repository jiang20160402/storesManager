// routes/user/user.js

import userController from '../../controllers/user'
import Router from 'koa-router'

const router = new Router()

router.post('/user/register', userController.register)
router.post('/user/checkusername', userController.checkUsername)
router.post('/user/login', userController.login)

router.get('/user/:id', userController.getUserInfoById)
router.get('/user/logout', userController.logout)

export default router
