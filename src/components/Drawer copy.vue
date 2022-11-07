<template>
  <v-navigation-drawer
    :rail="rail"
    @pointerenter="rail = false"
    @pointerleave="rail = true"
    @click="showOpen"
  >
    <v-list elevation="1">
      <v-list-item
        density="comfortable"
        title="Linya"
        subtitle="sandra_a88@gmailcom"
        :prepend-avatar="avatar"
      />
    </v-list>

    <!-- <v-divider /> -->

    <!-- v-list -->
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Home" value="Home"></v-list-item>

      <v-list-group>
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Users"
          ></v-list-item>
        </template>

        <v-list-item v-bind="props" value="Admin" title="Admin"></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { avatar } from "@/src/assets/href.js";

const rail = ref(true);

const open = ref("Users");
function showOpen() {
  console.log(open.value, 1111);
}
</script>

<style lang="scss" scoped></style>
