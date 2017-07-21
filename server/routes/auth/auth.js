// routes/auth/auth.js

import userRouter from './user/user.js'
import Router from 'koa-router'

const router = new Router()

router.use('/auth', userRouter.routes(), userRouter.allowedMethods())

export default router
