// controller/user.js

import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import config from '../config'

// 根据用户ID查询信息

exports.getUserInfoById = async(ctx) => {
  const id = ctx.params.id
  const result = await User.getUserById(id)
  ctx.body = result
}

// 用户登录

exports.login = async(ctx) => {
  const data = ctx.request.body
  const userInfo = await User.getUserByName(data.name)

  if (userInfo != null) {
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      ctx.body = {
        success: false,
        msg: '密码错误！'
      }
    } else {
      const userToken = {
        name: userInfo.username,
        id: userInfo.id
      }
      const secret = config.hash
      const token = jwt.sign(userToken, secret)
      ctx.body = {
        success: true,
        id: userInfo.id,
        accessToken: token,
        loginName: userInfo.username,
        msg: '登录成功!'
      }
    }
  } else {
    ctx.body = {
      success: false,
      msg: '用户不存在!'
    }
  }
}

// 用户注销
exports.logout = async(ctx) => {

}

// 判断用户名是否重复

exports.checkUsername = async(ctx) => {
  const data = ctx.request.body
  const userInfo = await User.getUserByName(data.name)

  if (userInfo != null) {
    ctx.body = {
      result: true
    }
  } else {
    ctx.body = {
      result: false
    }
  }
}

// 用户注册

exports.register = async(ctx) => {
  const data = ctx.request.body

  const userInfo = await User.getUserByName(data.name)

  if (userInfo != null) {
    ctx.body = {
      result: false,
      message: '注册失败，该用户名已被注册'
    }
  } else {
    const secret = config.hash
    let hash = bcrypt.hashSync(data.password, secret)
    data.password = hash
    const result = await User.addUser(data)

    if (result) {
      ctx.body = {
        result: true,
        message: '恭喜，注册成功'
      }
    } else {
      ctx.body = {
        result: false,
        message: '服务器异常，注册失败'
      }
    }
  }
}
