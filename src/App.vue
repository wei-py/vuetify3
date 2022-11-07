<template>
  <v-app>
    <v-main>
      <Drawer></Drawer>

      <Header></Header>
      <article>
        <router-view></router-view>
      </article>
    </v-main>
  </v-app>
</template>

<script setup>
import Drawer from "@/src/components/Drawer.vue";
import Header from "@/src/components/Header.vue";
</script>

<style lang="scss" scoped>
article {
  margin: 0 25px;
  height: calc(100vh - 60px);
}
</style>