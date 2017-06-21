<template>  
    <el-row class="content">
        <span>你好, {{username}}!</span>
        <el-row>
            <el-col :span="8">
                <span>名称：</span>
            </el-col>
            <el-col :span="16">
                <el-input
                    v-model="store_name"
                    placeholder="请输入名称">
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <span>联系人：</span>
            </el-col>
            <el-col :span="16">
                <el-input
                    v-model="store_linkname"
                    placeholder="请输入联系人">
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <span>手机号：</span>
            </el-col>
            <el-col :span="16">
                <el-input
                    v-model="store_mobile"
                    placeholder="请输入手机号">
                </el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <span>名称：</span>
            </el-col>
            <el-col :span="16">
                <el-input
                    v-model="store_address"
                    placeholder="请输入地址">
                </el-input>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
      created () {
        const baseInfo = JSON.parse(sessionStorage.getItem('sosoBaseInfo'))
        this.username = baseInfo.loginName
        this.id = baseInfo.id
      },
      data () {
        return {
          id: '',
          username: '',
          store_name: '',
          store_linkname: '',
          store_mobile: '',
          store_address: ''
        }
      }
    }

</script>

<style lang="stylus">
    
</style>
