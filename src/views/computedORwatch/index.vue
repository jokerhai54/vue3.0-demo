<template>
  <div class="API">
      <p>1--computed(##传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象,##具有 get 和 set 函数的对象来创建可写的 ref 对象)</p>
      <div>
         
          <!-- <a-button type="dashed" @click="plusOne.get">++</a-button> {{state.count}}<a-button type="dashed" @click="plusOne"> --</a-button> -->
      </div>
      <hr>
      <p>2--watchEffect(立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。)</p>

      <hr>
      <p>3--watch(跟vue2的watch一致)</p>
      <div>
          <a-button type="dashed" @click="state.count++">++</a-button>--------- <a-button type="dashed" @click="state.count--"> --</a-button>
          <p>监听数据变化：{{state.count}}</p>
      </div>


  </div>
</template>

<script>
import { computed, reactive,ref,watch,watchEffect} from "vue";
export default {
  name: "App",
  setup() {
      const state = reactive({count:0})
      const state2 = ref(0)

    // 1--computed
    const plusCount = computed(()=> state.count+1)
    const plusCount2 = computed(()=> state2.value+1)
    //只读
    console.log('plusCount:',plusCount.value)
    console.log('plusCount2:',plusCount2.value)
    // 可更改的
    const plusOne = computed({
        get: () => plusCount2.value + 1,
        set: (val) => {
            plusCount2.value = val - 1
        },
    })
    console.log(plusOne.value)

    // 2--watchEffec
    watchEffect(()=>console.log("watchEffect:",state2.value))
    setTimeout(()=>{
        state2.value++
    },2000)
    const stop = watchEffect(() => {
        state2.value
    })
    // 停止监听程序
    stop()


    // 3--watch  
    watch(()=>state.count,(newVal,oldVal)=>{
        // console.log('newVal:',newVal)
        // console.log('oldVal:',oldVal)
        state.count = newVal
    })

    //监听多个数据源
        // watch([fooRef, barRef], ([foo, bar], [prevFoo, prevBar]) => {
        // /* ... */
        // })
    
    return {
      state,
      state2,
      plusOne

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