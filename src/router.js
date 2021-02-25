import Vue from 'vue'
import Router from 'vue-router'


import  home from './components/home'
import login from "./components/login/login"



//登录----> 这两个是  login   里面的
import mi from './components/login/ten/mi'
import xin from './components/login/ten/xin'

Vue.use(Router)

export default new Router({
	// mode: 'history',
    routes: [

    	//这里开始是沉默显示横版
		{
			path:'/home',
			component:home
		},
		{
			path:'/',
			redirect:'home'
		},

		{
			path:'/login',
			component:login,
			children:[
				{
					path:'/mi',
					component:mi
				},
				{
					path:'/xin',
					component:xin
				}
			]
		},


       


    ]
})
