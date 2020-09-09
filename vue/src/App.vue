<template>
  <div>
    <h3>Vue App</h3>
    <div>{{ count }}</div>
    <Content />
    <Button v-bind:onClick="inc" />
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";

export default {
  components: {
    Content: defineAsyncComponent(() => import("./components/Content")),
    Button: defineAsyncComponent(() => import("./components/Button")),
  },

  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };
    return {
      count,
      inc,
    };
  },
};
</script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
