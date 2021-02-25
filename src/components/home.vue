<template>


	<div id="home">

		<!--    <h2>导入进去,,,,测试</h2>-->


		<!--    头部-->
		<div class="heat">

			<div class="heat-top">
				<div class="heat-top-right">
					<span @click="btn()">企业登录入口</span>
					<span class="heat-top-right-right">团委登录入口</span>
				</div>
				<div class="heat-top-left">切换城市 <span> [全国] </span></div>

			</div>

			<!--   导航菜单   -->
			<div class="heat-bootom">
				<div class="heat-bootom-img">
					<!--          <img src="../assets/yi.png " alt="">-->
					<img src="../assets/yi.png" alt="">
				</div>
				<div class="heat-bootom-ul">
					<ul>
						<li>首页</li>
						<li> 职位</li>
						<li> 企业</li>
						<li>测评</li>
						<li> 资讯</li>
					</ul>
				</div>
				<div class="heat-bootom-btn">
					<button> 注册</button>
					<button> 登录</button>
				</div>
			</div>

		</div>


		<!--    菜单框 -->
		<div class="menus">

			<div class="menus-right">
				<ul>
					<li></li>
				</ul>
			</div>


			<div class="menus-left">

			</div>
		</div>


		<!--    宫格-->
		<div class="nine">


			<!--      宫格 上方,导航处-->

			<div class="nine-zhi">

				<div class="nine-zhi-left">
					<span>热门职位</span>
					<span> 最新职位 </span>
				</div>

				<div class="nine-zhi-right">
					<span>全职</span>
					<span> 实习 </span>
					<span> 兼职 </span>
				</div>


			</div>

			<div class="nine-gon">


				<!--        左边文字 -->
				<div v-for="(item,i) in jiugong" :key='i'>
					<ul>
						<li class="jiugong-li">
							<h5> {{ item.areaid }} </h5>
							<h5> 工资 : {{ item.classid }} </h5>
							<p class="jiugong-li-p"> 公司名: {{ item.companyname }} </p>
							<p>
								公司地址:
								<span class="jiugong-li-spa"> {{ item.areaid }} </span>
								<span class="jiugong-li-spa"> {{ item.classid }} </span>
								<span class="jiugong-li-spa"> {{ item.educationid }} </span>
							</p>
						</li>
					</ul>

				</div>


				<!--        右边图标 -->
				<div class="gontu">
					<img src="" alt="">
				</div>


			</div>

		</div>


		<!-- 宫格 2 -->
		<div class="gong">

			<div class="tags">
				<span>热门企业</span>
				<span>星级企业</span>
			</div>

			<ul>
				<li class="li-tags">
					<div>
						<img src="../assets/xiao.png" class="li-tags-img">
						<h3> 小天才科技有限公司  </h3>
						<span>  </span>

						<span> </span>

					</div>
				</li>
			</ul>







		</div>

<router-view></router-view>
	</div>
	
	


</template>

<script>
	export default {
		name: "home",


		methods: {
			btn(){
				console.log("成功了"),
				// 界面跳转到别的地方 
				this.$router.push( "/login" )
			}

		},


		data() {
			return {


				//  九宫格数据
				jiugong: [{
						areaid: "天河区",
						cityid: "源城区",
						classid: "应届毕业生",
						companyname: "思诚资源科技（东莞）有限公司",
						createtime: "2021-01-22 09:39:59",
						educationid: "本科",
						id: 4055,
						logo: "https://zcplan.oss-cn-shenzhen.aliyuncs.com/uploads//20180205/d38ac327d897cbf37378d7cea921411d.jpg",
						img: '../assets/nine/img1.jpg',
					},


					{
						areaid: "天河区",
						cityid: "源城区",
						classid: "应届毕业生",
						companyname: "北京华图宏阳教育文化发展股份有限公司河源分公司",
						createtime: "2021-01-22 09:39:59",
						educationid: "本科",
						id: 4055,
						logo: "https://zcplan.oss-cn-shenzhen.aliyuncs.com/uploads//20180205/d38ac327d897cbf37378d7cea921411d.jpg",
						img: '../assets/nine/img1.jpg',
					},
					{
						areaid: "天河区",
						cityid: "源城区",
						classid: "应届毕业生",
						companyname: "北京华图宏阳教育文化发展股份有限公司河源分公司",
						createtime: "2021-01-22 09:39:59",
						educationid: "本科",
						id: 4055,
						logo: "https://zcplan.oss-cn-shenzhen.aliyuncs.com/uploads//20180205/d38ac327d897cbf37378d7cea921411d.jpg",
						img: '../assets/nine/img1.jpg',
					}
				]

			}
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
		float: left;
	}


	.heat-top {
		width: 1280px;
		height: 30px;
		background-color: skyblue;
		margin: 0 auto;
		line-height: 30px;
	}

	.heat-top-right {
		float: left;
	}

	.heat-top-left {
		float: right;
	}

	.heat-bootom-ul {
		float: left;
	}

	.heat-bootom-img {
		float: left;
	}

	.heat-bootom {
		width: 1280px;
		height: 50px;
		background-color: pink;
		margin: 0 auto;
	}


	.menus {
		width: 1280px;
		height: 480px;
		background-color: skyblue;
		margin: 40px auto;
	}

	.menus-right {
		width: 380px;
		height: 480px;
		background-color: pink;

	}

	/*宫格*/
	.nine {
		width: 1280px;
		height: 860px;
		background-color: #87CEEB;
		margin: 0 auto;
	}

	.nine-zhi {
		width: 1200px;
		height: 40px;
		border-bottom: 5px solid orange;
	}

	.nine-zhi-left {
		float: left;
		margin-top: 20px;

		margin-left: 40px;
	}

	.nine-zhi-right {
		float: right;
		margin-top: 20px;
		margin-right: 40px;
	}

	.nine-zhi-right span {
		border: 1px solid red;
	}

	.jiugong-li {
		width: 378px;
		height: 136px;
		border: 1px solid red;

		margin-left: 30px;
		margin-top: 35px;

		float: left;
		display: inline-block;
	}

	h5 {
		font-size: 16px;
	}

	.jiugong-li-p {
		font-size: 14px;
	}

	.jiugong-li-spa {
		font-size: 12px;
	}

	.gontu {
		float: right;
		display: inline-block;
	}

	img {
		width: 94px;
		height: 94px;
		background-color: pink;
	}

	.gong{
		width: 1280px;
		height: 800px;
		background-color: #edf3ff;
		margin: 20px auto;
	}
	.tags{
		/* margin-top: 50px; */
		/*   改成 内的 */
		padding-top: 50px;
		padding-left: 30px;

	}
	.tags  span{
		margin-left: 20px;
	}

	.li-tags{
		width: 276px;
		height: 280px;
		border: 1px solid black;
	}

	.li-tags-img{
		width: 112px;
		height: 112px;
	}
</style>
