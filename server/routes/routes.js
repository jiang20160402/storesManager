import Router from 'koa-router'
import auth from './auth/auth.js'

const router = new Router()

router.use(auth.routes(), auth.allowedMethods())

export default router
