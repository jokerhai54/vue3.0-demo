<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo">
            <img  src="../assets/logo.png" alt="">
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="state.selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          nav 1
        </a-menu-item>
        <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="state.selectedKeys2"
          v-model:openKeys="state.openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template v-slot:title>
              <span><user-outlined />Composition API</span>
            </template>
            <a-menu-item key="1"><router-link to="/composition_API">API</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template v-slot:title>
              <span><deployment-unit-outlined />Reactive类工具API</span>
            </template>
            <a-menu-item key="2" ><router-link to="/reactive">react-api</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template v-slot:title>
              <span><deployment-unit-outlined />ref类工具API</span>
            </template>
            <a-menu-item key="3" ><router-link to="/ref">ref-api</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub4">
            <template v-slot:title>
              <span><deployment-unit-outlined />computed AND watch</span>
            </template>
            <a-menu-item key="4" ><router-link to="/com&watch">com&watch</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub6">
            <template v-slot:title>
              <span><deployment-unit-outlined />HOOK</span>
            </template>
            <a-menu-item key="6" ><router-link to="/hook">hook-function</router-link></a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub7">
            <template v-slot:title>
              <span><close-outlined />VUEX</span>
            </template>
            <a-menu-item key="7" ><router-link to="/vuex">vuex_exercise</router-link></a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '600px' }"
        >
        <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="js">
import { UserOutlined,AliwangwangOutlined,DeploymentUnitOutlined ,CloseOutlined } from '@ant-design/icons-vue';
import {reactive} from 'vue'
export default {
components: {
    UserOutlined,
    AliwangwangOutlined,
    DeploymentUnitOutlined,
    CloseOutlined
  },
  setup(){
      const state = reactive({
            selectedKeys1: ['2'],
            selectedKeys2: ['1'],
            collapsed: false,
            openKeys: ['sub1'],
      })
      return {
          state
      }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}

</style>

<style lang="scss" scoped>
.logo{
    display: flex;
    background: none!important;
   img{
        width: 100%;
        height: 100%;
   }
}
</style>