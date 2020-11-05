<template>
  <div class="hello">
    <a-modal
      title="Title"
      v-model:visible="state.visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      footer
    >
      接受父组件的数据：{{ msg }}<br />
      <hr />
      传递数据给父组件：<a-button @click="sendData">chick me！</a-button>
    </a-modal>
  </div>
</template>

<script lang='js'>
import { toRefs,reactive } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    name:String
  },
  setup(props,context){
    //相当于vue2--data初始化数据
    const state = reactive({
      visible:false
    })
    const {msg} = toRefs(props)
    //取数据
    // console.log('name',msg.value)
    // console.log('props',props)
    //context三个属性
    // console.log('context.attrs',context.attrs)//vue2--$attrs
    // console.log('context.slots',context.slots)//vue2--插槽
    // console.log('context.emit',context.emit)//vue2--$emit
    const sendData = () =>{
      context.emit('childsenddata','这是子组件传递的数据')
      state.visible = false
    }
    const openModal = (e) => {
      state.visible = e
    }

    return{
      state,
      props,
      sendData,
      openModal
    }
  }
}
</script>
<style scoped>
</style>
