<template>
  <a-layout id="components-layout-demo-top-side-2" v-if="$route.meta.name != 'data-map'">
    <a-layout-header class="header" style="background:#1da57a">
      <div class="logo" style="height:50px;margin:6px 0">
            <img  src="../assets/logo.png" alt="">
      </div>


        <menu-unfold-outlined
          v-if="state.collapsed"
          class="trigger"
          @click="() => (state.collapsed = !state.collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (state.collapsed = !state.collapsed)" />
      <!-- <a-menu
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
      </a-menu> -->
      <SwitcherOutlined @click="screenfull" class="full_screen" v-if="state.isFullScreen"/>
      <ExpandAltOutlined  @click="screenfull" class="full_screen" v-if="!state.isFullScreen"/>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="state.selectedKeys2"
          v-model:openKeys="state.openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu :key="index+1" v-for="(item,index) in router" >
            <template v-slot:title>
              <span>
                <UserOutlined v-if="index == 0"/>
                <ToolOutlined v-if="index == 1"/>
                <TrademarkOutlined v-if="index == 2"/>
                <EyeOutlined v-if="index == 3"/>
                <DeploymentUnitOutlined v-if="index == 4"/>
                <CloseOutlined v-if="index == 5"/>
                <DribbbleOutlined v-if="index == 6"/>
                <DingtalkOutlined v-if="index == 7"/>
                <TableOutlined  v-if="index == 8"/>
                <HeartOutlined v-if="index == 9"/>
                {{item.title1}}</span>
            </template>
            <a-menu-item :key="index+1"><router-link :to="item.path" :target="item.path == '/data-map' ? '_blank' :''">{{item.title2}}</router-link>
            </a-menu-item>
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
          :style="{ background: '#fff', padding: '24px',minHeight: '1000px' }"
          class="aaa"
        >
         <transition  enter-active-class="animated bounce" leave-active-class="animated hinge">
             <router-view ></router-view>
         </transition>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="js">
import {UserOutlined,ToolOutlined,TableOutlined,TrademarkOutlined,EyeOutlined,SwitcherOutlined,ExpandAltOutlined  ,DeploymentUnitOutlined,CloseOutlined,DribbbleOutlined,DingtalkOutlined,HeartOutlined} from '@ant-design/icons-vue';
import {reactive,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import screenfulls from "screenfull";

// 是否全屏并按键ESC键的方法
function checkFull() {
    var isFull =
      document.fullscreenEnabled ||
      window.fullScreen ||
      document.webkitIsFullScreen ||
      document.msFullscreenEnabled;
    // to fix : false || undefined == undefined
    if (isFull === undefined) {
      isFull = false;
    }
    return isFull;
}
export default {
components: {
    UserOutlined,
    TrademarkOutlined,
    EyeOutlined,
    DeploymentUnitOutlined,
    CloseOutlined,
    DribbbleOutlined,
    DingtalkOutlined,
    HeartOutlined,
    ToolOutlined,
    TableOutlined,
    SwitcherOutlined,
    ExpandAltOutlined 
  },
  setup(){
       const router = useRouter().options.routes
       router.shift()
       const state = reactive({
            selectedKeys1: ['2'],
            selectedKeys2: ['1'],
            collapsed: false,
            openKeys: ['1'],
            isFullScreen: false
        })
        //  全屏事件
       const screenfull = () => {
          screenfulls.toggle();
          state.isFullscreen = true;
        }
        onMounted(()=>{
          window.onresize = () => {
            // 全屏下监控是否按键了ESC
            if (!checkFull()) {
              // 全屏下按键esc后要执行的动作
              state.isFullscreen = false;
            }
          };
        })
      return {
          state,
          router,
          screenfull,
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
    // background: none!important;
    border-radius: 40px 15px;
   img{
        width: 100%;
        height: 100%;
   }
}
.full_screen{
  position: absolute;
  right: 20px;
  top: 5px;
  font-size: 18px;
  color: white;
}


</style>