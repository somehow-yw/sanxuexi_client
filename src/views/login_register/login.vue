<template>
	<div id="login">
		<div class="loginbox">
			<div class="logo"></div>
			<Tabs value="login">
		        <TabPane label="登录" name="login">
					<Input v-model="logindata.name" placeholder="请输入用户名" ></Input>
					<Input v-model="logindata.password" type="password" placeholder="请输入密码"></Input>
					<Button type="success" @click="loginIn" long>登录三月兮</Button>
		        </TabPane>
		        <TabPane label="注册" name="register">
					<Form ref="formValidate" :model="registerdata" :rules="ruleValidate" :label-width="80">
						<FormItem label="" prop="name">
							<Input v-model="registerdata.name" placeholder="请输入用户名"></Input>
						</FormItem>
						<FormItem label="" prop="tel">		
							<Input v-model="registerdata.tel" @on-blur="testTel" placeholder="请输入11位手机号"></Input>
						</FormItem>
					
						<FormItem label="" prop="password">
							<Input v-model="registerdata.password" type="password" placeholder="密码（不少于6位）"></Input>
						</FormItem>
					</Form>
		        	<!-- <Input v-model="registerdata.name" placeholder="姓名" ></Input>
		        	 <Poptip  v-model="isteltrue" content="请输入11位手机号" placement="right">
						<Input v-model="registerdata.tel" placeholder="手机号"></Input>
					</Poptip>
		        	<Input v-model="registerdata.password" placeholder="密码（不少于6位）"></Input> -->
		        	<Button type="success" @click="registerIn" v-if="istelTrue" long>注册三月兮</Button>
					<Button type="success" @click="registerIn" v-else long disabled>注册三月兮</Button>
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
				istelTrue: false,
				logindata:{
					name: '',
					password: ''
				},
				registerdata: {
					name: '',
					tel: '',
					password: ''
				},
				ruleValidate: {
					name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
					],
					tel: [
                        { required: true, message: '请输入11位手机号', trigger: 'blur' },
                        { type: 'string',  min: 11, message: '请输入11位手机号', trigger: 'blur' }
					],
					password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
                    ]
				} 
			}
		},
		methods: {
			loginIn () {
				var loginEncryptData = JSON.parse(JSON.stringify(this.logindata));
				var psd = CryptoJS.SHA1(loginEncryptData.password).toString();
				loginEncryptData.password = psd;
				var vm = this;
				req.getUserInfo(vm, loginEncryptData, res=> {
					if(res.code == 0) {
						this.$store.state.login = true;
						this.setLStorag('psd',psd)
						// localStorage.setItem('psd', psd)
					}
				})
			},
			setLStorag(key, value) { //设置localStorage时间
				var curTime = new Date().getTime();
        		localStorage.setItem(key,JSON.stringify({data:value,time:curTime}));
			},
			testTel () { //验证手机号
				if(!(/^1[34578]\d{9}$/.test(this.registerdata.tel))){ 
						this.istelTrue = false;
					}
				else{
					this.istelTrue = true;
				} 
			},
			registerIn () {
				var registerEncryptData = JSON.parse(JSON.stringify(this.registerdata));
				var psd = CryptoJS.SHA1(registerEncryptData.password).toString();
				registerEncryptData.password = psd;
				var vm = this;
				vm.$http({
					url: '/users/data/',
					method: 'POST',
					data: registerEncryptData,
					header: 'Accept:application/json'
				}).then(res => {
					if (res.data.code == 0) {
						vm.$Message.success({
							content: '用户注册成功，请前往登录吧',
							duration: 2
						})
					}
					else {
						vm.$Message.warning({
							content: '此手机号已经被占用，请换个手机号试试吧',
							duration: 2
						})
					}
				})
			},
			isLogined (key, exp) { //验证用户是否登录
				var data = JSON.parse(localStorage.getItem('psd'));
				if (new Date().getTime() - data.time>exp) {
					console.log('信息已过期');
        		}
				else{
					this.istelTrue = true;
				}
			}
		},
		created () {
			this.isLogined('psd', 1000*60*20); //设置过期时间为20分钟
		}
	}
</script>
