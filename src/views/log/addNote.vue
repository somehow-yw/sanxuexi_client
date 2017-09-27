<template>
	<div id="addNote">
		<Row>
			<Col span="20">
				<div class="noteTitle"><Input v-model="params.title" placeholder="请输入日志标题" style="width: 300px"></Input></div>
				<quill-editor v-model="params.content" ref="myQuillEditor"></quill-editor>
			</Col>
			<Col span="4"><div class="btns">
				<Button type="success" @click="save">保存</Button>
			</div>
			</col>
		</Row>
	</div>
</template>
<script>

	 export default {
	 	components: {},
		data () {
			return {
				params: {
					content: '1111',
					title: ''
				}
			}
		},
		methods: {
			save () {
				var vm  = this;
				vm.$http({
					method: 'POST',
					url: '/log/data/',
					data: vm.params,
					header: 'Accept:application/json'
				}).then(res => {
					if (res.data.code == 0) {
						vm.params = {}
						vm.$Message.success({
							content: '日志添加成功',
							duration: 2
						})
					}
				})
			}
		}
	 }
</script>
<style lang="less">
	#addNote {
		.ivu-row{height: 100%;}
		width: 100%;height: 100%;
		.quill-editor{height: 100%;width: 90%;}
	}
</style>
