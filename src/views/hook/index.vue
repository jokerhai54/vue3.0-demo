<template>
  <div class="API">
    <p>1--</p>
    <div>
      {{ name }}{{ state2.like }}
      <a-button @click="inc">Clicked {{ count1 }} times.</a-button>
    </div>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
  reactive,
  readonly
} from "vue";
export default {
  name: "App",
  setup() {
    const count1 = ref(0);
    const count2 = ref(0);
    const name = ref("lihai");
    const state1 = reactive({ age: 22 });
    const state2 = readonly({ like: "breaking" });

    console.log("setup:");
    onMounted(() => {
      console.log("onMounted:");
    });
    onBeforeMount(() => {
      console.log("onBeforeMount:");
    });


    onUpdated(() => {
      console.log("onUpdated:");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate:");
    });
    

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount:");
    });
    onUnmounted(() => {
      console.log("onUnmounted:");
    });


    onErrorCaptured(() => {
      console.log("onErrorCaptured:");
    });


    onRenderTracked((e) => {
      console.log("onRenderTracked:", e.newValue);
    });
    onRenderTriggered((e) => {
      console.log("onRenderTriggered:", e);
    });

    const inc = () => {
      count1.value++;
      name.value = "joker";
    };
    return {
      count1,
      inc,
      name,
      state2,
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