import Router from 'koa-router'
// import auth from './auth/auth.js'
import user from './user/user.js'

const router = new Router()

// router.use(auth.routes(), auth.allowedMethods())
router.use(user.routes(), user.allowedMethods())

export default router
