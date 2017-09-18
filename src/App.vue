<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
       <nprogress-container></nprogress-container>
       <template v-if="login">
       <asidebar></asidebar>
       <Row type="flex">
           <i-col span="20">
            <div class="layout-content">
                        <div class="layout-content-main"><router-view></router-view></div>
                         <footerbar></footerbar>
                    </div>
            </i-col>
        </Row>
        <!-- <Row type="flex">
            <asidebar :spanLeft="spanLeft"></asidebar>
            <i-col :span="spanRight" :iconSize="iconSize">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main"><router-view></router-view></div>
                     <footerbar></footerbar>
                </div>
               
            </i-col>
        </Row> -->

        </template>

        <template v-else>
             <login></login>
        </template>
    </div>

</template>

<script>
    import './less/index.less';
    import Footerbar from './components/layout/Footerbar.vue'
    import Asidebar from './components/layout/Asidebar.vue'
    import Login from './views/login_register/login.vue'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    var CryptoJS = require("crypto-js");
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer.vue'
    
    export default {
        data() {
            return {
                spanLeft: 4,
                spanRight: 20,
            }
        },
        methods: {
            ...mapActions(['checkLogin']),
           
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            }
        },
        components: {
            Footerbar,
            Asidebar,
            NprogressContainer,
            Login
        },
        computed: {
            ...mapGetters(['login']),
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$nprogress.configure({
                    parent: '.nprogress-container'
                })
            });
        }
    }
</script>

<style lang="scss">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    
    .nprogress-container {
        position: fixed !important;
        width: 100%;
        height: 50px;
        z-index: 2048;
        pointer-events: none;
        #nprogress {
            $color: red;
            .bar {
                background: $color;
            }
            .peg {
                box-shadow: 0 0 10px $color, 0 0 5px $color;
            }
            .spinner-icon {
                border-top-color: $color;
                border-left-color: $color;
            }
        }
    }
</style>