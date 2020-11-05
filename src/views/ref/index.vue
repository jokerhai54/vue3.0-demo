<template>
  <div class="API">
    <p>1--isRef(检查一个值是否为一个ref对象)</p>
    <hr />

    <p>2--toRef(用来作为一个reactive对象的属性,保持响应式)</p>
    <hr>
    
    <p>3--toRefs(将响应式对象转换为普通对象(类似解构)，但是还可以保留响应式。可以用来对一些响应式变量多次复用。)</p>
    <div>
        <p>{{num1}}</p>
        <p>{{num2}}</p>
    </div>
    
    <hr>
    <p>4--unref(获取ref值的语法糖)</p>

    <hr>
    <p>5--customRef(创建一个自定义的ref,对它的读写进行手动控制。这是文档上的一个防抖的例子)</p>
    <div>
        <a-input v-model:text="text" placeholder="Basic usage" />
        <p>{{text}}</p>
    </div>

    <hr>
    <p>6--shallowRef, triggerRef(shallowRef数据是没有响应式的，但是可以使用triggerRef来手动触发)</p>


  </div>
</template>

<script>
function stateAll(){
    const state = reactive({
        num1:100,
        num2:200
    })
    return toRefs(state)
}

function customRefState(val,delay = 100){
    let timeout;
    return customRef((trk,trg)=>{
        return {
            get(){
                trk()
                return val
            },
            set(newVal){
               clearTimeout(timeout)
               timeout = setTimeout(()=>{
                   val = newVal
                   trk()
               },delay)
            }
        }
    })
}
import { isRef,toRef,toRefs,customRef, reactive, ref ,shallowRef,triggerRef} from "vue";

export default {
  name: "App",
  setup() {
    // 1--isRef
    const aa = reactive("不是");
    const bb = ref("是");
    console.log(isRef(aa), aa);
    console.log(isRef(bb), bb.value);

    // 2--toRef
    const state1 = reactive({a:0})
    const toState = toRef(state1,"a")
    state1.a++
    toState.value++
    console.log(state1.a) // 1
    console.log(toState.value) // 2

    //3--toRefs(解构)
    const {num1 , num2} = stateAll()

    //4--unref
    const unState = ref(33)

    //5--customRef

    //6--shallowRef, triggerRef
    const shallow = shallowRef({green:'hello'})
    shallow.value.green = 'hellko world'
    triggerRef(shallow)
    console.log(shallow.value.green)

    return {
        num1,
        num2,
        text: customRefState('hello')
    };
  },
};
</script>

<style lang="scss" scoped>
.API {
  div {
    margin-left: 80px;
  }
}
</style>