<template>
  <v-app-bar elevation="2" height="60">
    <v-app-bar-title>
      <!-- align-with-title -->
      <v-tabs >
        <v-tab>Tab 1</v-tab>
        <v-tab>Tab 2</v-tab>
        <v-tab>Tab 3</v-tab>
      </v-tabs>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical" @click="drawer.switch"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { userDrawder } from "@/src/store/drawer";
const drawer = userDrawder();
</script>


<style lang="scss" scoped>
::v-deep .v-tab--selected {
  background: #f7f8f8;
  .v-tab__slider {
    opacity: 0;
  }

}
</style>