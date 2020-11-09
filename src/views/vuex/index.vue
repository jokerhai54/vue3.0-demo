<template>
  <div class="API">
    <p>1--获取数据</p>
    <div>
      {{ store.state.state }}
    </div>
    <hr />
    <p>2--todoList</p>
    <div>
      <a-form >
        <a-form-item label="Activity form" name="desc" style="width:1200px;">
          <a-textarea placeholder="请输入内容......." v-model:value="form.text"/>
        </a-form-item>
        <a-form-item class="send" :wrapper-col="{ span: 14, offset: 4 }">
          <a-button type="primary" @click="onSubmit"> 提交 </a-button>
          <a-button style="margin-left: 10px" @click="clearText">
            清空
          </a-button>
        </a-form-item> 
      </a-form>

      <!-- <hr> -->

        <a-list item-layout="horizontal" :data-source="data">
          <template v-for="item in store.state.todoList" :key="item.id">
            <a-list-item>
              <a-list-item-meta :description="item.title">
              </a-list-item-meta>
            </a-list-item>
          </template>
      </a-list>
    </div>
  </div>
</template>

<script>
import { reactive, watch } from "vue";
import { useStore } from "vuex";
import { message } from 'ant-design-vue';
export default {
  name: "App",
  setup() {
    const store = useStore();
    const form = reactive({text:''})
    // watch(()=>form.text,(newVal,oldVal)=>[
    //   console.log(newVal)
    // ])

    //提交
    const onSubmit = () =>{
      if(form.text == ''){
        message.warning('内容不能为空哦！！！！');
      }else{
        store.commit('addItem',form.text)
        form.text = ''
      }
    }
    const clearText = () =>{
      form.text = ''
    }



    return {
      store,
      form,
      onSubmit,
      clearText
    };
  },
};
</script>

<style lang="scss" scoped>
.API {
  div {
    margin-left: 80px;
  }
  textarea.ant-input{
    width: 1000px;
    height: 150px;
  }
  .send{
    margin-left: 935px;
  }
}
</style>