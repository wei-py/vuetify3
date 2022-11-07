<template>
  <v-app>
    <v-main>
      <!-- 左 -->
      <Drawer></Drawer>
      <!--上 -->
      <Header></Header>


      <!-- 右 -->
      <article>
        <Bread></Bread>
        <router-view></router-view>
      </article>
    </v-main>
  </v-app>
</template>

<script setup>
import Drawer from "@/src/components/Drawer.vue";
import Bread from "@/src/components/Bread.vue";
import Header from "@/src/components/Header.vue";
import { useBreadStore } from "@/src/store/bread";
// 动态
const breadStore = useBreadStore();
</script>

<style lang="scss" scoped>
article {
  margin: 0 25px;
}
</style>
