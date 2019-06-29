<template>
  <div class="mycontainer">
    <div class="title">
      <span>校园交流园地</span>
    </div>
    <div class="subtitle">
      <span>学生客户端</span>
    </div>
    <div class="btns btn-group-vertical btn-group-lg">
      <button class="btn btn-info">个人中心</button>
      <button class="btn btn-info">消息发布</button>
      <button class="btn btn-info">好友列表</button>
      <button class="btn btn-info">模块选择</button>
    </div>
  </div>
</template>

<<script>
export default {
  data(){
    return{}
  },
  methods: {

  }
}
</script>

<style scope>
.mycontainer{
  background: url('../../assets/bgc/bgc_stu.jpg') no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%
}
.title{
  font-family: STXingkai;
  font-size: 50px;
  text-align: center;
  margin-top: 40px;
}
.subtitle{
  font-family: STXingkai;
  font-size: 25px;
  position: absolute;
  right: 20%;
}
.btns{
  margin: 100px;
}
</style>
