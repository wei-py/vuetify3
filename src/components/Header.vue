<template>
  <v-app-bar elevation="2" height="60">
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>
      <v-btn icon="mdi-magnify"></v-btn>
      <v-btn icon="mdi-dots-vertical" @click="switchRail"></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { userDrawder } from "@/src/store/drawer";
const drawer = userDrawder();

console.log(drawer);
function switchRail() {
  drawer.switch();
}


</script>
