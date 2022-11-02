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
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-folder"
            title="供应商"
            value="myfiles"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer
        location="right"
        rail-width="100"
        rail
      ></v-navigation-drawer>

      <!-- 右 -->
      <article>
        <!-- <v-breadcrumbs
          :items="['Foo', 'Bar', 'Fizz']"
          ></v-breadcrumbs> -->
        <v-breadcrumbs class="bread" v-bind="bread">
          <v-breadcrumbs
            :items="['1️⃣', '2️⃣', '3️⃣']"
            divider=">"
          ></v-breadcrumbs>
          <v-breadcrumbs :items="menu" divider="<">
            <template v-slot:title="{ item }">
              {{ item.title.toUpperCase() }}
            </template>
          </v-breadcrumbs>
        </v-breadcrumbs>

        <router-view></router-view>
      </article>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { avatar, menu, bread } from "@/src/assets/href.js";
import { useBreadStore } from "@/src/store/bread";
// 动态
const rail = ref(true);
const breadStore = useBreadStore();
</script>

<style lang="scss" scoped>
article {
  .bread {
    padding: 25px 15px;
    justify-content: space-between;
    // width: 100vw;
    .v-breadcrumbs {
      padding: 0;
    }
    ::v-deep .v-breadcrumbs-item--disabled {
      opacity: 1;
    }
  }
}
</style>
