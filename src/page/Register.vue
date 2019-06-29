<template>
  <div class="mycontainer">
    <div class="container">
      <span class="subtitle">注册</span>
      <div class="col-xs-12 submit">
        <input class="form-control" type="text" placeholder="姓名" required autofocus>
        <input class="form-control" type="text" placeholder="密码" required autofocus>
        <input class="form-control" type="text" placeholder="学号/教职工号" required autofocus>
        <input class="form-control" type="text" placeholder="学校" >
        <div class="unite form-inline">
          <input class="form-control col-xs-2" type="text" placeholder="手机号" required autofocus>
          <button class="btn btn-default col-sm-2">发送到手机</button>
        </div>
        <div class="form-inline">
          <input class="form-control col-xs-4" type="text" placeholder="验证码" required autofocus>
        </div>
        <br>
        <br>
        <div class="form-inline">
          <button class="btn btn-primary" @click="regSusses">确定</button>
          <button class="btn btn-primary" @click="backLogin">返回</button>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
export default {
  data(){
    return{}
  },
  methods: {
    backLogin(){
      this.$router.push('/')
    },
    regSusses(){
      this.$router.push('/')
    }
  }
}
</script>

<style scope>
.mycontainer{
  background: url('../assets/bgc/bgc_main.jpg') no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}
.container{
  background-color: rgba(255, 255, 255, 0.6);
  width: 70%;
  height: 70%;
  margin-top: 70px;
}
.subtitle{
  font-family: fantasy;
  font-size: 20px;
  color: rgb(128, 122, 122);
  margin: 5px;
  text-align: left;
}
.submit{
  margin-top: 20px;
  text-align: center;
}
.submit>*{
  margin: 5px;
}
.unite{
  position: relative;
  padding-bottom: 35px;
}
</style>
