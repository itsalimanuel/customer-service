<template>
  <div class="app-layout">
    <h1>sidebar</h1>
    <div class="main-container">
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import AppMain from "@/layout/components/AppMain";
export default {
  name: "index",
  data() {},
  components: {
    AppMain
  },
  computed: {
    classObject() {
      return {
        mobile: this.device === "mobile",
      };
    },
  },
  methods: {},
};
</script>

<style scoped></style>
