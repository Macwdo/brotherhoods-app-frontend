<template>
  <v-container>
    <span class="text-h4">Home</span>
  </v-container>
  <v-container class="d-flex justify-space-between">
    <v-row>
      <v-col cols="12" lg="6" sm="12">
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          placeholder="Pesquisar por ..."
          clearable
          max-width="400"
          v-model="search"
        ></v-text-field>
      </v-col>

      <v-col cols="12" lg="6" sm="12" class="d-flex justify-end">
        <v-btn :block="isMobile"> Adicionar </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <DataTable url="payments" :headers="headers" :search="search" />
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";

import DataTable from "@/components/data-table.vue";

const display = useDisplay();
const isMobile = ref(display.mobile);

const search = ref("");

const headers = [
  {
    title: "id",
    key: "id",
    sortable: false,
  },
  {
    title: "name",
    key: "name",
    sortable: false,
  },
  {
    title: "value",
    key: "value",
    sortable: false,
  },
  {
    title: "status",
    key: "status",
    sortable: false,
  },
];
</script>
