<template>
  <div class="API">
      <p>1--toRaw(把响应式得对象转换为普通对象)</p>
      <hr>
      <p>2--禁止这个对象成为响应式</p>

  </div>
</template>

<script>
import { isReactive, reactive, toRaw,markRaw } from "vue";
export default {
  name: "App",
  setup() {
    // 1--toRaw
    const state = reactive();
    const statereactive = reactive(state)
    console.log('1--toRaw:',toRaw(statereactive) === state)

    // 2--markRaw
    const state2 = markRaw({name:"joker"})
    console.log(isReactive(reactive(state2.name)))
    

    //同理： shallowReactive, shallowReadonly




 
    return {
        state,

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