<template>
<!--   <i-col :span="spanLeft" class="layout-menu-left">
    <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left"></div>
        <Menu-item name="1">
             <router-link to="/" activeClass="active" exact><Icon type="home" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/" activeClass="active" exact>平台首页</router-link></span>
        </Menu-item>
        <Menu-item name="2">
            <router-link to="/user" activeClass="active"><Icon type="person" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/user" activeClass="active">用户管理</router-link></span>
        </Menu-item>
        <Menu-item name="3">
            <router-link to="/log" activeClass="active"><Icon type="document-text" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/log" activeClass="active">公告管理</router-link></span>
        </Menu-item>
        <Menu-item name="4">
            <router-link to="/upload" activeClass="active"><Icon type="pin" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/upload" activeClass="active">图书上架管理</router-link></span>
        </Menu-item>
        <Menu-item name="5">
            <router-link to="/cate" activeClass="active"><Icon type="folder" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/cate" activeClass="active">图书分类管理</router-link></span>
        </Menu-item>
        
    </Menu>
</i-col> -->
<Menu mode="horizontal" theme="white" active-name="1">
                <MenuItem name="0">
                    <div class="logo"></div>
                </MenuItem>
                <router-link to="/"><MenuItem name="1">
                    <Icon type="home"></Icon>
                    首页
                </MenuItem></router-link>
                <router-link to="/user">
                <MenuItem name="2">
                    <Icon type="person-stalker"></Icon>
                    朋友
                </MenuItem></router-link>
                <router-link to="/log">
                <MenuItem name="3">
                    <Icon type="chatbubbles"></Icon>
                    日志
                </MenuItem></router-link>
                 <router-link to="/cate">
                <MenuItem name="4">
                    <Icon type="ios-photos"></Icon>
                    分类
                </MenuItem></router-link>
           
        </Menu>
</template>

<script>
    export default {
        props:['spanLeft','iconSize']
    }
</script>

<style lang="scss" scoped>
    .active{
        color:white!important;
    }
</style>