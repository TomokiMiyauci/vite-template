<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    console.log(2);
    const a = ref(0);

    return { a };
  },

  methods: {
    aaa() {
      console.log(1);
    },
  },
};
</script>
