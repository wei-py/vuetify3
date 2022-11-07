<template>
  <v-app-bar elevation="2" height="60">
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical" @click="switchDrawer"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { userDrawder } from "@/src/store/drawer";
import { throttle } from "lodash"
const drawer = userDrawder();

function switchDrawer() {
  throttle(drawer.switch, 100)
}

</script>
