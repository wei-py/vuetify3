<template>
  <v-app>
    <v-main>
      <!--上 -->
      <v-app-bar elevation="2" height="45">
        <template v-slot:append>
          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-magnify"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <!-- 左 -->
      <v-navigation-drawer
        :rail="rail"
        @pointerenter="rail = false"
        @pointerleave="rail = true"
      >
        <v-list elevation="1">
          <v-list-item
            title="Linya"
            subtitle="sandra_a88@gmailcom"
            :prepend-avatar="avatar"
          />
        </v-list>

        <!-- <v-divider /> -->

        <!-- v-list -->
      </v-navigation-drawer>

      <!-- 右 -->
      <article>111</article>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { avatar } from "@/src/assets/href.js";
// 动态
const rail = ref(true);
</script>

<style lang="scss">
article {
  padding: 25px 50px;
}
</style>
