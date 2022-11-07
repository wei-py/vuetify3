<template>
  <v-row>
    <v-col>
      <v-tabs>
        <v-tab>Item One</v-tab>
        <v-tab>Item Two</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
    </v-col>
    <v-col>
      <v-tabs>
        <v-tab>Item One</v-tab>
        <v-tab>Item Two</v-tab>
        <v-tab>Item Three</v-tab>
      </v-tabs>
    </v-col>
  </v-row>
  <!-- <v-card elevation="2" outlined shaped tile max-width="500">
  </v-card> -->
</template>

<style scoped lang="scss">
.v-row {
  margin: 0 !important;
  .v-col:nth-of-type(2) {
    ::v-deep .v-slide-group__content {
      flex-direction: row-reverse;
    }
  }
}
</style>
