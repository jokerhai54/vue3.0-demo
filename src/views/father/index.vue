<template>
  <div class="API">
    <p>1--父子交互：</p>
    <div>
        1-1--接受子组件传递的数据：{{ state.child }}<br>
        2-2--<a-button type="dashed" @click="openChild"> open-child-modal </a-button>
        <child msg="Welcome to Your Vue.js App" @childsenddata="childData" ref="RefChilde"/>
    </div>
    <hr>
    <p>2--获取DOM元素:</p>
    <div>
        <span ref="dom">dom</span>
    </div>
    <hr>
    <p>3--readonly只读数据:</p>
    <div>
        <span>只读：{{readOnlyState.status2}}</span>
        <br>
        <span>非只读：{{state.status1}}</span>
    </div>
  </div>
</template>

<script>
import child from "./child/index.vue";
import { onMounted, reactive,ref ,readonly} from "vue";
export default {
  name: "App",
  components: {
    child,
  },
  setup() {
    //相当于vue2--data初始化数据
    const state = reactive({
         child: "",
         status1:'',
         status2:'这是只读数据'

        });
//1-------------------------------------
    //1---接受子组件传递过来的数据
    const childData = (e) => {
      state.child = e;
    };
    //2---通过ref获取到子组件的方法进行调用
    const RefChilde = ref()
    const openChild = () => {
      RefChilde.value.openModal(true); 
    };
//2--------------------------------------
    const testDom = ref("dom");
    onMounted(()=>{
        // console.log(testDom.value)
    })
//3--------------------------------------
 const readOnlyState = readonly(state)
 state.status1 = '这是非只读数据'
 readOnlyState.status2 = 2222 //不能改变数据
 
    return {
        state,
      childData,
      openChild,
      RefChilde,
      testDom,
      readOnlyState
    };
  },
};
</script>

<style lang="scss" scoped>
.API{
    div{
        margin-left: 80px;
    }
}
</style>