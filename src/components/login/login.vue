<template>

  <!--  这里是外面的-->
  <div id="login">

    <!-- 头部 -->
    <div class="head">

      <!-- 中间 -->
      <div class="head-center">


        <div class="head-img">
          <img src="../../assets/head_logo.png">
        </div>


        <!--      中间的 ---- 菜单 -->
        <div class="head-menus">
          <ul>
            <li> 首页</li>
            <li> 招聘服务</li>
            <li> 展翅课堂</li>
            <li> 人才测评</li>
            <li> 专业背调</li>
            <li> 培训辅导</li>
            <li> 关于我们</li>
          </ul>
        </div>


        <!--      右边的,,btn按钮-->
        <div class="head-btn">
          <button>企业注册</button>
          <button>企业登录</button>
        </div>

      </div>


    </div>


    <!-- 第二层  :  轮播图 -->
    <div class="map">

      <!-- 注意这里要找时候 加个背景图片,就不做轮播图了 -->

      <div class="map-login">

        <div class="map-login-A">
          <span @click="loginMi()"> 密码登录 </span>
          <span @click="loginXin()"> 短信登录 </span>
        </div>

        <div class="map-login-B">


          <!--          注意这个是中间 的,,,要用子路由来显示-->
          <router-view></router-view>

        </div>


        <div class="map-login-C">
          <button>登录</button>
          <span>没有帐号?  <span> 立即注册 </span>  <span>忘记密码?</span> </span>
        </div>


        <div>


        </div>


      </div>
    </div>


    <!--    第三层:  产品及服务 -->
    <div class="three">

      <h3>产品及服务 </h3>
      <p>提升人才招聘效率,降低企业 招聘成本</p>

      <div class="three-box">

        <div class="three-box-left">
          <img src="../../assets/login/00.png" alt="">
          <h4>在线招聘,免费体验</h4>
          <p> 入驻易展翅在线招聘平台，即可免费创建企业招聘专属页面，免费体验实习、兼职、全职岗位发布，享有免费参加易展翅举办的全国高校人才公益招聘会活动的邀请机会。 </p>
          <hr>
          <button>查看详情</button>
        </div>

        <div class="three-box-crent">
          <img src="../../assets/login/11.png" alt="">
          <h4>简历搜索,精准匹配</h4>
          <p>
            全网超过350万份完善的用户简历数据。为企业提供智能人才检索，通过AI智能“人-岗”匹配算法，运用大数据技术对简历的需求标签、培训、测评记录、社会实践记录和职位进行高维度匹配和推荐最合适的候选人简历。
          </p>
        </div>

        <div class="three-box-right">
          <img src="../../assets/login/22.png" alt="">
          <h4> 委托 招聘,品质高效 </h4>
          <p>
            针对企业个性化人才需求，通过专业化的运作手段提供校园渠道和社会渠道以及灵活、可定制的人才委托招聘服务；在保障人才招聘效率同时，保障人才质量；以结果为导向，准确高效匹配人才，帮助企业提供招聘效率，有效降低招聘成本。
          </p>

        </div>


      </div>


    </div>
  </div>


</template>

<script>
export default {
  name: "logna",
  methods: {
    loginMi() {
      // alert("成功了"),
      this.$router.push('/mi')
    },
    loginXin() {
      this.$router.push('/xin')
    }
  },

  data() {
    return {}
  }
}
</script>

<style scoped>
/* 公共  */
li {
  list-style: none;
  float: left;
}

.head {
  height: 64px;
  background-color: skyblue;
  line-height: 64px;
}

.head-center {
  width: 1140px;
  height: 64px;
  margin: 0 auto;
  background-color: pink;
}


img {
  float: left;
  background-color: antiquewhite;
  border-top: 10px;

}

.head-menus {
  float: left;
  margin-left: 20px;
}

.head-btn {
  float: right;
}


.head-menus li {
  width: 104px;
  background-color: orange;
}

.map {
  height: 480px;
  background-color: salmon;
  /* 子绝父相 */
  /*  这是父 */
  position: relative;
}

.map-login {
  width: 320px;
  height: 360px;
  background-color: skyblue;
  margin-top: 20px;
  margin-left: 200px;
  /* 这是子 */
  position: absolute;
}

.three-box {
  width: 1320px;
  height: 495px;
  background-color: skyblue;
  margin: 0 auto;
}

.three-box-left {
  width: 333px;
  height: 376px;
  background-color: orange;
  display: inline-block;
}

.three-box-crent {
  width: 333px;
  height: 376px;
  background-color: orange;
  display: inline-block;
}

.three-box-right {
  width: 333px;
  height: 376px;
  background-color: orange;
  display: inline-block;
}


</style>
