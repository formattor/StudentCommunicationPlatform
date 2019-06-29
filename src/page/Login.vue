<template>
  <div class="mycontainer">
    <div class="title">
      <span>校园交流园地</span>
    </div>
    <!-- 登陆窗口 -->
    <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading subtitle">登陆</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <div>
          <button class="btn btn-primary" type="submit" @click="login">登陆</button>
          <button class="btn btn-primary" type="submit" @click="register">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<<script>
export default {
  data(){
    return{}
  },
  methods: {
    login(){
      this.$router.push({path:'/Stuhome'})
    },
    register(){
      this.$router.push({path:'/register'})
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
.title{
  font-family: STXingkai;
  font-size: 45px;
  margin-left: 130px;
  margin-top: 40px;
}
.container{
  background-color: rgba(255, 255, 255, 0.85);
  padding: 15px;
  width: 250px;
  text-align: center;
  position: absolute;
  right: 15%;
  margin-top: 50px;
}
</style>
