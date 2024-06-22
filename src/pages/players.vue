<template>
  <v-container>
    <div>
      <v-btn variant="elevated" color="primary">Primary</v-btn>
      <v-btn variant="flat" color="primary">Primary</v-btn>
      <v-btn variant="outlined" color="primary">Primary</v-btn>
      <v-btn variant="plain" color="primary">Primary</v-btn>
      <v-btn variant="text" color="primary">Primary</v-btn>
      <v-btn variant="tonal" color="primary">Primary</v-btn>
    </div>
    <div>
      <v-btn color="secondary">Secondary</v-btn>
    </div>
    <div>
      <v-btn color="success">Success</v-btn>
    </div>
    <div>
      <v-btn color="error">Error</v-btn>
    </div>
    <div>
      <v-btn color="warning">Warning</v-btn>
    </div>
    <div>
      <v-btn color="info">Info</v-btn>
    </div>
    <div>
      <v-btn color="accent">Accent</v-btn>
    </div>
    <div>
      <v-btn color="black">Black</v-btn>
    </div>
    <v-card>
      <v-data-table
        :headers="headers"
        :items="items"
        item-key="name"
        items-per-page="5"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const headers = [{ title: "Name", value: "name" }];
const items = ref([{ name: "Brotherhood 1" }]);
//
</script>
