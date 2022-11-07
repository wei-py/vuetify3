<template>
  <v-navigation-drawer rail rail-width="200">
    <!-- :rail="drawer.rail" -->
    <!-- @pointerenter="drawer.setFalse"
    @pointerleave="drawer.setTrue" -->
    <!-- <v-list elevation="1" nav>
      <v-list-item
        density="comfortable"
        title="Linya"
        subtitle="sandra_a88@gmailcom"
        :prepend-avatar="avatar"
      />
    </v-list> -->

    <!-- <v-divider /> -->

    <!-- v-list -->
    <v-list density="compact" nav>
      <v-list-item
        density="comfortable"
        title="Linya"
        subtitle="8888@gmailcom"
        :prepend-avatar="avatar"
      />
      <v-list-item
        v-for="m in menu"
        :title="m.title"
        :value="m.href"
        :key="m.title"
        @click="menuClick(m)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { avatar, menu, menuGroup } from "@/src/assets/href.js";
import { useBreadStore } from "@/src/store/bread";
import { userDrawder } from "@/src/store/drawer";

const { leftBread, rightBread } = useBreadStore();
const drawer = userDrawder();

const menuClick = (m) => {
  leftBread.length = 0;
  if (Reflect.has(menuGroup, m.title)) {
    leftBread.push(...menuGroup[m.title]);
  }
  console.log(leftBread);
};
</script>

<style lang="scss" scoped>
::v-deep .v-list-item-title {
  text-align: center;
}
</style>
