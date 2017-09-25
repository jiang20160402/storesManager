<template>
    <section class="loginBox">
      <section class="box">
        <div class="top">
          <p>用户登录</p>
        </div>
        <div class="import">
          <input class="user" type="text" v-model="account" placeholder="用户名">
        </div>
        <div class="import impsw">
          <input class="psw" type="password" @keyup.enter="loginToDo" v-model="password" placeholder="密码">
        </div>
        <span class="login" @click="loginToDo">登录</span>
        <span class="login" @click="login">注册</span>
        
      </section>
    </section>
</template>

<script>
    export default {
      data () {
        return {
          account: '',
          password: ''
        }
      },
      methods: {
        login () {
          this.$router.push('/register')
        },
        loginToDo () {
          let obj = {
            name: this.account,
            password: this.password
          }
          this.$http.post('/user/login', obj)
            .then((res) => {
              if (res.data.success) {
                sessionStorage.setItem('inventory-token', res.data.token)
                this.$message({
                  type: 'success',
                  message: '登录成功！'
                })
                this.$router.push('/main')
              } else {
                this.$message.error(res.data.info)
                sessionStorage.setItem('inventory-token', null)
              }
            }, (err) => {
              this.$message.error(`请求错误！${err}`)
              sessionStorage.setItem('inventory-token', null)
            })
        }

      }

    }

</script>

<style lang="stylus">
    .loginBox
      background url('../images/login.png') no-repeat
      background-size 100% 100%
      width 100%
      height 100%
    .box
      width 400px
      height 350px
      border 1px solid #ccc
      position absolute
      right 15%
      top 50%
      margin-top -175px
      background #fff
      border-radius 5px
      .import
        width 100%
        margin-bottom 20px
        position relative
        input
          width 245px
          height 40px
          border 1px solid #ccc
          border-radius 5px
          padding-left 45px
          line-height 30px
          font-size 16px
      .import:after
        position absolute
        display inline-block
        background #3187c2
        background-image url('../images/spress.png') 
        background-position 8px 8px
        width 40px
        height 40px
        top 1px
        left 54px
        content ''
        border-radius 5px 0 0 5px
      .impsw:after
        background-position -31px 8px
      .top
        width 100%
        height 40px
        text-align left
        padding-left 20px 
        border-bottom 3px solid #3187c2
        margin-bottom 50px
        p
          height 100%
          font-size 16px
          line-height 40px
      .login
        display inline-block
        height 40px
        line-height 40px
        color white
        width 36%
        background #3187c2
        border-radius 5px
        margin-right 2px
        margin-top 20px
        cursor pointer
</style>
