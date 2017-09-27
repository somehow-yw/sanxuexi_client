<template>
	<div id="login">
		<div class="loginbox">
			<div class="logo"></div>
			<Tabs value="login">
		        <TabPane label="登录" name="login">
					<Input v-model="logindata.name" placeholder="用户名" ></Input>
					<Input v-model="logindata.password" type="password" placeholder="密码（不少于6位）"></Input>
					<Button type="success" @click="loginIn" long>登录三月兮</Button>
		        </TabPane>
		        <TabPane label="注册" name="register">
		        	<Input v-model="registerdata.name" placeholder="姓名" ></Input>
		        	<Input v-model="registerdata.tel" placeholder="手机号"></Input>
		        	<Input v-model="registerdata.password" placeholder="密码（不少于6位）"></Input>
		        	 <Button type="success" @click="registerIn" long>注册三月兮</Button>
		        </TabPane>
    	</Tabs>
		</div>
	</div>
</template>
<script>
var CryptoJS = require("crypto-js");
	export default {
		data () {
			return {
				logindata:{
					name: 'yseeee',
					password: 'ys123...'
				},
				registerdata: {
					name: '',
					tel: '',
					password: ''
				}
			}
		},
		methods: {
			loginIn () {
				// var psd = CryptoJS.MD5(this.logindata, {asString: true}).toString();
				var psd = CryptoJS.SHA1(this.logindata.password).toString();
				console.log(this.logindata.password)
				console.log('登录加密',psd);
				var vm = this;
				vm.$http({
					url: '/users/login',
					method: 'POST',
					data: vm.logindata,
					header: 'Accept:application/json'
				}).then(res => {
					if (res.data.code == 0) {
						this.$store.state.login = true;
					}
				})
			},
			registerIn () {
				var psd = CryptoJS.SHA1(this.logindata.password).toString();
				console.log(this.logindata.password)
				console.log('注册加密',psd);
				var vm = this;
				vm.$http({
					url: '/users/data/',
					method: 'POST',
					data: vm.registerdata,
					header: 'Accept:application/json'
				}).then(res => {
					if (res.data.code == 0) {
						vm.$Message.success({
							content: '用户注册成功，请前往登录吧',
							duration: 2
						})
					}
				})
			}
		},
		created () {

		}
	}
</script>