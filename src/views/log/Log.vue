<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="/">首页</Breadcrumb-item>
                <Breadcrumb-item>日志列表</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <Row>
            <!-- <Col span="3">
                <cate-tree :type="1" :selectChange="selectChange"></cate-tree>
            </Col> -->
            <Col span="24">
                <div class="btns">
                    <Button type="info" icon="edit" @click="addNote">写日志</Button>
                </div>
                <!-- 日志内容简要展示 -->
                <Row>
                    <Col span="16" offset="4">
                        <div class="noteSimpleShow">
                            <div class="oneNoteshow" v-for="item in notes" key="item">
                                <h4>{{item.title}}</h4>
                                <div class="noteInfo" v-html="item.content">{{item.content}}</div>
                                <div><Button type="text" @click="readalltext">阅读全文</Button></div>
                                <div class="bottomBar"></div>
                            </div>
                        </div>
                        <div class="pageBar"> <Page :total="total" size="small" :page-size="pageSize" :current="currentPage"></Page></div>
                    </Col>
                </Row>
            </Col>
        </Row>
    
    
    </div>
</template>

<script>
    import Base from '../../common/Base.js'
    import VueUEditor from 'vue-ueditor'
    import CateTree from '../../components/layout/Cate.vue';

    export default {
        mixins: [Base],
        components: {
            VueUEditor,
            CateTree
        },
        data() {
            return {
                notes: [{title: '这是第一篇日志', content: '我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，'},{title: '这是第一篇日志', content: '我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，'},{title: '这是第一篇日志', content: '我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，'},{title: '这是第一篇日志', content: '我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，'},{title: '这是第一篇日志', content: '我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，我总以为我的牺牲和奉献很伟大，原来只是我的一相情愿自作聪明自以为是因而沾沾自喜自鸣得意自高自大，实际上一切毫无意义，落的个如此的结果是自讨没趣自作自受自讨苦吃，'}],
                ue: null,
                total: 0, //总数据条数
                pageSize: 5, //每页数据数
                currentPage: 1, //当前页
                // module: 'log',
                params: {
                    page: 1,
                    limit: 10
                }
            }
        },
        methods: {
            // selectChange(node) {
            //     this.formValidate.cateId = node[0]._id;
            //     this.formValidate.cate = {
            //         _id : node[0]._id,
            //         title : node[0].title
            //     }
            //     this.filter.cateId = node[0]._id;
            //     this.getData()
            // },
            readalltext () { //阅读全文

            },
            addNote () {
                window.location.href = '#/note/addNote'
            },
            getData () {
                var vm = this;
                vm.$http({
                    method: 'GET',
                    url: '/log/list',
                    param: vm.params,
                    header: 'Accept:application/json'
                }).then(res => {
                    if(res.data.code == 0) {
                        vm.notes = res.data.result.docs;
                        vm.total = res.data.result.total;
                        vm.currentPage = res.data.result.page;
                    }
                })
            }
        },
        created () {
            this.getData();
        }
    }
</script>
