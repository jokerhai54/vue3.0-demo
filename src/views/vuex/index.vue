<template>
  <div class="API">
      <p>1--获取数据</p>
      <div>
          {{store.state.state}}
      </div>
      <hr>
  </div>
</template>

<script>
import { reactive,  } from "vue";
import { useStore } from 'vuex'
export default {
  name: "App",
  setup() {

    const store = useStore()
    console.log(store)





 
    return {
      store

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